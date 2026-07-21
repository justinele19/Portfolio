function Group2() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] left-[822px] text-black top-[483px]">
      <div className="absolute font-['Geist:Light',sans-serif] font-light h-[232px] left-[822px] text-[18px] top-[538px] w-[661.641px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[normal]">{`I’m currently studying computer science at University of California, San Diego. Most of my experience revolves around `}</span>
          <span className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[#9173b3]">security</span>
          <span className="leading-[normal]">{` through my internship in partnership with DoD and NIWC Pacific leaders, as well as my research investigating how machine learning can detect Hardware Trojans. `}</span>
        </p>
        <p className="leading-[normal] mb-0">​</p>
        <p>
          <span className="leading-[normal]">{`Recently, I’ve been exploring `}</span>
          <span className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[#9173b3]">product design</span>
          <span className="leading-[normal]">{` and `}</span>
          <span className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[#9173b3]">UI/UX</span>
          <span className="leading-[normal]">{` and have found great ownership in being about to design my vision and being able to bring it to life with what I’ve learned from my technical background.`}</span>
        </p>
      </div>
      <div className="absolute font-['Instrument_Sans:Medium',sans-serif] font-medium h-[40px] left-[822px] text-[33px] top-[483px] w-[699px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] mb-0">Hi, I’m Justine Le.</p>
        <p className="leading-[normal]">​</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+76.5px)] top-[calc(50%-1066px)]">
      <p className="[word-break:break-word] absolute font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-47.5px)] text-[70px] text-black top-[calc(50%-1108.5px)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        ABOUT
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+76.5px)] top-[calc(50%-109px)]">
      <p className="[word-break:break-word] absolute font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-127.5px)] text-[#809db0] text-[65px] top-[calc(50%-148.5px)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        EXPERIENCE
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute h-[38px] left-[calc(50%-88.5px)] pointer-events-none rounded-[100px] shadow-[0px_8px_13px_0px_rgba(0,0,0,0.15)] top-[-9px] w-[105px]">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0.1)] inset-0 rounded-[100px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_5px_6px_0px_rgba(255,255,255,0.38)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative">
      <Frame1 />
      <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[normal] left-[34px] text-[18px] text-black top-[-1px] tracking-[1.08px] whitespace-nowrap">HOME</p>
      <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[normal] left-[133px] text-[18px] text-black top-[-1px] tracking-[1.08px] whitespace-nowrap">ABOUT</p>
      <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[normal] left-[241px] text-[18px] text-black top-[-1px] tracking-[1.08px] whitespace-nowrap">PROJECTS</p>
      <p className="[word-break:break-word] absolute font-['Geist:Medium',sans-serif] font-medium leading-[normal] left-[385px] text-[18px] text-black top-[-1px] tracking-[1.08px] whitespace-nowrap">CONTACT</p>
    </div>
  );
}

function NavBarAbout() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[49px] items-center justify-center left-[calc(50%+38.5px)] overflow-clip py-[14px] rounded-[100px] shadow-[0px_8px_13px_0px_rgba(0,0,0,0.15)] top-[55px] w-[508px]" data-name="nav bar - about">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[100px]" />
      <Frame />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_4px_5px_6px_0px_rgba(255,255,255,0.38)]" />
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-white relative size-full" data-name="About">
      <div className="absolute bg-white h-[1080px] left-[9px] right-[4px] top-[-2px]" />
      <Group2 />
      <header className="absolute aspect-[1503/1041] block left-0 right-[4px] top-[157px]" data-name="image 1" />
      <Group />
      <Group1 />
      <NavBarAbout />
      <div className="absolute bg-[#d9d9d9] h-[632px] left-[40px] rounded-[25px] top-[311px] w-[756px]" />
    </div>
  );
}