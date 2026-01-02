"use client";

import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import type { RootState } from "@/store";
import { setActiveTab } from "@/store/slices/uiSlice";

const tabs = [
  { key: "new", label: "New Pairs" },
  { key: "final", label: "Final Stretch" },
  { key: "migrated", label: "Migrated" },
] as const;

export function TokenTabs() {
  const activeTab = useSelector((state: RootState) => state.ui.activeTab);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">Axiom Pulse</h1>
      </div>

      <div
        role="tablist"
        className="inline-flex gap-1 rounded-2xl bg-zinc-900 p-1"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => dispatch(setActiveTab(tab.key))}
              className={clsx(
                "px-4 py-2 text-sm font-medium rounded-xl transition-all",
                isActive
                  ? "bg-white text-black shadow-sm"
                  : "text-zinc-300 hover:bg-zinc-800"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
