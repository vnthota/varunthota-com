"use client";

import { useRef, type CSSProperties } from "react";
import { ROWS } from "./grid-data";
import { SketchDefs, SketchIcon } from "./SketchIcons";
import { useParallax } from "./useParallax";

// Front rows drift more than back rows → diorama depth.
function depthFor(i: number, n: number): string {
  return (0.2 + (i / (n - 1)) * 0.8).toFixed(3);
}

// Deterministic small rotation (SSR-safe — no Math.random at render).
function rotFor(seed: number): number {
  return ((seed * 137) % 7) - 3; // -3..3 deg
}

export default function GridBackground() {
  const sceneRef = useRef<HTMLDivElement>(null);
  useParallax(sceneRef);

  return (
    <>
      <div className="grid-scene" ref={sceneRef} aria-hidden="true">
        <SketchDefs />
        <div className="grid-plane">
          {ROWS.map((row, ri) => (
            <div
              key={ri}
              className="grid-row"
              style={{ "--depth": depthFor(ri, ROWS.length) } as CSSProperties}
            >
              {row.map((cell, ci) => {
                if (cell.kind === "empty") {
                  return <div key={ci} className="grid-tile grid-tile--empty" />;
                }
                return (
                  <div
                    key={ci}
                    className={`grid-tile grid-tile--${cell.variant}`}
                    style={{ "--r": `${rotFor(ri * 7 + ci)}deg` } as CSSProperties}
                  >
                    {cell.kind === "label" ? (
                      <span className="grid-tile__label">{cell.value}</span>
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
