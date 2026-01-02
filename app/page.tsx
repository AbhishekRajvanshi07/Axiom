"use client";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import type { RootState } from "@/store";

import { TokenTabs } from "@/components/organisms/TokenTabs";
import { TokenTable } from "@/components/organisms/TokenTable";
import { fetchTokens } from "@/lib/fetchTokens";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { startPriceSocket, subscribePriceUpdates } from "@/lib/priceSocket";

export default function Page() {
  const { activeTab, sortKey, sortDirection } = useSelector(
    (state: RootState) => state.ui
  );

  const {
    data: initialTokens = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["tokens"],
    queryFn: fetchTokens,
  });

  const [liveTokens, setLiveTokens] = useState(initialTokens);
  const socketStarted = useRef(false);

  // sync query → local state
  useEffect(() => {
    setLiveTokens(initialTokens);
  }, [initialTokens]);

  // start socket ONCE + subscribe
  useEffect(() => {
    if (!liveTokens.length || socketStarted.current) return;

    socketStarted.current = true;
    startPriceSocket(liveTokens);

    const unsubscribe = subscribePriceUpdates((update) => {
      setLiveTokens((prev) =>
        prev.map((t) =>
          t.id === update.id
            ? {
                ...t,
                price: update.price,
                change24h: update.change24h,
                direction:
                  update.price > t.price
                    ? "up"
                    : update.price < t.price
                    ? "down"
                    : t.direction ?? null,
                priceHistory: [...(t.priceHistory ?? []), update.price].slice(
                  -30
                ),
              }
            : t
        )
      );
    });

    return () => {
      unsubscribe?.();
    };
  }, [liveTokens.length]);

  if (isError) {
    return (
      <main className="min-h-screen p-6 flex items-center justify-center">
        <Alert className="max-w-md bg-zinc-900 border-zinc-800">
          <AlertTitle className="text-white">Failed to load tokens</AlertTitle>
          <AlertDescription className="text-zinc-400 mt-2">
            Something went wrong while fetching token data.
          </AlertDescription>
          <Button
            variant="secondary"
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Retry
          </Button>
        </Alert>
      </main>
    );
  }

  const filteredTokens = liveTokens.filter(
    (token) => token.status === activeTab
  );

  const sortedTokens = [...filteredTokens].sort((a, b) => {
    if (!sortKey) return 0;

    const aVal = a[sortKey];
    const bVal = b[sortKey];

    if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
    if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <main className="min-h-screen p-6">
      <TokenTabs />
      <TokenTable tokens={sortedTokens} isLoading={isLoading} />
    </main>
  );
}