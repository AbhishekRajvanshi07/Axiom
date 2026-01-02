import { Token } from "@/types/token";

type Listener = (update: {
  id: string;
  price: number;
  change24h: number;
}) => void;

let listeners: Listener[] = [];
let tokens: Token[] = [];
let interval: NodeJS.Timeout | null = null;

export function startPriceSocket(initialTokens: Token[]) {
  tokens = initialTokens;

  if (interval) return;

  interval = setInterval(() => {
    if (!tokens.length) return;

    // pick a token
    const i = Math.floor(Math.random() * tokens.length);
    const t = tokens[i];

    // generate a new price relative to previous price
    const delta = (Math.random() - 0.5) * 0.02 * t.price;
    const newPrice = Math.max(0.0001, t.price + delta);

    // update local copy
    tokens[i] = {
      ...t,
      price: newPrice,
      change24h: Number((Math.random() * 10 - 5).toFixed(2)),
    };

    // emit update FOR THIS TOKEN
    listeners.forEach((cb) =>
      cb({
        id: t.id,
        price: newPrice,
        change24h: tokens[i].change24h,
      })
    );
  }, 1000);
}

export function subscribePriceUpdates(cb: Listener) {
  listeners.push(cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
  };
}
