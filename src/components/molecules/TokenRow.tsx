"use client";

import { Token } from "@/types/token";
import { usePriceFlash } from "@/hooks/usePriceFlash";
import { useRowFlash } from "@/hooks/useRowFlash";
import { Sparkline } from "@/components/atoms/Sparkline";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  token: Token;
};

export function TokenRow({ token }: Props) {
  const [open, setOpen] = useState(false);
  const priceFlash = usePriceFlash(token.price);
  const { flash: rowFlash, setFlash } = useRowFlash(token.price);
  const direction = token.direction ?? null;

  useEffect(() => {
    if (rowFlash && direction && rowFlash !== direction) {
      setFlash(direction);
    }
  }, [rowFlash, direction, setFlash]);

  return (
    <div className="border-t border-zinc-800 hover:bg-zinc-900 transition-colors">

      {/* MOBILE */}
      <div className="sm:hidden px-4 py-3 space-y-3">
        <div className="flex justify-between items-center">
          <div className="text-white font-medium">
            {token.symbol}
            <span className="ml-2 text-xs text-zinc-400">{token.name}</span>
          </div>

          <div
            className={[
              "font-mono",
              direction === "up" && "text-green-400",
              direction === "down" && "text-red-400",
            ].join(" ")}
          >
            ${token.price.toFixed(4)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-1 text-xs text-zinc-400">
          <span>24h</span>
          <span className="text-right">
            {token.change24h > 0 ? "+" : ""}
            {token.change24h}%
          </span>

          <span>Volume</span>
          <span className="text-right">
            ${token.volume24h.toLocaleString()}
          </span>

          <span>Liquidity</span>
          <span className="text-right">
            ${token.liquidity.toLocaleString()}
          </span>

          <span>Market Cap</span>
          <span className="text-right">
            ${token.marketCap.toLocaleString()}
          </span>
        </div>

        <Button
          size="sm"
          className="w-full bg-green-600 hover:bg-green-500"
          onClick={() => setOpen(true)}
        >
          Buy
        </Button>
      </div>

      {/* TABLET + DESKTOP */}
      <div
        className={[
          "hidden sm:grid",
          "grid-cols-[200px_140px_120px_120px_120px_1fr_72px]",
          "lg:grid-cols-[220px_160px_140px_140px_140px_1fr_80px]",
          "px-4 py-4 text-sm items-center",
          rowFlash === "up" && "bg-green-500/5",
          rowFlash === "down" && "bg-red-500/5",
        ].join(" ")}
      >
        <div className="text-white">
          <Popover>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <button className="flex items-center gap-2">
                    <span className="font-medium">{token.symbol}</span>
                    <span className="text-zinc-400 truncate">
                      {token.name}
                    </span>
                  </button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent>
                {token.name} ({token.symbol})
              </TooltipContent>
            </Tooltip>

            <PopoverContent className="w-64 bg-zinc-900 border-zinc-800">
              <div className="space-y-1 text-sm">
                <div>Liquidity: ${token.liquidity.toLocaleString()}</div>
                <div>Volume: ${token.volume24h.toLocaleString()}</div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex items-center gap-2">
          <div
            key={token.price}
            className={[
              "font-mono transition-all",
              direction === "up" && "text-green-400",
              direction === "down" && "text-red-400",
              priceFlash && "scale-[1.05]",
            ].join(" ")}
          >
            ${token.price.toFixed(4)}
          </div>

          <Sparkline
            data={token.priceHistory}
            direction={direction}
            pulseKey={token.price}
          />
        </div>

        <div className={token.change24h > 0 ? "text-green-400" : "text-red-400"}>
          {token.change24h > 0 ? "+" : ""}
          {token.change24h}%
        </div>

        <div className="font-mono truncate">
          ${token.volume24h.toLocaleString()}
        </div>

        <div className="font-mono text-center truncate">
          ${token.liquidity.toLocaleString()}
        </div>

        <div className="font-mono text-right truncate">
          ${token.marketCap.toLocaleString()}
        </div>

        <div className="flex justify-end">
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-500"
            onClick={() => setOpen(true)}
          >
            Buy
          </Button>
        </div>
      </div>

      {/* DIALOG */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-800">
          <DialogHeader>
            <DialogTitle>Buy {token.symbol}</DialogTitle>
          </DialogHeader>

          <div className="space-y-2 text-sm text-zinc-400">
            <div>Price: ${token.price.toFixed(4)}</div>
            <div>Liquidity: ${token.liquidity.toLocaleString()}</div>

            <Button className="w-full bg-green-600">
              Confirm Buy
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
