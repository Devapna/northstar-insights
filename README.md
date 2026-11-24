# Northstar insights landing page

A dark editorial landing page concept built with React, Vite, and TypeScript. It brings the viewport-triggered count-up metrics and a reusable rotating LightBeam button into a single responsive design.

## Run locally

```sh
pnpm install
pnpm dev
```

The metric values are illustrative. Replace the sample values and the contact email in `src/App.tsx` with your real content before publishing.

## Components

- `src/components/CountUp.tsx` animates a formatted value once when it enters the viewport, and honors reduced-motion preferences.
- `src/components/LightBeamButton.tsx` provides a reusable button with configurable three-color beam, hover shine, keyboard focus, and native button props.

