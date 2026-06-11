import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { experiments } from "@/data/experiments";

export default function Playground() {
  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-12">
        <section>
          <h2 className="mb-1 text-[15px] font-semibold tracking-tight text-foreground">
            Playground
          </h2>
          <p className="mb-6 text-xs leading-5 text-muted-foreground">
            Experiments, prototypes, and creative coding projects.
          </p>

          <div className="space-y-3">
            {experiments.map((exp) => (
              <Link
                key={exp.slug}
                to={`/playground/${exp.slug}`}
                className="group block rounded-[22px] border border-border bg-card px-4 py-4 shadow-[0_1px_0_rgba(255,255,255,0.02)_inset] transition-colors hover:border-muted-foreground/15 hover:bg-secondary"
              >
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xs font-medium text-foreground">{exp.title}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-[9px] ${
                      exp.status === "Live"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-amber-500/15 text-amber-400"
                    }`}>
                      {exp.status}
                    </span>
                  </div>
                  <ArrowUpRight size={14} className="mt-0.5 flex-shrink-0 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                </div>

                <p className="max-w-[490px] text-[11px] leading-5 text-muted-foreground">
                  {exp.description}
                </p>

                <div className="mt-4">
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] tracking-[0.08em] ${exp.tagClass}`}>
                    {exp.tag}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
