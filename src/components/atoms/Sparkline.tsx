"use client";

import { useEffect, useState } from "react";

type Props = {
  data?: number[];
  direction?: "up" | "down" | null;
  pulseKey?: number; // price or timestamp
};

export function Sparkline({ data = [], direction, pulseKey }: Props) {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (!pulseKey) return;
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 280);
    return () => clearTimeout(t);
  }, [pulseKey]);

  if (data.length < 2) {
    return <div className="w-12 h-4.5" />;
  }

  const width = 48;
  const height = 18;
  const padding = 2;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((value, i) => {
    const x =
      (i / (data.length - 1)) * (width - padding * 2) + padding;
    const y =
      height -
      ((value - min) / range) * (height - padding * 2) -
      padding;
    return `${x},${y}`;
  });

  const path = `M ${points.join(" L ")}`;

  const color =
    direction === "up"
      ? "#22c55e"
      : direction === "down"
      ? "#ef4444"
      : "#a1a1aa";

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="shrink-0 overflow-visible"
    >
      {/* base line */}
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />

      {/* pulse on update */}
      {pulse && (
        <path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sparkline-burst"
        />
      )}
    </svg>
  );
}
