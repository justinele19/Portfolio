type ProjectStat = {
  label: string;
  value: string;
};

type Project = {
  name: string;
  meta?: string;
  description?: string;
  stats: ProjectStat[];
};

const projects: Project[] = [
  {
    name: "LockedIn",
    description:
      "Your new study tool that keeps all distractions locked away, so that you can get your work done without any disruptions. Lock your phone, set your tasks, start timer, and stay LockedIn until you are done with your study session.",
    stats: [
      { label: "Impact on effective studying", value: "~1.25x increase" },
      { label: "# of hours studying (quarterly)", value: "~37 more hours" },
    ],
  },
  {
    name: "The Social Market",
    meta: "LA Hacks, UCLA Hackathon 2026",
    description:
      "That one friend who's always late? Now there's a bet on it. The Social Market keeps friends connected through friendly wagers and healthy competition.",
    stats: [
      { label: "Impact on effective studying", value: "~1.25x increase" },
      { label: "# of hours studying (quarterly)", value: "~37 more hours" },
    ],
  },
  {
    name: "IssueSight",
    stats: [
      { label: "Impact on effective studying", value: "~1.25x increase" },
      { label: "# of hours studying (quarterly)", value: "~37 more hours" },
    ],
  },
];

function ProjectPreview({ name }: { name: string }) {
  return (
    <div className="flex min-h-[260px] w-full items-center justify-center rounded-[40px] bg-border/60 sm:rounded-[60px] lg:min-h-full">
      <span className="font-display text-lg font-medium text-muted-foreground/70">
        {name} preview
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-6 lg:grid-cols-[477fr_677fr] lg:items-stretch lg:gap-8">
      <div className="flex flex-col gap-6 rounded-[40px] bg-surface px-8 py-10 sm:rounded-[60px]">
        <div className="flex flex-col gap-2">
          {project.meta && (
            <p className="text-sm text-foreground">{project.meta}</p>
          )}
          <h3 className="font-display text-2xl font-bold">{project.name}</h3>
          {project.description && (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          )}
        </div>

        <dl className="flex flex-col gap-2">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline justify-between gap-4 text-sm"
            >
              <dt>{stat.label}</dt>
              <dd className="font-display font-semibold">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <button
          type="button"
          className="mt-auto inline-flex items-center justify-center rounded-full bg-border px-6 py-2.5 text-sm font-semibold transition-opacity hover:opacity-70"
        >
          View Details
        </button>
      </div>

      <ProjectPreview name={project.name} />
    </article>
  );
}

export function SelectedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-[1220px] px-6 pb-24 sm:px-8">
      <h2 className="font-display mb-12 text-center text-4xl sm:text-left sm:text-[50px]">
        <span className="font-serif-display italic text-[#b0adad]">Selected</span>{" "}
        <span className="font-semibold">projects</span>
      </h2>

      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
