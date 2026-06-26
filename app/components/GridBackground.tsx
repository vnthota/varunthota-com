"use client";

import { useRef, type CSSProperties } from "react";
import { buildGrid } from "./grid-data";
import { SketchDefs, SketchIcon } from "./SketchIcons";
import { useProximity } from "./useProximity";

// Wide field so the grid fills the viewport edge-to-edge. Deterministic.
const COLS = 20;
const ROWS_N = 12;
const ROWS = buildGrid(COLS, ROWS_N, 7);

// Deterministic small rotation (SSR-safe — no Math.random at render).
function rotFor(seed: number): number {
  return ((seed * 137) % 7) - 3; // -3..3 deg
}

function labelSizeClass(value: string): string {
  const len = value.replace(/\s/g, "").length;
  if (len > 8) return " grid-tile__label--xs";
  if (len > 6) return " grid-tile__label--sm";
  return "";
}

export default function GridBackground() {
  const sceneRef = useRef<HTMLDivElement>(null);
  useProximity(sceneRef);

  return (
    <>
      <div className="grid-scene" ref={sceneRef} aria-hidden="true">
        <SketchDefs />
        <div className="grid-plane">
          {ROWS.map((row, ri) => (
            <div key={ri} className="grid-row">
              {row.map((cell, ci) => {
                if (cell.kind === "empty") {
                  return <div key={ci} className="grid-tile grid-tile--empty" />;
                }
                return (
                  <div
                    key={ci}
                    className={`grid-tile grid-tile--${cell.variant}`}
                    style={{ "--r": `${rotFor(ri * COLS + ci)}deg` } as CSSProperties}
                  >
                    {cell.kind === "label" ? (
                      <span className={`grid-tile__label${labelSizeClass(cell.value)}`}>
                        {cell.value}
                      </span>
                    ) : (
                      <SketchIcon name={cell.value} />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="grid-fade" aria-hidden="true" />
    </>
  );
}
