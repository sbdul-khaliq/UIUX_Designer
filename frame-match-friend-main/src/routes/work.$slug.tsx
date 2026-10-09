import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getNextProject, getProject } from "@/data/projects";
import { site } from "@/data/site";
import { ImageReveal, MaskText, Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData ? getProject(loaderData.slug) : undefined;
    if (!p) return { meta: [{ title: "Case study not found" }, { name: "robots", content: "noindex" }] };
    const title = `${p.heroTitle.join(" ")} — Case Study by ${site.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CaseNotFound,
  component: CaseStudy,
});

function CaseNotFound() {
  return (
    <div className="container-x py-48">
      <h1 className="display text-5xl">Case study not found</h1>
      <Link to="/" hash="work" className="link-underline mt-6 inline-block">← Back to all projects</Link>
    </div>
  );
}

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "process", label: "Process" },
  { id: "wireframes", label: "Wireframes" },
  { id: "ui", label: "UI Design" },
  { id: "outcome", label: "Outcome" },
];

function SectionNav() {
  const [active, setActive] = useState("overview");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return (
    <nav aria-label="Case study sections" className="sticky top-16 z-30 border-y border-border bg-background/85 backdrop-blur-md">
      <ul className="container-x flex gap-6 overflow-x-auto py-3 text-sm">
        {sections.map((s) => (
          <li key={s.id} className="shrink-0">
            <a href={`#${s.id}`} aria-current={active === s.id ? "true" : undefined} className={`transition-colors ${active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              <span className={`mr-2 inline-block h-1.5 w-1.5 rounded-full align-middle ${active === s.id ? "bg-accent" : "bg-border"}`} />
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Block({ id, label, children }: { id?: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="container-x scroll-mt-32 border-t border-border py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-4"><h2 className="eyebrow">{label}</h2></Reveal>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((i) => (
        <li key={i} className="rounded-full border border-border px-3 py-1 text-sm">{i}</li>
      ))}
    </ul>
  );
}

