import { createFileRoute } from "@tanstack/react-router";
import { ContactBlock } from "@/components/site/contact-block";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      { name: "description", content: "Get in touch about freelance projects, product design roles and collaborations." },
      { property: "og:title", content: `Contact ${site.name}` },
      { property: "og:description", content: "Available for freelance projects, product design roles and collaborations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <div className="pt-16">
      <ContactBlock asPage />
    </div>
  ),
});
