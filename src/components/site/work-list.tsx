import { Link } from "@tanstack/react-router";
import { AnimatePresence, LayoutGroup, motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import { categories, projects, type Project } from "@/data/projects";

export function WorkList() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [hover, setHover] = useState(false);
  const x = useSpring(useMotionValue(0), { stiffness: 500, damping: 40 });
  const y = useSpring(useMotionValue(0), { stiffness: 500, damping: 40 });
  const list = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="work" className="container-x scroll-mt-20 py-24 md:py-32">
      <div className="mb-14 grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="eyebrow mb-6">Selected Work</p>
          <h2 className="display text-4xl md:text-6xl">Selected work</h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            A selection of digital products, websites and experiences I've designed for real businesses and clients.
          </p>
        </div>
        <LayoutGroup>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 md:col-span-5 md:justify-end" role="tablist" aria-label="Filter projects">
            {categories.map((c) => (
              <li key={c}>
                <button
                  role="tab"
                  aria-selected={filter === c}
                  onClick={() => setFilter(c)}
                  className={`relative pb-1 text-sm transition-colors ${filter === c ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {c}
                  {filter === c && <motion.span layoutId="filter-line" className="absolute inset-x-0 -bottom-px h-px bg-accent" />}
                </button>
              </li>
            ))}
          </ul>
        </LayoutGroup>
      </div>

      <div
        className="relative space-y-20 md:space-y-32"
        onMouseMove={(e) => {
          x.set(e.clientX);
          y.set(e.clientY);
        }}
      >
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectRow p={p} n={projects.indexOf(p) + 1} onHover={setHover} />
            </motion.div>
          ))}
        </AnimatePresence>
        {list.length === 0 && <p className="text-muted-foreground">No projects in this category yet.</p>}
      </div>

      <motion.div
        aria-hidden
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hover ? 1 : 0, opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-20 w-20 items-center justify-center rounded-full bg-accent text-[11px] font-semibold tracking-[0.15em] text-accent-foreground [@media(hover:hover)]:flex"
      >
        VIEW
      </motion.div>
    </section>
  );
}

function ProjectRow({ p, n, onHover }: { p: Project; n: number; onHover: (v: boolean) => void }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: p.slug }}
      className="group block [@media(hover:hover)]:cursor-none"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      aria-label={`View case study: ${p.title}`}
    >
      <article className="grid gap-6 md:grid-cols-12 md:gap-10">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface md:col-span-8">
          <img
            src={p.thumbnail}
            alt={`${p.title} — ${p.type} preview`}
            loading="lazy"
            width={1600}
            height={1008}
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-overlay opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
        </div>
        <div className="flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-1 md:col-span-4">
          <div>
            <div className="flex items-baseline justify-between border-b border-border pb-4">
              <span className="font-mono text-sm text-accent">{String(n).padStart(2, "0")}</span>
              <span className="font-mono text-sm text-muted-foreground">{p.year}</span>
            </div>
            <h3 className="display mt-6 text-3xl md:text-4xl">{p.title}</h3>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="eyebrow mb-1">Industry</dt>
                <dd>{p.industry}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-1">My Role</dt>
                <dd>{p.role}</dd>
              </div>
              <div className="col-span-2">
                <dt className="eyebrow mb-1">Type</dt>
                <dd>{p.type}</dd>
              </div>
            </dl>
            <p className="mt-6 text-muted-foreground">{p.summary}</p>
          </div>
          <span className="eyebrow mt-8 inline-flex items-center gap-2 text-foreground transition-colors group-hover:text-accent">
            View Case Study <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
