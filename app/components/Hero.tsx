export function Hero() {
  return (
    <section className="mx-auto max-w-[1220px] px-6 pb-16 pt-6 sm:px-8">
      <div className="flex flex-col gap-10 rounded-[40px] bg-border/70 px-8 py-16 sm:rounded-[60px] sm:px-14 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <h1 className="font-display max-w-xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[60px]">
          Designed and built, start to finish.
        </h1>

        <div className="flex flex-col items-start gap-6 lg:max-w-md lg:items-end">
          <p className="text-base leading-relaxed tracking-[0.01em] text-muted-foreground lg:text-right">
            Studying CS at UC San Diego, with a background in security
            research and experience alongside DoD and NIWC Pacific leaders.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-surface-muted px-6 py-3 text-base tracking-[0.01em] transition-opacity hover:opacity-70"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
