import { useLayoutEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const navItems = [
  { label: "HOME", to: "/", kind: "route" as const },
  { label: "ABOUT", to: "/about", kind: "route" as const },
  { label: "PROJECTS", to: "/#projects", kind: "hash" as const },
  { label: "CONTACT", to: "/#contact", kind: "hash" as const },
];

export function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  // Determine active item from the current route
  const activeFromRoute = () => {
    if (location.pathname.startsWith("/about")) return 1;
    return 0;
  };
  const [active, setActive] = useState(activeFromRoute());

  useLayoutEffect(() => {
    setActive(activeFromRoute());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useLayoutEffect(() => {
    const el = itemRefs.current[active];
    if (el) {
      setPill({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [active]);

  const handleClick = (i: number, item: (typeof navItems)[number]) => {
    setActive(i);
    if (item.kind === "route") {
      if (location.pathname === item.to) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(item.to);
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    } else {
      const hash = item.to.split("#")[1];
      const scrollToSection = () =>
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      if (location.pathname !== "/") {
        navigate("/");
        // wait for the Home route to mount before measuring the section offset
        requestAnimationFrame(() => requestAnimationFrame(scrollToSection));
      } else {
        scrollToSection();
      }
    }
  };

  return (
    <nav className="fixed top-[38px] left-1/2 -translate-x-1/2 z-50 h-[50px] w-[428px] max-w-[calc(100vw-48px)] flex items-center justify-center rounded-[100px] overflow-hidden shadow-[0px_8px_13px_0px_rgba(0,0,0,0.15)] backdrop-blur-md">
      <div aria-hidden className="absolute inset-0 bg-[rgba(255,255,255,0.1)] rounded-[100px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none rounded-[100px] shadow-[inset_4px_5px_6px_0px_rgba(255,255,255,0.38)]" />
      <div className="relative flex items-center gap-[28px] text-[15px] text-black tracking-[1.08px] whitespace-nowrap px-2">
        {/* Sliding glass pill */}
        <div
          aria-hidden
          className="absolute top-1/2 -translate-y-1/2 h-[36px] rounded-[100px] bg-[rgba(255,255,255,0.1)] backdrop-blur-md shadow-[0px_8px_13px_0px_rgba(0,0,0,0.15),inset_2px_3px_4px_0px_rgba(255,255,255,0.45)] transition-[left,width] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-none"
          style={{
            left: `${pill.left - 12}px`,
            width: `${pill.width + 24}px`,
          }}
        />
        {navItems.map((item, i) => (
          <button
            key={item.label}
            ref={(el) => (itemRefs.current[i] = el)}
            onClick={() => handleClick(i, item)}
            className={`relative z-10 transition-opacity hover:opacity-70 font-['Geist',sans-serif] ${
              active === i ? "font-semibold" : "font-medium"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
