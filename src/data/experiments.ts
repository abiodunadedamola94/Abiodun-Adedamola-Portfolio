export type ExperimentStatus = "Live" | "WIP";

export type Experiment = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  status: ExperimentStatus;
  tagClass: string;
  overview: string;
  highlights: string[];
  stack: string[];
};

export const experiments: Experiment[] = [
  {
    slug: "interactive-particles",
    title: "Interactive Particles",
    description:
      "Canvas-based particle system that responds to mouse movement and touch gestures.",
    tag: "CANVAS",
    status: "Live",
    tagClass: "border-blue-500/20 bg-blue-500/10 text-blue-300",
    overview:
      "A lightweight 2D particle field rendered on HTML Canvas. Particles drift in soft Brownian motion and gently steer away from the cursor, creating a tactile, ambient feel suitable for hero backgrounds.",
    highlights: [
      "60fps animation loop using requestAnimationFrame",
      "Pointer-aware repulsion with smooth easing",
      "Adaptive density based on viewport size",
      "Respects prefers-reduced-motion",
    ],
    stack: ["HTML Canvas", "TypeScript", "RAF loop"],
  },
  {
    slug: "3d-card-hover",
    title: "3D Card Hover",
    description:
      "CSS 3D transforms for immersive card interactions with perspective depth.",
    tag: "CSS",
    status: "Live",
    tagClass: "border-violet-500/20 bg-violet-500/10 text-violet-300",
    overview:
      "Pure CSS 3D tilt card that tracks the pointer position to apply rotateX / rotateY transforms with perspective. A subtle specular highlight follows the cursor to sell the depth.",
    highlights: [
      "Perspective-driven tilt on hover",
      "Glare layer follows pointer",
      "Resets smoothly on mouse leave",
      "Touch-friendly fallback",
    ],
    stack: ["CSS transforms", "React", "Pointer events"],
  },
  {
    slug: "color-generator",
    title: "Color Generator",
    description:
      "AI-powered color palette generator for designers and developers.",
    tag: "AI",
    status: "WIP",
    tagClass: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
    overview:
      "Generates harmonious 5-color palettes from a single seed using HSL rotation. Click any swatch to copy its hex value. The AI-assisted naming layer is still in progress.",
    highlights: [
      "Seed-based deterministic palettes",
      "Click-to-copy hex values",
      "Light & dark previews",
      "Exportable as CSS variables",
    ],
    stack: ["HSL math", "Clipboard API", "React"],
  },
  {
    slug: "micro-animations",
    title: "Micro Animations",
    description:
      "Collection of reusable micro-interaction animations for web interfaces.",
    tag: "MOTION",
    status: "Live",
    tagClass: "border-amber-500/20 bg-amber-500/10 text-amber-300",
    overview:
      "A growing library of small, purposeful interactions — button press, like heart, success check, and skeleton shimmer — designed to add personality without distraction.",
    highlights: [
      "Press, like, success, shimmer presets",
      "Tailwind-only, no animation library",
      "Tuned for 200–400ms perception window",
      "Drop-in utility classes",
    ],
    stack: ["Tailwind CSS", "CSS keyframes", "React"],
  },
  {
    slug: "gradient-mesh",
    title: "Gradient Mesh",
    description:
      "Dynamic gradient mesh backgrounds generator with export options.",
    tag: "GENERATIVE",
    status: "Live",
    tagClass: "border-rose-500/20 bg-rose-500/10 text-rose-300",
    overview:
      "Layered radial gradients composed into a soft mesh background. Regenerate to roll new color stops or copy the generated CSS for use in your own projects.",
    highlights: [
      "One-click regeneration",
      "Copy CSS to clipboard",
      "Looks great in light & dark themes",
      "Tasteful, brand-safe color ranges",
    ],
    stack: ["Radial gradients", "Clipboard API", "React"],
  },
];

export const getExperiment = (slug: string) =>
  experiments.find((e) => e.slug === slug);
