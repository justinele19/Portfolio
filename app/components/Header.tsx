"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  // Publish the header's real height as --header-height. The hero uses it to
  // fill exactly the rest of the screen. Measured rather than hard-coded
  // because the nav wraps to a different number of rows as the width changes,
  // so no fixed value is correct at every breakpoint.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${el.offsetHeight}px`,
      );
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      id="top"
      className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm"
    >
      {/* Vertical space comes from --nav-space-y in globals.css. */}
      <div className="section-shell flex flex-wrap items-center justify-between gap-4 py-[var(--nav-space-y)]">
        <div className="font-body leading-tight">
          <p className="text-[24px] font-semibold tracking-[0.72px]">
            Justine Le
          </p>
          <p className="text-[15px] font-normal text-foreground">
            Product Engineer
          </p>
        </div>

        <nav className="flex items-center gap-6 text-[20px] font-medium tracking-[1.2px] sm:gap-10">
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
          className="group inline-flex items-center gap-1.5 text-[20px] font-medium tracking-[1.2px] transition-opacity duration-200 hover:opacity-60"
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
