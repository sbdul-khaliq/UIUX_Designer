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
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btn()}
            >
              Let's Talk on WhatsApp →
            </a>
          </Magnetic>
          <a href={`mailto:${site.email}`} className={btn({ variant: "outline" })}>
            Email Me
          </a>
          <a href={site.resumeUrl} download className={btn({ variant: "outline" })}>
            Download Resume
          </a>
        </div>
      </Reveal>
      <div className="mt-20 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        <div className="py-6 sm:pr-6">
          <p className="eyebrow mb-2">WhatsApp / Phone</p>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-mono text-sm text-foreground hover:text-emerald-400"
          >
            {site.phone} ↗
          </a>
        </div>
        <div className="border-t border-border py-6 sm:border-t-0 sm:border-l sm:px-6">
          <p className="eyebrow mb-2">Email</p>
          <CopyEmail email={site.email} />
        </div>
        <div className="border-t border-border py-6 lg:border-t-0 lg:border-l lg:px-6">
          <p className="eyebrow mb-2">Behance</p>
          <a
            href="https://www.behance.net/abdulkhaliq95"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            behance.net/abdulkhaliq95 ↗
          </a>
        </div>
        <div className="border-t border-border py-6 lg:border-t-0 lg:border-l lg:px-6">
          <p className="eyebrow mb-2">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/abdulkhaliq37"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            linkedin.com/in/abdulkhaliq37 ↗
          </a>
        </div>
      </div>
      {!asPage && (
        <Link to="/contact" className="sr-only">
          Contact page
        </Link>
      )}
    </section>
  );
}
