import imgHero from "@/imports/Home/98520c1ed0bf7a4016017654619311847131f698.png";
import { projects } from "../data";
import { ExperienceSection } from "../components/experience-section";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={imgHero}
        alt="Scenic hero background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      {/* Name + CS @ UCSD */}
      <div className="absolute top-[54px] inset-x-0 px-[53px] flex items-center justify-between pointer-events-none">
        <span
          className="font-['Instrument_Sans',sans-serif] font-semibold text-[26px] text-black tracking-[0.78px] whitespace-nowrap"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          JUSTINE LE
        </span>
        <span
          className="font-['Instrument_Sans',sans-serif] font-semibold text-[26px] text-black tracking-[0.78px] whitespace-nowrap"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          CS @ UCSD
        </span>
      </div>
      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-4">
        <h1
          className="font-['Instrument_Sans',sans-serif] font-bold text-[clamp(48px,8vw,83px)] text-black leading-none whitespace-nowrap"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          HI. I&rsquo;M JUSTINE
        </h1>
        <p className="font-['Geist',sans-serif] font-medium text-[clamp(16px,2vw,23px)] text-black tracking-[1px]">
          PRODUCT DESIGNER &amp; SWE
        </p>
      </div>
    </section>
  );
}

function ProjectCard({ name, video }: { name: string; video: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="w-full h-[520px] rounded-[30px] bg-[#f1f1f1] overflow-hidden">
        <video
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      <p className="mt-4 font-['Geist',sans-serif] font-medium text-[26px] text-black tracking-[1.04px] whitespace-nowrap">
        {name}
      </p>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-32 px-6 md:px-12">
      <h2
        className="font-['Instrument_Sans',sans-serif] font-bold text-[clamp(40px,5vw,65px)] text-[#809db0] text-center mb-20 tracking-[0px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        PROJECTS
      </h2>
      <div className="w-full grid grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} name={p.name} video={p.video} />
        ))}
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <div id="contact" />
    </>
  );
}
