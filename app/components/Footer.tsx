import { ArrowUpRight, Copyright } from "lucide-react";

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
      <div id="contact" className="mx-auto max-w-[1220px] px-6 py-20 sm:px-8">
        <div className="flex flex-col gap-16 sm:flex-row sm:justify-between">
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
                  className="text-sm font-medium transition-opacity hover:opacity-60"
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
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-60"
                >
                  {link.label}
                  <ArrowUpRight className="size-[18px]" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-1 sm:items-end">
          <p className="inline-flex items-center gap-1.5 text-sm font-medium">
            <Copyright className="size-[11px]" strokeWidth={2} />
            2026 Justine Le
          </p>
          <p className="text-[10px] text-muted-foreground">
            Made with matcha and coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
