import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getExperiment } from "@/data/experiments";
import { demoMap } from "@/components/playground/demos";

export default function PlaygroundDetail() {
  const { slug = "" } = useParams();
  const exp = getExperiment(slug);

  if (!exp) {
    return (
      <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
        <div className="max-w-[560px] mx-auto">
          <Link
            to="/playground"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={12} /> Back to playground
          </Link>
          <h2 className="mt-6 text-[15px] font-semibold tracking-tight">
            Experiment not found
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            We couldn't find an experiment for "{slug}".
          </p>
        </div>
      </div>
    );
  }

  const Demo = demoMap[exp.slug];

  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-8">
        <Link
          to="/playground"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={12} /> Back to playground
        </Link>

        <header>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-2.5 py-1 text-[10px] tracking-[0.08em] ${exp.tagClass}`}
            >
              {exp.tag}
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-[9px] ${
                exp.status === "Live"
                  ? "bg-emerald-500/15 text-emerald-400"
                  : "bg-amber-500/15 text-amber-400"
              }`}
            >
              {exp.status}
            </span>
          </div>
          <h1 className="text-[20px] font-semibold tracking-tight text-foreground">
            {exp.title}
          </h1>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            {exp.description}
          </p>
        </header>

        {Demo && (
          <section>
            <div className="mb-2 text-[10px] uppercase tracking-wider text-muted-foreground">
              Live demo
            </div>
            <div className="rounded-[22px] border border-border bg-card p-4">
              <Demo />
            </div>
          </section>
        )}

        <section>
          <h2 className="text-xs font-semibold tracking-tight text-foreground">
            Overview
          </h2>
          <p className="mt-2 text-[12px] leading-6 text-muted-foreground">
            {exp.overview}
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold tracking-tight text-foreground">
            Highlights
          </h2>
          <ul className="mt-2 space-y-1.5">
            {exp.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-[12px] leading-6 text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-foreground/60" />
                {h}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xs font-semibold tracking-tight text-foreground">
            Stack
          </h2>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {exp.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
