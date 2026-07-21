import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portraitPhotos } from "../data";

const DEFAULT_CROP = { scale: 1, x: 50, y: 50 };

export function PhotoCarousel({
  rounded = "30px",
  glass = false,
  aspect = "aspect-[4/5]",
  fill = false,
}: {
  rounded?: string;
  glass?: boolean;
  aspect?: string;
  fill?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const go = (dir: number) =>
    setIndex((i) => (i + dir + portraitPhotos.length) % portraitPhotos.length);

  return (
    <div
      className={`relative w-full ${fill ? "h-full" : aspect} overflow-hidden ${
        glass
          ? "shadow-[0px_8px_20px_0px_rgba(0,0,0,0.15),inset_2px_3px_4px_0px_rgba(255,255,255,0.4)] bg-white/20 backdrop-blur-md p-2"
          : "bg-[#f1f1f1]"
      }`}
      style={{ borderRadius: rounded }}
    >
      <div
        className="relative w-full h-full overflow-hidden"
        style={{ borderRadius: glass ? "22px" : rounded }}
      >
        {portraitPhotos.map((photo, i) => {
          const c = photo.crop ?? DEFAULT_CROP;
          return (
            <img
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              draggable={false}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                objectPosition: `${c.x}% ${c.y}%`,
                transform: `scale(${c.scale})`,
              }}
            />
          );
        })}
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous photo"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-white/70 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-black" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next photo"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-white/70 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-black" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {portraitPhotos.map((photo, i) => (
          <button
            key={photo.id}
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
