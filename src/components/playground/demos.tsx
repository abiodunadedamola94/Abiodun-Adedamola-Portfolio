import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Copy, Heart, RefreshCw } from "lucide-react";
import { toast } from "sonner";

/* -------------------- Interactive Particles -------------------- */
export function ParticlesDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const rect = () => canvas.getBoundingClientRect();
    const count = 80;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * rect().width,
      y: Math.random() * rect().height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.6,
    }));

    const onMove = (e: PointerEvent) => {
      const r = rect();
      pointer.current.x = e.clientX - r.left;
      pointer.current.y = e.clientY - r.top;
    };
    const onLeave = () => (pointer.current = { x: -9999, y: -9999 });
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    const tick = () => {
      const r = rect();
      ctx.clearRect(0, 0, r.width, r.height);
      for (const p of particles) {
        const dx = p.x - pointer.current.x;
        const dy = p.y - pointer.current.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 100) {
          const f = (100 - dist) / 100;
          p.vx += (dx / (dist || 1)) * f * 0.4;
          p.vy += (dy / (dist || 1)) * f * 0.4;
        }
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = r.width;
        if (p.x > r.width) p.x = 0;
        if (p.y < 0) p.y = r.height;
        if (p.y > r.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "hsl(217 91% 60% / 0.85)";
        ctx.fill();
      }
      // links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 70) {
            ctx.strokeStyle = `hsl(217 91% 60% / ${(1 - d / 70) * 0.25})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-[320px] w-full rounded-[18px] border border-border bg-background"
    />
  );
}

/* -------------------- 3D Card Hover -------------------- */
export function TiltCardDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glare, setGlare] = useState({ x: 50, y: 50, o: 0 });

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * 16;
    const ry = (px - 0.5) * 16;
    setStyle({
      transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`,
      transition: "transform 80ms ease-out",
    });
    setGlare({ x: px * 100, y: py * 100, o: 0.35 });
  };

  const reset = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0) rotateY(0) scale(1)",
      transition: "transform 400ms ease",
    });
    setGlare({ x: 50, y: 50, o: 0 });
  };

  return (
    <div className="grid place-items-center py-6">
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={style}
        className="relative h-[220px] w-[320px] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-violet-500 to-fuchsia-600 p-5 text-white shadow-xl will-change-transform"
      >
        <div className="text-[10px] uppercase tracking-widest opacity-80">Demo</div>
        <div className="mt-2 text-2xl font-semibold leading-tight">Tilt me</div>
        <div className="mt-1 text-xs opacity-80">Move the cursor across the card.</div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(220px circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.o}), transparent 60%)`,
          }}
        />
      </div>
    </div>
  );
}

/* -------------------- Color Generator -------------------- */
function hslToHex(h: number, s: number, l: number) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const c = l - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));
    return Math.round(255 * c).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function ColorGeneratorDemo() {
  const [seed, setSeed] = useState(Math.floor(Math.random() * 360));
  const palette = useMemo(
    () => Array.from({ length: 5 }, (_, i) => hslToHex((seed + i * 38) % 360, 65, 55 - i * 4)),
    [seed],
  );

  const copy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    toast.success(`Copied ${hex}`);
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-5 overflow-hidden rounded-[18px] border border-border">
        {palette.map((c) => (
          <button
            key={c}
            onClick={() => copy(c)}
            className="group relative h-32 transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: c }}
            aria-label={`Copy ${c}`}
          >
            <span className="absolute inset-x-0 bottom-2 text-center text-[10px] font-medium uppercase tracking-widest text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
              {c}
            </span>
          </button>
        ))}
      </div>
      <button
        onClick={() => setSeed(Math.floor(Math.random() * 360))}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs hover:bg-secondary"
      >
        <RefreshCw size={12} /> Generate new palette
      </button>
    </div>
  );
}

/* -------------------- Micro Animations -------------------- */
export function MicroAnimationsDemo() {
  const [liked, setLiked] = useState(false);
  const [done, setDone] = useState(false);
  const [pressed, setPressed] = useState(0);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <button
        onClick={() => setPressed((n) => n + 1)}
        className="rounded-[18px] border border-border bg-card p-5 text-center transition-transform active:scale-95"
      >
        <div className="text-xs font-medium">Press</div>
        <div className="mt-1 text-[10px] text-muted-foreground">{pressed} taps</div>
      </button>

      <button
        onClick={() => setLiked((v) => !v)}
        className="rounded-[18px] border border-border bg-card p-5 text-center"
      >
        <Heart
          size={22}
          className={`mx-auto transition-all duration-300 ${
            liked ? "scale-110 fill-rose-500 text-rose-500" : "text-muted-foreground"
          }`}
        />
        <div className="mt-1 text-[10px] text-muted-foreground">Like</div>
      </button>

      <button
        onClick={() => {
          setDone(true);
          setTimeout(() => setDone(false), 1400);
        }}
        className="rounded-[18px] border border-border bg-card p-5 text-center"
      >
        <Check
          size={22}
          className={`mx-auto transition-all duration-300 ${
            done ? "scale-110 text-emerald-500" : "text-muted-foreground"
          }`}
        />
        <div className="mt-1 text-[10px] text-muted-foreground">Success</div>
      </button>

      <div className="rounded-[18px] border border-border bg-card p-5">
        <div className="space-y-2">
          <div className="h-2 w-full animate-pulse rounded bg-muted" />
          <div className="h-2 w-3/4 animate-pulse rounded bg-muted" />
          <div className="h-2 w-1/2 animate-pulse rounded bg-muted" />
        </div>
        <div className="mt-2 text-center text-[10px] text-muted-foreground">Shimmer</div>
      </div>
    </div>
  );
}

/* -------------------- Gradient Mesh -------------------- */
function randHsl() {
  return `hsl(${Math.floor(Math.random() * 360)} 80% 65%)`;
}
function makeMesh() {
  const stops = Array.from({ length: 4 }, () => ({
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
    c: randHsl(),
  }));
  const layers = stops.map(
    (s) => `radial-gradient(at ${s.x}% ${s.y}%, ${s.c} 0px, transparent 50%)`,
  );
  return { css: layers.join(", "), stops };
}

export function GradientMeshDemo() {
  const [mesh, setMesh] = useState(makeMesh);
  const copy = () => {
    navigator.clipboard.writeText(`background-image: ${mesh.css};`);
    toast.success("CSS copied");
  };
  return (
    <div className="space-y-3">
      <div
        className="h-[260px] w-full rounded-[18px] border border-border"
        style={{ backgroundImage: mesh.css, backgroundColor: "hsl(var(--background))" }}
      />
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setMesh(makeMesh())}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs hover:bg-secondary"
        >
          <RefreshCw size={12} /> Regenerate
        </button>
        <button
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs hover:bg-secondary"
        >
          <Copy size={12} /> Copy CSS
        </button>
      </div>
    </div>
  );
}

export const demoMap: Record<string, () => JSX.Element> = {
  "interactive-particles": ParticlesDemo,
  "3d-card-hover": TiltCardDemo,
  "color-generator": ColorGeneratorDemo,
  "micro-animations": MicroAnimationsDemo,
  "gradient-mesh": GradientMeshDemo,
};
