import { useEffect, useState } from "react";

export function useRowFlash(trigger?: number) {
  const [flash, setFlash] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    if (!trigger) return;
    setFlash("up"); // temp value, will be overridden by direction
    const t = setTimeout(() => setFlash(null), 260);
    return () => clearTimeout(t);
  }, [trigger]);

  return { flash, setFlash };
}
