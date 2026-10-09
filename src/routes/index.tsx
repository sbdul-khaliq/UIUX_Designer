import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Counter, Magnetic, MaskText, Reveal } from "@/components/site/motion";
import { WorkList } from "@/components/site/work-list";
import { ContactBlock } from "@/components/site/contact-block";
import { btn } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — UI/UX & Product Designer Portfolio` },
      { name: "description", content: "Selected case studies in product, web and mobile design. Available for freelance and full time opportunities." },
      { property: "og:title", content: `${site.name} — UI/UX & Product Designer` },
      { property: "og:description", content: "Selected case studies in product, web and mobile design." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="container-x flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-20">
        <motion.p className="eyebrow mb-10 flex flex-wrap items-center gap-x-4 gap-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <span className="font-semibold text-foreground">Abdul Khaliq</span>
          <span className="text-accent">•</span>
          <span>Lead UI/UX Designer</span>
          <span className="text-accent">•</span>
          <span>Product Designer</span>
          <span className="text-accent">•</span>
          <span>SaaS & ERP Solutions</span>
        </motion.p>
        <h1 className="display max-w-6xl text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
          <MaskText lines={["Designing digital products", "that are simple to use"]} />
          <MaskText lines={["and built for scale."]} className="text-muted-foreground" delay={0.16} />
        </h1>
        <Reveal delay={0.4} className="mt-12 grid gap-10 border-t border-border pt-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              Results-driven Lead UI/UX Designer with <strong className="font-semibold text-foreground">4+ years of experience</strong> creating intuitive, user-centered web and mobile experiences across SaaS, ERP, eCommerce, and digital products.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 md:col-span-5 md:items-end">
            <p className="flex items-center gap-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {site.availability}
            </p>
            <div className="flex flex-wrap gap-3">
              <Magnetic>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className={btn()}>
                  Let's Talk on WhatsApp →
                </a>
              </Magnetic>
              <Magnetic>
                <Link to="/" hash="work" className={btn({ variant: "outline" })}>
                  View Work ↓
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
        <div className="eyebrow mt-14 flex items-center gap-3" aria-hidden>
          <span className="relative h-8 w-px overflow-hidden bg-border">
            <motion.span className="absolute inset-x-0 top-0 h-3 bg-foreground" animate={{ y: [-12, 32] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }} />
          </span>
          Scroll
        </div>
      </section>

      <section aria-label="Professional snapshot" className="border-y border-border">
        <dl className="container-x grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="bg-background px-2 py-10 md:px-8 md:py-14">
              <dd className="display text-5xl md:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </dd>
              <dt className="eyebrow mt-3">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <WorkList />
      <ContactBlock />
    </>
  );
}
