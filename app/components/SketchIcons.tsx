import type { ReactNode } from "react";

export type IconName =
  | "camera"
  | "pencil"
  | "chat"
  | "phone"
  | "cursor"
  | "cart"
  | "users"
  | "eye"
  | "send"
  | "heart"
  | "star"
  | "bulb"
  | "play"
  | "layout";

const PATHS: Record<IconName, ReactNode> = {
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M8 7l1.6-2.6h4.8L16 7" />
      <circle cx="12" cy="13.4" r="3.2" />
    </>
  ),
  pencil: (
    <>
      <path d="M4 20l3.2-.9L19 7.3a2 2 0 0 0-2.8-2.8L4.4 16.3 4 20z" />
      <path d="M14.4 6.6l3 3" />
    </>
  ),
  chat: (
    <path d="M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H9.5L5.5 18v-3H6a2 2 0 0 1-2-2z" />
  ),
  phone: (
    <>
      <rect x="6.5" y="3" width="11" height="18" rx="2.5" />
      <path d="M10.5 18h3" />
    </>
  ),
  cursor: <path d="M5 3l6.4 16 2.3-6.4L20 10.3z" />,
  cart: (
    <>
      <circle cx="9.5" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
      <path d="M3 4.5h2.2l2.3 11h10l1.9-7H6.6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="9" r="3.1" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.4a3 3 0 0 1 0 5.6" />
      <path d="M17.2 14.2A5.5 5.5 0 0 1 20.5 19" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.6 12 5.6 21.5 12 21.5 12 18 18.4 12 18.4 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  send: (
    <>
      <path d="M21 3L3 10.6l7 2.5 2.5 7z" />
      <path d="M21 3l-9 9" />
    </>
  ),
  heart: <path d="M12 20S4 14.6 4 9.4A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 8 2.4C20 14.6 12 20 12 20z" />,
  star: (
    <path d="M12 3.5l2.6 5.6 6 .8-4.4 4.1 1.1 6L12 17.7 6.7 20l1.1-6-4.4-4.1 6-.8z" />
  ),
  bulb: (
    <>
      <path d="M9.2 17h5.6" />
      <path d="M10 20h4" />
      <path d="M12 3a6 6 0 0 1 4 10.4c-.7.7-1 1.3-1 2.6H9c0-1.3-.3-1.9-1-2.6A6 6 0 0 1 12 3z" />
    </>
  ),
  play: <path d="M7 4.5l12.5 7.5L7 19.5z" />,
  layout: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M3.5 9.5h17M9.5 9.5v11" />
    </>
  ),
};

export function SketchIcon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#sketch)"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

/** Rendered once at the scene root — provides the hand-drawn wobble filter. */
export function SketchDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
      <defs>
        <filter id="sketch" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves={2} seed={7} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale={2.2} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