function CaseStudy() {
  const { slug } = Route.useLoaderData();
  const p = getProject(slug)!;
  const next = getNextProject(slug)!;

  return (
    <article>
      <header className="container-x pb-14 pt-36 md:pt-44">
        <Link to="/" hash="work" className="eyebrow link-underline">← All projects</Link>
        <h1 className="display mt-10 text-5xl md:text-8xl">
          <MaskText lines={[p.heroTitle[0]]} />
          <MaskText lines={[p.heroTitle[1]]} className="text-muted-foreground" delay={0.08} />
        </h1>
        <Reveal delay={0.3}>
          <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-8 text-sm md:grid-cols-5">
            <div><dt className="eyebrow mb-2">Industry</dt><dd>{p.industry}</dd></div>
            <div><dt className="eyebrow mb-2">My Role</dt><dd>{p.role}</dd></div>
            <div><dt className="eyebrow mb-2">Timeline</dt><dd>{p.timeline}</dd></div>
            <div><dt className="eyebrow mb-2">Tools</dt><dd>{p.tools.join(", ")}</dd></div>
            <div className="col-span-2 md:col-span-1"><dt className="eyebrow mb-2">Services</dt><dd>{p.services.join(", ")}</dd></div>
          </dl>
        </Reveal>
      </header>
      <div className="container-x pb-20">
        <ImageReveal src={p.heroImage} alt={`${p.title} — final design`} className="aspect-[16/10]" eager />
      </div>

      <SectionNav />

      <Block id="overview" label="The Project">
        <Reveal><p className="text-2xl leading-snug md:text-3xl">{p.overview}</p></Reveal>
      </Block>

      <Block id="challenge" label="The Challenge">
        <Reveal className="space-y-5 text-lg text-muted-foreground">
          {p.challenge.map((c) => <p key={c}>{c}</p>)}
        </Reveal>
        <Reveal className="mt-10">
          <p className="eyebrow mb-4">Goals</p>
          <Tags items={p.goals} />
        </Reveal>
      </Block>

      <Block label="My Role">
        <div className="grid gap-10 sm:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4 text-accent">My contribution</p>
            <ul className="space-y-2">{p.myContribution.map((c) => <li key={c} className="border-b border-border pb-2">{c}</li>)}</ul>
          </Reveal>
          {p.teamContribution && (
            <Reveal delay={0.1}>
              <p className="eyebrow mb-4">Team contribution</p>
              <ul className="space-y-2 text-muted-foreground">{p.teamContribution.map((c) => <li key={c} className="border-b border-border pb-2">{c}</li>)}</ul>
            </Reveal>
          )}
        </div>
      </Block>

      <section id="process" className="container-x scroll-mt-32 border-t border-border py-20 md:py-28">
        <h2 className="eyebrow mb-12">UX Process</h2>
        <ol className="grid gap-0 md:grid-cols-6">
          {p.process.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <li className="relative border-l border-border pb-10 pl-6 md:border-l-0 md:border-t md:pl-0 md:pr-6 md:pt-6">
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent md:-top-[5px] md:left-0" />
                <p className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="container-x border-t border-border py-20 md:py-28">
        <h2 className="eyebrow mb-12">User Flow</h2>
        <ol className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
          {p.userFlow.map((f, i) => (
            <Reveal key={f} delay={i * 0.05}>
              <li className="flex flex-col items-start gap-3 md:flex-row md:items-center">
                <span className="rounded-full border border-border px-5 py-3">{f}</span>
                {i < p.userFlow.length - 1 && <span className="pl-6 text-muted-foreground md:pl-0" aria-hidden><span className="md:hidden">↓</span><span className="hidden md:inline">→</span></span>}
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="wireframes" className="scroll-mt-32 border-t border-border py-20 md:py-28">
        <div className="container-x">
          <h2 className="display mb-14 text-4xl md:text-6xl">From structure<br /><span className="text-muted-foreground">to experience</span></h2>
          <div className="space-y-8">
            {p.wireframes.map((w, i) => <ImageReveal key={i} src={w} alt={`${p.title} wireframes ${i + 1}`} className="aspect-[16/10]" />)}
          </div>
        </div>
      </section>

      <section id="ui" className="scroll-mt-32 border-t border-border py-20 md:py-28">
        <div className="container-x">
          <h2 className="display mb-14 text-4xl md:text-6xl">The final interface</h2>
          <div className="space-y-8">
            {p.screens.map((s, i) => (
              <div key={i} className="overflow-hidden">
                <ImageReveal src={s} alt={`${p.title} UI screen ${i + 1}`} className="aspect-[16/10] transition-transform duration-700 hover:scale-[1.01]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {p.designSystem && (
        <Block label="Design System">
          <Reveal>
            <p className="eyebrow mb-4">Colors</p>
            <div className="grid grid-cols-4 gap-3">
              {p.designSystem.colors.map((c) => <div key={c} className="aspect-square border border-border" style={{ background: c }} />)}
            </div>
            <p className="eyebrow mb-4 mt-10">Typography</p>
            <Tags items={p.designSystem.fonts} />
            <p className="eyebrow mb-4 mt-10">Components</p>
            <Tags items={p.designSystem.components} />
          </Reveal>
        </Block>
      )}

      <Block label="Responsive Design">
        <Reveal><p className="mb-10 text-lg text-muted-foreground">{p.responsive.text}</p></Reveal>
        <ImageReveal src={p.responsive.image} alt={`${p.title} desktop and mobile`} className="aspect-[16/10]" />
      </Block>

      <section id="outcome" className="container-x scroll-mt-32 border-t border-border py-20 md:py-28">
        <h2 className="display mb-14 text-4xl md:text-6xl">The outcome</h2>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {p.outcome.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.06} className="bg-background p-8">
              <p className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-medium">{o.title}</h3>
              <p className="mt-2 text-muted-foreground">{o.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x border-t border-border py-16">
        <h2 className="eyebrow mb-8">Summary</h2>
        <dl className="grid grid-cols-2 gap-8 text-sm md:grid-cols-6">
          {[["Client", p.client], ["Industry", p.industry], ["Role", p.role], ["Duration", p.timeline], ["Services", p.services.join(", ")], ["Tools", p.tools.join(", ")]].map(([k, v]) => (
            <div key={k}><dt className="eyebrow mb-2">{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </section>

      <section className="border-t border-border">
        <Link to="/work/$slug" params={{ slug: next.slug }} className="group container-x block py-20">
          <p className="eyebrow mb-6">Next case study</p>
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <h2 className="display text-4xl md:col-span-5 md:text-6xl">{next.title}</h2>
            <div className="overflow-hidden md:col-span-7">
              <img src={next.thumbnail} alt={next.title} loading="lazy" width={1600} height={1008} className="aspect-[16/10] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]" />
            </div>
          </div>
          <p className="eyebrow mt-8 text-foreground group-hover:text-accent">View next project →</p>
        </Link>
        <div className="container-x pb-16">
          <Link to="/" hash="work" className="link-underline text-sm text-muted-foreground">← Back to all projects</Link>
        </div>
      </section>
    </article>
  );
}
