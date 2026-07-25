import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export function Header() {
  return (
    <header
      id="top"
      className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-8">
        <div className="font-display leading-tight">
          <p className="text-[1.4rem] font-semibold tracking-[0.03em]">
            Justine Le
          </p>
          <p className="font-body text-sm font-normal text-foreground">
            Product Engineer
          </p>
        </div>

        <nav className="flex items-center gap-6 text-base font-medium tracking-[0.06em] sm:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative transition-opacity duration-200 hover:opacity-60 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 text-base font-medium tracking-[0.06em] transition-opacity duration-200 hover:opacity-60"
        >
          Contact
          <ArrowUpRight
            className="size-[18px] transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
          />
        </a>
      </div>
    </header>
  );
}
