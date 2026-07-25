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
    <div className="grid gap-6 py-12 lg:grid-cols-[445fr_720fr] lg:gap-12">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm">{entry.date}</p>
          <h3 className="font-display mt-2 text-2xl font-semibold">
            {entry.title}
          </h3>
          <p className="font-display mt-1 text-base italic tracking-tight">
            {entry.org}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-border px-4 py-1.5 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2 text-sm font-medium lg:justify-end">
          {entry.links.map((link, i) => (
            <span key={link.label} className="flex items-center gap-2">
              <a href={link.href} className="transition-opacity hover:opacity-60">
                {link.label}
              </a>
              {i < entry.links.length - 1 && <span className="text-muted-foreground">|</span>}
            </span>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {entry.description}
        </p>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section className="mx-auto max-w-[1220px] px-6 pb-24 sm:px-8">
      <h2 className="font-serif-display mb-8 text-center text-4xl italic sm:text-[50px]">
        experience
      </h2>

      <div className="border-t border-border">
        {experience.map((entry, i) => (
          <div
            key={entry.title}
            className={i < experience.length - 1 ? "border-b border-border" : ""}
          >
            <ExperienceItem entry={entry} />
          </div>
        ))}
      </div>
    </section>
  );
}
