"use client";

import { Token } from "@/types/token";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "@/store/slices/uiSlice";
import type { RootState } from "@/store";
import { Skeleton } from "@/components/ui/skeleton";
import { TokenRow } from "@/components/molecules/TokenRow";

type Props = {
  tokens: Token[];
  isLoading?: boolean;
};

export function TokenTable({ tokens, isLoading = false }: Props) {
  const dispatch = useDispatch();
  const { sortKey, sortDirection } = useSelector(
    (state: RootState) => state.ui
  );

  const SortIndicator = ({ active }: { active: boolean }) =>
    active ? <span className="ml-1">{sortDirection === "asc" ? "↑" : "↓"}</span> : null;

  return (
    <div className="mt-6 w-full max-w-6xl mx-auto px-3 sm:px-4">
      <div className="rounded-2xl border border-zinc-800 overflow-x-auto">

        {/* DESKTOP HEADER */}
        <div className="hidden sm:grid grid-cols-[200px_140px_120px_120px_120px_1fr_72px] lg:grid-cols-[220px_160px_140px_140px_140px_1fr_80px] px-4 py-3 bg-zinc-900 text-xs text-zinc-300 sticky top-0 z-10">
          <div>Token</div>

          <div
            onClick={() => dispatch(setSort("price"))}
            className="cursor-pointer flex items-center"
          >
            Price <SortIndicator active={sortKey === "price"} />
          </div>

          <div>24h</div>

          <div
            onClick={() => dispatch(setSort("volume24h"))}
            className="cursor-pointer flex items-center"
          >
            Volume <SortIndicator active={sortKey === "volume24h"} />
          </div>

          <div className="text-center">Liquidity</div>

          <div
            onClick={() => dispatch(setSort("marketCap"))}
            className="cursor-pointer flex justify-end items-center"
          >
            Market Cap <SortIndicator active={sortKey === "marketCap"} />
          </div>

          <div className="text-right">Buy</div>
        </div>

        {/* BODY */}
        {isLoading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="hidden sm:grid grid-cols-[200px_140px_120px_120px_120px_1fr_72px] lg:grid-cols-[220px_160px_140px_140px_140px_1fr_80px] px-4 py-4 border-t border-zinc-800"
            >
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32 ml-auto" />
              <Skeleton className="h-6 w-14 ml-auto" />
            </div>
          ))
        ) : (
          tokens.map((token) => <TokenRow key={token.id} token={token} />)
        )}
      </div>
    </div>
  );
}
