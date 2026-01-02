export type PriceDirection = "up" | "down" | null;

export interface Token {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume24h: number;
  liquidity: number;
  marketCap: number;
  status: "new" | "final" | "migrated";

  // ✅ ADD THIS
  direction?: PriceDirection;
  priceHistory?: number[];

}
