import { useEffect, type RefObject } from "react";

/**
 * Layered depth-drift parallax. Writes normalized pointer offset (-1..1) to
 * `--mx`/`--my` on the scene element; CSS multiplies by each row's `--depth`.
 * Desktop (fine pointer) only — touch and prefers-reduced-motion stay static.
 */
export function useParallax(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const tick = () => {
      const t = performance.now() / 1000;
      const driftX = Math.sin(t * 0.5) * 0.12; // gentle idle sway
      const driftY = Math.cos(t * 0.4) * 0.1;
      const tx = targetX + driftX;
      const ty = targetY + driftY;
      curX += (tx - curX) * 0.06; // springy follow
      curY += (ty - curY) * 0.06;
      el.style.setProperty("--mx", curX.toFixed(4));
      el.style.setProperty("--my", curY.toFixed(4));
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [ref]);
}
