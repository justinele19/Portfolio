import { PhotoCarousel } from "../components/photo-carousel";
import { ExperienceSection } from "../components/experience-section";
import { PhotographyMarquee } from "../components/photography-marquee";

// VERSION A — matches the imported Figma "About" design
export function AboutA() {
  return (
    <div className="bg-white">
      {/* First screen fills the viewport so Experience stays hidden until scroll */}
      <section className="min-h-screen flex flex-col pt-[120px] pb-12">
        {/* ABOUT header */}
        <div className="text-center mb-4">
          <h1
            className="font-['Instrument_Sans',sans-serif] font-bold text-[clamp(34px,4.5vw,52px)] text-black tracking-[0px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            ABOUT
          </h1>
        </div>

        {/* Photo carousel left / bio right */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-16 items-center pl-6 pr-6 md:pl-10 md:pr-16">
          <PhotoCarousel aspect="aspect-[6/5]" rounded="25px" />
          <div className="flex flex-col justify-center w-full">
            <h2
              className="font-['Instrument_Sans',sans-serif] font-medium text-[33px] text-black mb-6"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Hi, I&rsquo;m Justine Le.
            </h2>
            <div className="font-['Geist',sans-serif] font-light text-[18px] text-black leading-normal flex flex-col gap-6">
              <p>
                I&rsquo;m currently studying Computer Science at the University
                of California, San Diego. Much of my experience centers on{" "}
                <span className="font-['Geist',sans-serif] font-extrabold text-[#9173b3]">
                  security
                </span>
                , shaped by my internship working alongside DoD and NIWC Pacific
                leaders, as well as my research investigating how machine
                learning can detect Hardware Trojans.
              </p>
              <p>
                More recently, I have turned my focus to{" "}
                <span className="font-['Geist',sans-serif] font-extrabold text-[#9173b3]">
                  product design
                </span>{" "}
                and{" "}
                <span className="font-['Geist',sans-serif] font-extrabold text-[#9173b3]">
                  UI/UX
                </span>
                , where I&rsquo;ve discovered a strong sense of ownership in
                designing a vision and bringing it to life with the foundation
                of my technical background.
              </p>
              <p>
                In my free time, I love being outdoor playing tennis or hiking,
                reading a good book, making videos, and doing photography. Have
                a look below!
              </p>
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection />
      <PhotographyMarquee />
    </div>
  );
}
