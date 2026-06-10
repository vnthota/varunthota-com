import type { IconName } from "./SketchIcons";

export type TileVariant = "light" | "navy" | "coral";

export type Cell =
  | { kind: "label"; value: string; variant: TileVariant }
  | { kind: "icon"; value: IconName; variant: TileVariant }
  | { kind: "empty" };

const L = (value: string, variant: TileVariant = "light"): Cell => ({ kind: "label", value, variant });
const I = (value: IconName, variant: TileVariant = "light"): Cell => ({ kind: "icon", value, variant });
const E: Cell = { kind: "empty" };

// Far rows first (top, receding) → near rows last (bottom, largest).
// Decorative arrangement; edit freely to restyle the field.
export const ROWS: Cell[][] = [
  [L("Leadership"), I("camera", "navy"), L("UX"), E, I("chat", "coral"), L("UXR"), I("cursor", "navy")],
  [I("pencil"), L("UI", "navy"), L("Brainstorm"), I("eye", "coral"), E, L("Dev"), I("phone", "navy")],
  [L("Data"), I("send", "coral"), E, L("Figma", "navy"), I("users"), L("MVP"), I("heart", "coral")],
  [I("star", "navy"), L("Research"), I("play"), E, L("Strategy"), I("bulb", "coral"), L("Ship", "navy")],
  [L("Craft"), I("layout", "coral"), L("Photo"), I("camera", "navy"), E, L("UX"), I("cart")],
  [I("chat", "coral"), L("Dev"), I("cursor", "navy"), L("Data"), I("pencil"), E, L("UI")],
  [L("Design"), I("eye", "coral"), L("Figma"), I("send", "navy"), L("Craft"), I("heart", "coral"), L("Ship")],
];
