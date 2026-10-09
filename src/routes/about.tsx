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
      <section className="container-x pb-16 pt-28 md:pb-24 md:pt-36">
        <p className="eyebrow mb-6">About Me</p>
        <div className="grid gap-10 md:grid-cols-12 md:items-start lg:gap-14">
          <div className="md:col-span-7">
            <h1 className="display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.15]">
              <MaskText lines={["Designing intuitive products", "with purpose & precision."]} />
            </h1>
            <Reveal delay={0.2}>
              <div className="mt-6 space-y-4 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Results-driven Lead UI/UX Designer with <strong className="font-semibold text-foreground">4+ years of experience</strong> creating intuitive, user-centered web and mobile experiences across SaaS, ERP, eCommerce, and digital products.
                </p>
                <p>
                  Skilled in UX research, wireframing, prototyping, UI design, and design systems, with strong expertise in Figma. Experienced in translating business requirements into scalable, accessible, and conversion-focused digital products while collaborating with developers and stakeholders.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className={btn()}>
                  Let's Talk on WhatsApp →
                </a>
                <a href={site.resumeUrl} download className={btn({ variant: "outline" })}>
                  Download Resume
                </a>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5 lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl transition-all duration-300 hover:border-accent/40">
                <ImageReveal
                  src={portrait}
                  alt={`Portrait of ${site.name}`}
                  className="aspect-[4/5] object-cover"
                  eager
                />
              </div>
              <div className="mt-3.5 flex items-center justify-between px-1">
                <span className="eyebrow flex items-center gap-2 text-foreground/90 font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {site.name}
                </span>
                <span className="eyebrow text-muted-foreground">{site.location}</span>
              </div>
            </Reveal>
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
                    <p className="mt-1 text-muted-foreground">{e.company} {e.location ? `· ${e.location}` : ""}</p>
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

      <section id="education" className="container-x scroll-mt-20 border-t border-border py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-6">Education</p>
            <h2 className="display text-4xl md:text-5xl">Academic Background</h2>
          </div>
          <ol className="md:col-span-8">
            {site.education?.map((edu) => (
              <Reveal key={edu.degree}>
                <li className="grid gap-4 border-t border-border py-8 md:grid-cols-8">
                  <p className="font-mono text-sm text-muted-foreground md:col-span-2">{edu.period}</p>
                  <div className="md:col-span-6">
                    <h3 className="text-xl font-medium tracking-tight">{edu.degree}</h3>
                    <p className="mt-1 text-muted-foreground">{edu.institution}</p>
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
