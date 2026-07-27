import { Reveal } from "./Reveal";

type ExperienceLink = {
  label: string;
  href: string;
};

type ExperienceEntry = {
  date: string;
  title: string;
  org: string;
  description: string;
  tags: string[];
  links: ExperienceLink[];
};

const experience: ExperienceEntry[] = [
  {
    date: "Sept - Dec 2025",
    title: "National Security Product Intern",
    org: "United States Department of War",
    description:
      "Leading development of an air-gapped patch analysis platform that speeds patch deployment in isolated networks without weakening security. Validated requirements with security engineers at NIWC Pacific and USCYBERCOM, then architected a system pairing static/behavioral analysis with an ML/RCA model to assess mission impact and automate approval workflows.",
    tags: ["Product Design", "Lean Startup", "Security"],
    links: [
      { label: "Slide deck", href: "#" },
      { label: "Video", href: "#" },
    ],
  },
  {
    date: "June - Aug 2024",
    title: "ML Security Researcher",
    org: "California State University, Fullerton",
    description:
      "Investigated machine learning methods for detecting hardware Trojans, a form of malicious tampering that threatens trust and security in integrated circuits. Developed ML models trained on 10,000 side-channel power traces, achieving 98% accuracy in classifying infected circuits and validating ML-based detection as an effective safeguard.",
    tags: ["Hardware Trojans", "Side-Channel", "Hardware Security"],
    links: [{ label: "Poster", href: "#" }],
  },
];

function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    /* --experience-inset indents the row slightly from its rules, as in the
       design. Set it to 0 in globals.css for flush, edge-to-edge alignment. */
    <div className="grid gap-6 px-[var(--experience-inset)] py-[19px] lg:grid-cols-[445fr_618fr] lg:gap-[201px]">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[14px]">{entry.date}</p>
          <h3 className="font-display mt-2 text-[25px] font-semibold">
            {entry.title}
          </h3>
          <p className="font-display mt-1 text-[16px] italic tracking-[-0.48px]">
            {entry.org}
          </p>
        </div>
        <div className="flex flex-wrap gap-[11px]">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex h-[30px] items-center rounded-full bg-border px-[17px] text-[14px] transition-colors duration-200 hover:bg-black hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2 text-[14px] font-medium lg:justify-end">
          {entry.links.map((link, i) => (
            <span key={link.label} className="flex items-center gap-2">
              <a
                href={link.href}
                className="transition-opacity duration-200 hover:opacity-60"
              >
                {link.label}
              </a>
              {i < entry.links.length - 1 && (
                <span className="text-muted-foreground">|</span>
              )}
            </span>
          ))}
        </div>
        <p className="text-[14px] leading-normal text-muted-foreground">
          {entry.description}
        </p>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section className="section-shell pb-[var(--space-experience-to-footer)]">
      <Reveal>
        <h2 className="font-display mb-[var(--space-experience-heading)] text-center text-4xl font-semibold italic sm:text-[50px]">
          experience
        </h2>
      </Reveal>

      <div className="border-t border-border">
        {experience.map((entry, i) => (
          <Reveal
            key={entry.title}
            delay={i * 0.1}
            className="border-b border-border"
          >
            <ExperienceItem entry={entry} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
