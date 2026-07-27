"use client";

import { motion } from "motion/react";

type ProjectStat = {
  label: string;
  value: string;
};

type Project = {
  name: string;
  meta?: string;
  description?: string;
  stats: ProjectStat[];
  video?: string;
};

const projects: Project[] = [
  {
    name: "LockedIn",
    video: "/lockedin.mp4",
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

const easeOut = [0.22, 1, 0.36, 1] as const;

function ProjectPreview({ name, video }: { name: string; video?: string }) {
  return (
    <motion.div
      variants={{ hover: { scale: 1.015 } }}
      transition={{ duration: 0.3, ease: easeOut }}
      className="flex min-h-[260px] w-full items-center justify-center overflow-hidden rounded-[var(--card-radius)] bg-border/60 transition-colors duration-300 lg:min-h-full"
    >
      {video ? (
        <video
          className="h-full w-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${name} preview`}
        />
      ) : (
        <span className="font-display text-lg font-medium text-muted-foreground/70">
          {name} preview
        </span>
      )}
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: easeOut }}
      whileHover="hover"
      /* Column widths and gap are tokens in globals.css. All three rows are
         the same fixed height, exactly as in the design. */
      className="grid gap-6 lg:h-[var(--card-height)] lg:grid-cols-[var(--card-text-width)_1fr] lg:items-stretch lg:gap-[var(--card-column-gap)]"
    >
      <div className="flex h-full flex-col gap-4 rounded-[var(--card-radius)] bg-surface px-[var(--card-padding-x)] py-[42px] transition-shadow duration-300 hover:shadow-lg">
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-[27px] font-bold">{project.name}</h3>
          {project.meta && (
            <p className="text-[14px] text-foreground">{project.meta}</p>
          )}
          {project.description && (
            <p className="text-[15px] leading-normal text-muted-foreground">
              {project.description}
            </p>
          )}
        </div>

        {/* Stats + button pin to the bottom as a unit, so cards with no
            description (IssueSight) keep the same layout as the others. */}
        <div className="mt-auto flex flex-col gap-5">
          <dl className="flex flex-col gap-1.5">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline justify-between gap-4 text-[15px]"
              >
                <dt className="font-display font-normal">{stat.label}</dt>
                <dd className="font-display font-semibold">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-full items-center justify-center rounded-full bg-border py-[10px] text-[15px] font-semibold transition-colors duration-200 hover:bg-black hover:text-white"
          >
            View Details
          </motion.button>
        </div>
      </div>

      <ProjectPreview name={project.name} video={project.video} />
    </motion.article>
  );
}

export function SelectedProjects() {
  return (
    <section
      id="projects"
      className="section-shell pt-[var(--space-hero-to-projects)] pb-[var(--space-cards-to-experience)]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="font-display mb-[var(--space-projects-heading)] text-center text-4xl sm:text-[55px]"
      >
        <span className="font-serif-display italic text-serif-accent">Selected</span>{" "}
        <span className="font-semibold">projects</span>
      </motion.h2>

      <div className="flex flex-col gap-[var(--space-between-cards)]">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
