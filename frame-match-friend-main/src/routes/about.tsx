import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { site } from "@/data/site";
import { ImageReveal, MaskText, Reveal } from "@/components/site/motion";
import { btn } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About & Experience — ${site.name}` },
      { name: "description", content: "Biography, specialisations, tools and professional experience timeline." },
      { property: "og:title", content: `About ${site.name}` },
      { property: "og:description", content: "Biography, skills, tools and experience of a UI/UX and product designer." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i} className="border-b border-border pb-2">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  return (
    <>
      <section className="container-x pb-24 pt-36 md:pt-44">
        <p className="eyebrow mb-8">About</p>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="display text-4xl md:text-6xl">
              <MaskText lines={[site.bio[0]!]} />
            </h1>
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-xl text-lg text-muted-foreground">{site.bio[1]!}</p>
              <a href={site.resumeUrl} download className={`${btn()} mt-10`}>
                Download Resume
              </a>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <ImageReveal src={portrait} alt={`Portrait of ${site.name}`} className="aspect-[4/5]" eager />
            <p className="eyebrow mt-3">Placeholder portrait — replace with your photo</p>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-12 border-t border-border py-20 md:grid-cols-3">
        <Reveal><List title="Specialisation & Skills" items={site.skills} /></Reveal>
        <Reveal delay={0.08}><List title="Industries" items={site.industries} /></Reveal>
        <Reveal delay={0.16}><List title="Tools" items={site.tools} /></Reveal>
      </section>

      <section id="experience" className="container-x scroll-mt-20 border-t border-border py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-6">Experience</p>
            <h2 className="display text-4xl md:text-5xl">Where I've worked</h2>
          </div>
          <ol className="md:col-span-8">
            {site.experience.map((e) => (
              <Reveal key={e.company}>
                <li className="grid gap-4 border-t border-border py-10 md:grid-cols-8">
                  <p className="font-mono text-sm text-muted-foreground md:col-span-2">{e.period}</p>
                  <div className="md:col-span-6">
                    <h3 className="text-2xl font-medium tracking-tight">{e.role}</h3>
                    <p className="mt-1 text-muted-foreground">{e.company}</p>
                    <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="text-accent">—</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
