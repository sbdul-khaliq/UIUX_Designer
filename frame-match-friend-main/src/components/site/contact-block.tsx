import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Magnetic, Reveal } from "./motion";
import { btn, CopyEmail } from "./ui";

export function ContactBlock({ asPage }: { asPage?: boolean }) {
  const H = asPage ? "h1" : "h2";
  return (
    <section id="contact" className="container-x py-28 md:py-40">
      <Reveal>
        <p className="eyebrow mb-8">Contact</p>
        <H className="display text-5xl md:text-8xl">
          Have a project
          <br />
          <span className="text-muted-foreground">or opportunity?</span>
        </H>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          I'm available for selected freelance projects, product design opportunities and collaborations.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Magnetic>
            <a href={`mailto:${site.email}`} className={btn()}>
              Let's Talk →
            </a>
          </Magnetic>
          <a href={site.resumeUrl} download className={btn({ variant: "outline" })}>
            Download Resume
          </a>
        </div>
      </Reveal>
      <div className="mt-20 grid gap-px border-t border-border md:grid-cols-4">
        <div className="py-6 md:pr-6">
          <p className="eyebrow mb-2">Email</p>
          <CopyEmail email={site.email} />
        </div>
        {site.socials.map((s) => (
          <div key={s.label} className="border-t border-border py-6 md:border-t-0 md:border-l md:px-6">
            <p className="eyebrow mb-2">{s.label}</p>
            <a href={s.href} target="_blank" rel="noreferrer" className="link-underline">
              View profile ↗
            </a>
          </div>
        ))}
      </div>
      {!asPage && (
        <Link to="/contact" className="sr-only">
          Contact page
        </Link>
      )}
    </section>
  );
}
