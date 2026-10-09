import { motion } from "framer-motion";
import { site } from "@/data/site";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent("Hi Abdul Khaliq, I saw your portfolio and would like to discuss a project.")}`;

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Abdul Khaliq on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_8px_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_10px_35px_rgba(16,185,129,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
      >
        {/* Subtle glowing ring pulse */}
        <span
          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-emerald-500/40 animate-ping"
          style={{ animationDuration: "3s" }}
          aria-hidden
        />

        {/* WhatsApp Vector Icon */}
        <svg
          className="h-7 w-7 fill-current drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.27 16.6L5.07 16.29C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C16.58 3.67 20.28 7.37 20.28 11.91C20.28 16.45 16.58 20.15 12.04 20.15ZM16.57 14.39C16.32 14.26 15.11 13.67 14.88 13.58C14.65 13.5 14.49 13.46 14.33 13.71C14.16 13.96 13.68 14.52 13.54 14.69C13.39 14.85 13.25 14.87 13 14.75C12.75 14.62 11.71 14.28 10.48 13.18C9.52 12.33 8.87 11.27 8.73 11.02C8.58 10.77 8.71 10.63 8.84 10.51C8.95 10.4 9.09 10.22 9.21 10.08C9.33 9.94 9.38 9.83 9.46 9.67C9.54 9.5 9.5 9.36 9.44 9.23C9.38 9.1 8.88 7.87 8.68 7.37C8.48 6.89 8.28 6.95 8.13 6.95C7.99 6.95 7.82 6.94 7.66 6.94C7.49 6.94 7.22 7 7 7.25C6.77 7.49 6.13 8.09 6.13 9.31C6.13 10.54 7.02 11.72 7.15 11.89C7.27 12.05 8.91 14.57 11.41 15.65C12 15.91 12.46 16.06 12.83 16.18C13.43 16.37 13.97 16.34 14.4 16.28C14.88 16.21 15.89 15.67 16.1 15.09C16.31 14.51 16.31 14.01 16.25 13.91C16.19 13.8 16.03 13.74 15.78 13.61L16.57 14.39Z" />
        </svg>

        {/* Online Indicator Badge */}
        <span
          className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#0B0B0C] bg-emerald-400"
          aria-hidden
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </span>

        {/* Hover Tooltip / Floating Label */}
        <div
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-border bg-[#18181b]/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-xl backdrop-blur-md transition-all duration-200 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 md:block"
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Chat on WhatsApp
          </span>
        </div>
      </motion.a>
    </aside>
  );
}
