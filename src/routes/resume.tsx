import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";
import { btn } from "@/components/site/ui";
import { Download, Printer, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: `Resume — ${site.name}` },
      { name: "description", content: `Professional Resume of ${site.name} — ${site.headline}` },
      { property: "og:title", content: `Resume — ${site.name}` },
      { property: "og:description", content: site.bio[0] },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="min-h-screen bg-muted/40 pb-24 pt-24">
      {/* Top action toolbar */}
      <div className="container-x mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className={btn({ variant: "outline", size: "sm" })}
          >
            <Printer className="h-4 w-4" /> Print
          </button>
          <a
            href={site.resumeUrl}
            download="Abdul_Khaliq_Resume.pdf"
            className={btn({ size: "sm" })}
          >
            <Download className="h-4 w-4" /> Download PDF
          </a>
        </div>
      </div>

      {/* Resume Document Paper Card */}
      <div className="mx-auto max-w-[850px] overflow-hidden rounded-xl border border-border bg-white text-slate-800 shadow-2xl print:border-none print:shadow-none">
        {/* HEADER */}
        <header className="bg-gradient-to-br from-[#160d3d] via-[#201353] to-[#2e1a75] p-8 text-white md:p-10">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{site.name}</h1>
          <p className="mt-1.5 text-sm font-semibold tracking-wide text-violet-300 md:text-base">
            {site.headline}
          </p>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-200">
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-white hover:underline">
              <span>✉</span> {site.email}
            </a>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white hover:underline">
              <span>📞</span> {site.phone}
            </a>
            <span className="flex items-center gap-1.5">
              <span>📍</span> {site.location}
            </span>
            <a href="https://www.behance.net/abdulkhaliq95" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white hover:underline">
              <span>Bē</span> behance.net/abdulkhaliq95
            </a>
            <a href="https://www.linkedin.com/in/abdulkhaliq37" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white hover:underline">
              <span>in</span> linkedin.com/in/abdulkhaliq37
            </a>
          </div>
        </header>

        {/* BODY */}
        <div className="p-8 md:p-10">
          {/* SUMMARY */}
          <p className="text-sm leading-relaxed text-slate-700">
            <strong className="font-bold text-slate-900">Results-driven Lead UI/UX Designer</strong> with{" "}
            <strong className="font-bold text-slate-900">4+ years of experience</strong> creating intuitive, user-centered web and mobile experiences across{" "}
            <span className="font-semibold text-indigo-700">SaaS, ERP, eCommerce, and digital products</span>. Skilled in{" "}
            <span className="font-semibold text-indigo-700">UX research, wireframing, prototyping, UI design, and design systems</span>, with strong expertise in{" "}
            <strong className="font-bold text-slate-900">Figma</strong>. Experienced in translating business requirements into{" "}
            <span className="font-semibold text-indigo-700">scalable, accessible, and conversion-focused digital products</span> while collaborating with developers and stakeholders.
          </p>

          {/* SKILLS TAGS */}
          <div className="mt-6 flex flex-wrap gap-2 border-b border-slate-100 pb-8">
            {site.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-indigo-200 bg-indigo-50/60 px-3.5 py-1 text-xs font-semibold text-indigo-700"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* TWO COLUMNS */}
          <div className="mt-8 grid gap-8 md:grid-cols-12">
            {/* WORK EXPERIENCE (Left ~65%) */}
            <div className="md:col-span-8">
              <div className="mb-6 flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 font-bold text-sm">
                  💼
                </span>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  Work Experience
                </h2>
              </div>

              <div className="relative pl-5 before:absolute before:bottom-2 before:left-1.5 before:top-2 before:w-0.5 before:bg-slate-200">
                {site.experience.map((exp) => (
                  <div key={exp.company} className="relative mb-8 last:mb-0">
                    <span className="absolute -left-5 top-1.5 h-3 w-3 rounded-full border-2 border-indigo-600 bg-white" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900">{exp.role}</h3>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-semibold text-indigo-600">
                      {exp.company} <span className="font-medium text-slate-500">· {exp.location}</span>
                    </p>
                    <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                      {exp.points.map((pt) => (
                        <li key={pt} className="flex gap-2">
                          <span className="text-slate-400">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* TOOLS & EDUCATION (Right ~35%) */}
            <div className="border-t border-slate-100 pt-8 md:col-span-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              {/* TOOLS */}
              <div className="mb-6 flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 font-bold text-sm">
                  🛠
                </span>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  Tools
                </h2>
              </div>
              <ul className="mb-8 space-y-2 text-xs font-medium text-slate-700">
                {site.tools.map((tool) => (
                  <li key={tool} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>

              {/* EDUCATION */}
              <div className="mb-6 flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 font-bold text-sm">
                  🎓
                </span>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  Education
                </h2>
              </div>
              <div className="space-y-4">
                {site.education?.map((edu) => (
                  <div key={edu.degree}>
                    <p className="text-xs font-bold text-slate-900 leading-snug">{edu.degree}</p>
                    <p className="text-xs font-semibold text-indigo-600">{edu.institution}</p>
                    <p className="text-[11px] text-slate-500">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
