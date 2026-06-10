import type { ReactNode } from "react";

// Product-design / development + photography themed icon set.
export type IconName =
  | "cursor" // interaction
  | "pencil" // design / edit
  | "chat" // feedback
  | "eye" // usability review
  | "users" // user research / collaboration
  | "send" // ship / handoff
  | "bulb" // ideation
  | "layout" // wireframe
  | "code" // development
  | "vector" // pen tool / vectors
  | "ruler" // spacing / measure
  | "flag" // milestone
  | "clipboard" // backlog / tasks
  | "flow" // user flow / branch
  | "layers" // design system / components
  | "phone" // responsive / device
  | "camera" // photography
  | "aperture" // photography
  | "image" // photography
  | "film"; // photography

const PATHS: Record<IconName, ReactNode> = {
  cursor: <path d="M5 3l6.4 16 2.3-6.4L20 10.3z" />,
  pencil: (
    <>
      <path d="M4 20l3.2-.9L19 7.3a2 2 0 0 0-2.8-2.8L4.4 16.3 4 20z" />
      <path d="M14.4 6.6l3 3" />
    </>
  ),
  chat: (
    <path d="M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H9.5L5.5 18v-3H6a2 2 0 0 1-2-2z" />
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.6 12 5.6 21.5 12 21.5 12 18 18.4 12 18.4 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
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
  send: (
    <>
      <path d="M21 3L3 10.6l7 2.5 2.5 7z" />
      <path d="M21 3l-9 9" />
    </>
  ),
  bulb: (
    <>
      <path d="M9.2 17h5.6" />
      <path d="M10 20h4" />
      <path d="M12 3a6 6 0 0 1 4 10.4c-.7.7-1 1.3-1 2.6H9c0-1.3-.3-1.9-1-2.6A6 6 0 0 1 12 3z" />
    </>
  ),
  layout: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M3.5 9.5h17M9.5 9.5v11" />
    </>
  ),
  code: (
    <>
      <path d="M8.5 8L4 12l4.5 4" />
      <path d="M15.5 8L20 12l-4.5 4" />
      <path d="M13.2 6l-2.4 12" />
    </>
  ),
  vector: (
    <>
      <rect x="3" y="14" width="4.6" height="4.6" rx="0.8" />
      <rect x="16.4" y="5" width="4.6" height="4.6" rx="0.8" />
      <path d="M7.6 16.2c5 0 6-8.4 9-8.4" />
    </>
  ),
  ruler: (
    <>
      <path d="M3.5 8.8l5.3-5.3 11.7 11.7-5.3 5.3z" />
      <path d="M7 8l1.6 1.6M10 11l1.6 1.6M13 14l1.6 1.6" />
    </>
  ),
  flag: (
    <>
      <path d="M6 21V4" />
      <path d="M6 5h11l-2.2 3.2L17 11.5H6" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4.5" width="12" height="16.5" rx="2" />
      <path d="M9.5 4.5V3.4h5v1.1" />
      <path d="M9 11l1.6 1.6L13.6 9.6M9 16l1.6 1.6L13.6 14.6" />
    </>
  ),
  flow: (
    <>
      <circle cx="7" cy="5" r="2" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="17" cy="11" r="2" />
      <path d="M7 7v10" />
      <path d="M7 12h6c1.2 0 2-.8 2-2" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3.5 13L12 18l8.5-5" />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="3" width="11" height="18" rx="2.5" />
      <path d="M10.5 18h3" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M8 7l1.6-2.6h4.8L16 7" />
      <circle cx="12" cy="13.4" r="3.2" />
    </>
  ),
  aperture: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.4 3.3l-5 8.6" />
      <path d="M21.7 10.5l-9.7.1" />
      <path d="M16.9 20.6l-4.8-8.7" />
      <path d="M9.5 20.6l4.8-8.7" />
      <path d="M2.3 13.4l9.7-.1" />
      <path d="M7.1 3.4l4.8 8.7" />
    </>
  ),
  image: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="M4 17l5-4.5 3.5 3L16 13l4 4" />
    </>
  ),
  film: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8.5 4v16M15.5 4v16" />
      <path d="M6 7.5h.6M6 11.5h.6M6 15.5h.6M17.4 7.5h.6M17.4 11.5h.6M17.4 15.5h.6" />
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
