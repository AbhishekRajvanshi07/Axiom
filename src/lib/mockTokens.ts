import { Token } from "@/types/token";

export const mockTokens: Token[] = [
  // ===== NEW PAIRS =====
  { id: "1", symbol: "AXM", name: "Axiom", price: 0.0234, change24h: 12.4, volume24h: 523000, liquidity: 210000, marketCap: 4500000, status: "new" },
  { id: "2", symbol: "NOVA", name: "Nova Chain", price: 0.0041, change24h: -9.2, volume24h: 95000, liquidity: 44000, marketCap: 980000, status: "new" },
  { id: "3", symbol: "LUME", name: "Lumenswap", price: 0.031, change24h: -6.6, volume24h: 188000, liquidity: 90000, marketCap: 1450000, status: "new" },
  { id: "4", symbol: "AERO", name: "AeroFi", price: 0.087, change24h: 4.1, volume24h: 312000, liquidity: 170000, marketCap: 2800000, status: "new" },
  { id: "5", symbol: "PIX", name: "PixelDex", price: 0.014, change24h: 1.9, volume24h: 64000, liquidity: 28000, marketCap: 640000, status: "new" },
  { id: "6", symbol: "SPARK", name: "SparkNet", price: 0.056, change24h: -2.7, volume24h: 144000, liquidity: 76000, marketCap: 1200000, status: "new" },
  { id: "7", symbol: "TIDE", name: "TideSwap", price: 0.092, change24h: 8.8, volume24h: 420000, liquidity: 210000, marketCap: 3900000, status: "new" },
  { id: "8", symbol: "ORCA", name: "Orca Labs", price: 0.19, change24h: -1.3, volume24h: 288000, liquidity: 150000, marketCap: 5100000, status: "new" },
  { id: "9", symbol: "VOLT", name: "VoltX", price: 0.0064, change24h: 6.1, volume24h: 51000, liquidity: 23000, marketCap: 410000, status: "new" },
  { id: "10", symbol: "DRIP", name: "DripFi", price: 0.041, change24h: -4.9, volume24h: 98000, liquidity: 45000, marketCap: 860000, status: "new" },

  // ===== FINAL STRETCH =====
  { id: "11", symbol: "SOLX", name: "Sol X", price: 1.42, change24h: -3.1, volume24h: 1240000, liquidity: 870000, marketCap: 12800000, status: "final" },
  { id: "12", symbol: "FLUX", name: "Flux Labs", price: 2.63, change24h: 18.7, volume24h: 2430000, liquidity: 1120000, marketCap: 22300000, status: "final" },
  { id: "13", symbol: "ZEN", name: "Zenith", price: 4.92, change24h: 3.9, volume24h: 3800000, liquidity: 2100000, marketCap: 48000000, status: "final" },
  { id: "14", symbol: "ION", name: "Ion Protocol", price: 0.88, change24h: 2.3, volume24h: 740000, liquidity: 390000, marketCap: 8900000, status: "final" },
  { id: "15", symbol: "KITE", name: "Kite Network", price: 1.17, change24h: -0.8, volume24h: 520000, liquidity: 300000, marketCap: 6100000, status: "final" },
  { id: "16", symbol: "WAVE", name: "WaveFi", price: 3.14, change24h: 5.7, volume24h: 1980000, liquidity: 1020000, marketCap: 27100000, status: "final" },
  { id: "17", symbol: "CORE", name: "CoreDEX", price: 0.69, change24h: -1.1, volume24h: 640000, liquidity: 360000, marketCap: 7400000, status: "final" },
  { id: "18", symbol: "NEX", name: "Nexon", price: 6.41, change24h: 9.6, volume24h: 4900000, liquidity: 2900000, marketCap: 61000000, status: "final" },
  { id: "19", symbol: "SHIFT", name: "Shift Labs", price: 1.91, change24h: -6.2, volume24h: 810000, liquidity: 440000, marketCap: 9900000, status: "final" },
  { id: "20", symbol: "EDGE", name: "EdgeX", price: 0.53, change24h: 1.5, volume24h: 330000, liquidity: 180000, marketCap: 4200000, status: "final" },

  // ===== MIGRATED =====
  { id: "21", symbol: "MIG", name: "Migrate", price: 0.87, change24h: 6.8, volume24h: 342000, liquidity: 190000, marketCap: 3200000, status: "migrated" },
  { id: "22", symbol: "ORBIT", name: "Orbit Protocol", price: 0.119, change24h: -1.4, volume24h: 410000, liquidity: 210000, marketCap: 5800000, status: "migrated" },
  { id: "23", symbol: "PULSE", name: "PulseNet", price: 0.77, change24h: 1.2, volume24h: 620000, liquidity: 350000, marketCap: 7600000, status: "migrated" },
  { id: "24", symbol: "ARC", name: "Arcade", price: 0.45, change24h: -3.6, volume24h: 210000, liquidity: 130000, marketCap: 2600000, status: "migrated" },
  { id: "25", symbol: "GLIDE", name: "Glide Finance", price: 1.03, change24h: 4.4, volume24h: 540000, liquidity: 310000, marketCap: 6900000, status: "migrated" },
  { id: "26", symbol: "NOVA2", name: "Nova V2", price: 0.061, change24h: -0.9, volume24h: 178000, liquidity: 84000, marketCap: 1400000, status: "migrated" },
  { id: "27", symbol: "FUSE", name: "FuseChain", price: 2.21, change24h: 7.5, volume24h: 1820000, liquidity: 980000, marketCap: 21500000, status: "migrated" },
  { id: "28", symbol: "GRID", name: "GridX", price: 0.34, change24h: -2.1, volume24h: 260000, liquidity: 140000, marketCap: 3100000, status: "migrated" },
  { id: "29", symbol: "ATLAS", name: "AtlasFi", price: 5.78, change24h: 11.3, volume24h: 6100000, liquidity: 3500000, marketCap: 72000000, status: "migrated" },
  { id: "30", symbol: "RIFT", name: "Rift Protocol", price: 0.92, change24h: -5.4, volume24h: 480000, liquidity: 270000, marketCap: 5600000, status: "migrated" },
];
