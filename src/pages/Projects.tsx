import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

export default function Projects() {
  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-12">
        <section>
          <h1 className="text-xl font-semibold tracking-tight text-foreground">Selected work</h1>
          <p className="mt-2 max-w-[500px] text-sm leading-6 text-muted-foreground">
            Each case study covers the problem, my role, the constraints, the decisions I made and what changed.
            Numbers are the ones I can source; concept work isn't listed here.
          </p>
        </section>

        {/* Featured */}
        <section>
          <h2 className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">Featured</h2>
          <div className="space-y-3">
            {featured.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className="group block rounded-[22px] border border-border bg-card px-4 py-4 transition-colors hover:border-muted-foreground/20 hover:bg-secondary"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    {p.icon}
                    <div>
                      <h3 className="text-[14px] font-medium text-foreground">{p.name}</h3>
                      <p className="text-xs text-muted-foreground">{p.role} · {p.year}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
                <p className="mt-3 text-[13px] leading-6 text-muted-foreground">{p.description}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {p.headlineMetric && (
                    <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground">
                      {p.headlineMetric}
                    </span>
                  )}
                  {(p.tags ?? []).slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full px-1.5 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All work */}
        <section>
          <h2 className="mb-3 text-[15px] font-semibold tracking-tight text-foreground">All case studies</h2>
          <div className="divide-y divide-border">
            {projects.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className="group flex items-center justify-between gap-3 py-3 transition-colors"
              >
                <div className="flex min-w-0 items-center gap-3">
                  {p.icon}
                  <div className="min-w-0">
                    <p className="text-[13px] text-foreground">{p.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{p.tagline}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="flex-shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
