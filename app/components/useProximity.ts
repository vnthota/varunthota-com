import { useEffect, type RefObject } from "react";

/**
 * Proximity field: each tile gets a `--p` (0→1) based on how close the cursor
 * is, so a smooth wave of tiles reacts as the pointer sweeps across — fluid and
 * "connected", not a binary per-tile hover. Reads the global cursor position, so
 * the grid itself can stay pointer-events:none. Desktop pointers only.
 */
export function useProximity(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const scene = ref.current;
    if (!scene) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const RADIUS = 190;
    let tiles: { el: HTMLElement; cx: number; cy: number }[] = [];

    const measure = () => {
      const els = scene.querySelectorAll<HTMLElement>(".grid-tile:not(.grid-tile--empty)");
      tiles = Array.from(els).map((el) => {
        const r = el.getBoundingClientRect();
        return { el, cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
      });
    };
    measure();

    let mx = -9999;
    let my = -9999;
    let raf = 0;
    let prevActive = new Set<HTMLElement>();

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onLeave = () => {
      mx = -9999;
      my = -9999;
    };

    const tick = () => {
      const nowActive = new Set<HTMLElement>();
      for (const t of tiles) {
        const dist = Math.hypot(t.cx - mx, t.cy - my);
        if (dist < RADIUS) {
          t.el.style.setProperty("--p", (1 - dist / RADIUS).toFixed(3));
          t.el.style.zIndex = "3";
          nowActive.add(t.el);
        }
      }
      for (const el of prevActive) {
        if (!nowActive.has(el)) {
          el.style.setProperty("--p", "0");
          el.style.zIndex = "";
        }
      }
      prevActive = nowActive;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);
    window.addEventListener("resize", measure);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("resize", measure);
      for (const t of tiles) {
        t.el.style.removeProperty("--p");
        t.el.style.zIndex = "";
      }
    };
  }, [ref]);
}
