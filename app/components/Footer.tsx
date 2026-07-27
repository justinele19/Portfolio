import { ArrowUpRight, Copyright } from "lucide-react";
import { Reveal } from "./Reveal";

const mainLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

const contactLinks = [
  { label: "Email", href: "mailto:hello@justinele.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export function Footer() {
  return (
    <footer id="about" className="border-t border-border">
      {/* --footer-inset indents footer content from the section edge, as in the
          design. Set it to 0 in globals.css to align flush with the sections. */}
      <Reveal
        className="section-shell pt-[var(--space-experience-to-footer)] pb-[var(--space-footer-bottom)]"
        delay={0}
      >
        <div
          id="contact"
          className="flex flex-col gap-16 px-[var(--footer-inset)] sm:flex-row sm:justify-between"
        >
          <div>
            <h2 className="font-body text-3xl font-medium tracking-tight sm:text-[35px]">
              Let&rsquo;s get in touch.
            </h2>
            <p className="mt-3 text-xs">
              Open to all questions and feedback
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-medium tracking-tight text-muted-foreground">
                MAIN
              </p>
              {mainLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium transition-opacity duration-200 hover:opacity-60"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-medium tracking-tight text-muted-foreground">
                CONTACT
              </p>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium transition-opacity duration-200 hover:opacity-60"
                >
                  {link.label}
                  <ArrowUpRight
                    className="size-[18px] transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-1 px-[var(--footer-inset)] sm:items-end">
          <p className="inline-flex items-center gap-1.5 text-[14px] font-medium">
            <Copyright className="size-[11px]" strokeWidth={2} />
            2026 Justine Le
          </p>
          <p className="text-[10px] text-muted-foreground">
            Made with matcha and coffee
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
