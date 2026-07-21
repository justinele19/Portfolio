import { experience } from "../data";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-white py-32 px-6 md:px-12">
      <h2
        className="font-['Instrument_Sans',sans-serif] font-bold text-[clamp(40px,5vw,65px)] text-[#809db0] text-center mb-16 tracking-[0px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        EXPERIENCE
      </h2>
      <div className="max-w-[900px] mx-auto flex flex-col gap-10">
        {experience.map((e) => (
          <div
            key={e.id}
            className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-black/10 pb-8"
          >
            <div>
              <p className="font-['Instrument_Sans',sans-serif] font-semibold text-[24px] text-black">
                {e.role}
              </p>
              <p className="font-['Geist',sans-serif] font-medium text-[16px] text-[#809db0] mt-1">
                {e.company}
              </p>
              <p className="font-['Geist',sans-serif] font-medium text-[15px] text-black/60 mt-3 max-w-[520px]">
                {e.blurb}
              </p>
            </div>
            <p className="font-['Geist',sans-serif] font-medium text-[15px] text-black/50 whitespace-nowrap">
              {e.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
