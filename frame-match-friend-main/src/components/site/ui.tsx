import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

export const btn = cva(
  "inline-flex items-center gap-2 rounded-full text-sm font-medium transition-colors duration-300 focus-visible:outline-2",
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
        outline: "border border-input text-foreground hover:border-foreground",
        ghost: "text-foreground hover:text-accent",
      },
      size: { md: "h-12 px-6", sm: "h-9 px-4 text-[13px]" },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);
export type BtnProps = VariantProps<typeof btn>;

export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className={`group inline-flex items-center gap-3 text-left ${className ?? ""}`}
      aria-label={`Copy email ${email}`}
    >
      <span className="link-underline">{email}</span>
      <span className="eyebrow inline-flex items-center gap-1.5 group-hover:text-foreground" aria-live="polite">
        {copied ? (
          <>
            Copied <Check className="h-3.5 w-3.5 text-accent" />
          </>
        ) : (
          <>
            Copy <Copy className="h-3.5 w-3.5" />
          </>
        )}
      </span>
    </button>
  );
}
