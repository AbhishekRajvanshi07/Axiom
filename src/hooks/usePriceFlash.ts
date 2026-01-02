import { useEffect, useRef, useState } from "react";

export function usePriceFlash(price: number) {
  const prevPrice = useRef<number | null>(null);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (prevPrice.current === null) {
      prevPrice.current = price;
      return;
    }

    if (price !== prevPrice.current) {
      setFlash(true);
      const t = setTimeout(() => setFlash(false), 250);
      prevPrice.current = price;
      return () => clearTimeout(t);
    }
  }, [price]);

  return flash;
}
