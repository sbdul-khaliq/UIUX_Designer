import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { btn } from "./ui";

const links = [
  { label: "Work", to: "/", hash: "work" },
  { label: "About", to: "/about", hash: undefined },
  { label: "Experience", to: "/about", hash: "experience" },
  { label: "Contact", to: "/contact", hash: undefined },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-border bg-background/75 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
          <Link to="/" className="text-sm font-semibold tracking-tight" onClick={() => setOpen(false)}>
            {site.name}
            <span className="ml-2 hidden text-muted-foreground sm:inline">— {site.role}</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link key={l.label} to={l.to} {...(l.hash ? { hash: l.hash } : {})} className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className={btn({ size: "sm" })}>
              Let's Talk
            </Link>
          </div>
          <button className="eyebrow text-foreground md:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu">
            {open ? "Close" : "Menu"}
          </button>
        </nav>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-background px-5 pb-10 pt-28 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="space-y-2">
              {links.map((l, i) => (
                <motion.li key={l.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05 }}>
                  <Link to={l.to} {...(l.hash ? { hash: l.hash } : {})} onClick={() => setOpen(false)} className="display text-5xl">
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{site.email}</p>
              <p>{site.availability}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-accent" aria-hidden />;
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-x grid gap-8 py-12 text-sm md:grid-cols-4 md:items-end">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="text-muted-foreground">{site.role}</p>
        </div>
        <p className="flex items-center gap-2 text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden /> Available for opportunities
        </p>
        <ul className="flex gap-5">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="link-underline text-muted-foreground hover:text-foreground">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-between gap-6 md:justify-end">
          <span className="text-muted-foreground">© 2026</span>
          <button onClick={() => window.scrollTo({ top: 0 })} className="link-underline">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
