import type { IconName } from "./SketchIcons";

export type TileVariant = "light" | "navy" | "coral";

export type Cell =
  | { kind: "label"; value: string; variant: TileVariant }
  | { kind: "icon"; value: IconName; variant: TileVariant }
  | { kind: "empty" };

// Blend of product design / development + photography vocabulary.
const LABELS: string[] = [
  // product design + development
  "UX", "UI", "UXR", "DEV", "DATA", "FIGMA", "MVP", "CRAFT", "SHIP", "AGILE",
  "SPRINT", "SCOPE", "QA", "FLOW", "SPEC", "DOCS", "LEAD", "PROTO", "WIRES",
  "SCRUM", "DESIGN", "SYSTEM", "RESEARCH", "STRATEGY", "BACKLOG", "PERSONA",
  "ITERATE", "METRICS", "RELEASE", "HANDOFF", "ROADMAP", "JOURNEY", "USABLE",
  "USER FLOW", "A/B TEST",
  // photography
  "PHOTO", "FILM", "LENS", "FOCUS", "FRAME", "RAW", "SHOOT", "EXPOSE",
  "COMPOSE", "LIGHT", "COLOR", "GRADE",
];

const ICONS: IconName[] = [
  // product design + development
  "cursor", "pencil", "chat", "eye", "users", "send", "bulb", "layout",
  "code", "vector", "ruler", "flag", "clipboard", "flow", "layers", "phone",
  // photography
  "camera", "aperture", "image", "film",
];

// Deterministic PRNG (mulberry32) so server and client render the same grid.
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Build a cols×rows field of tiles, deterministically. Mostly calm light tiles;
 * coral/navy accents placed on an even diagonal lattice (no clustering) and
 * alternated by checker parity so colours stay subtle and well distributed.
 */
export function buildGrid(cols: number, rows: number, seed = 7): Cell[][] {
  const rnd = mulberry32(seed);
  const grid: Cell[][] = [];
  let li = Math.floor(rnd() * LABELS.length);
  let ii = Math.floor(rnd() * ICONS.length);

  for (let r = 0; r < rows; r++) {
    const row: Cell[] = [];
    for (let c = 0; c < cols; c++) {
      if (rnd() < 0.08) {
        row.push({ kind: "empty" });
        continue;
      }
      // ~1 in 5 tiles is an accent, spread evenly on a diagonal, colour
      // alternated by checker parity to avoid same-colour runs.
      const isAccent = (c * 2 + r) % 5 === 0;
      const variant: TileVariant = isAccent ? ((c + r) % 2 === 0 ? "coral" : "navy") : "light";

      if (rnd() < 0.55) {
        li = (li + 1 + Math.floor(rnd() * 5)) % LABELS.length;
        row.push({ kind: "label", value: LABELS[li], variant });
      } else {
        ii = (ii + 1 + Math.floor(rnd() * 5)) % ICONS.length;
        row.push({ kind: "icon", value: ICONS[ii], variant });
      }
    }
    grid.push(row);
  }
  return grid;
}
