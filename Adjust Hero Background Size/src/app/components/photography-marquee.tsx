import { photographyPhotos } from "../data";

type Photo = (typeof photographyPhotos)[number];
type Column =
  | { kind: "full"; photo: Photo }
  | { kind: "stack"; photos: [Photo, Photo] };

const ROW_HEIGHT = 500; // px — total height of the strip
const GAP = 12; // px gap between photos
const HALF = (ROW_HEIGHT - GAP) / 2;

// Pack photos into columns: portraits fill the full height, landscapes
// stack two-high (like the reference layout).
function buildColumns(photos: Photo[]): Column[] {
  const columns: Column[] = [];
  let pendingLandscape: Photo | null = null;

  const flushLandscape = () => {
    if (pendingLandscape) {
      columns.push({ kind: "full", photo: pendingLandscape });
      pendingLandscape = null;
    }
  };

  for (const photo of photos) {
    if (photo.ratio >= 1) {
      // landscape — try to pair it with another landscape
      if (pendingLandscape) {
        columns.push({ kind: "stack", photos: [pendingLandscape, photo] });
        pendingLandscape = null;
      } else {
        pendingLandscape = photo;
      }
    } else {
      // portrait — full-height column
      flushLandscape();
      columns.push({ kind: "full", photo });
    }
  }
  flushLandscape();
  return columns;
}

export function PhotographyMarquee() {
  const columns = buildColumns(photographyPhotos);
  // Duplicate so the leftward scroll loops seamlessly
  const loop = [...columns, ...columns];

  return (
    <section id="photography" className="bg-white py-24 overflow-hidden">
      <h2
        className="font-['Instrument_Sans',sans-serif] font-bold text-[clamp(40px,5vw,65px)] text-[#809db0] text-center mb-16 tracking-[0px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        PHOTOGRAPHY
      </h2>
      <div className="relative w-full">
        <div
          className="flex w-max animate-[photo-marquee_50s_linear_infinite] hover:[animation-play-state:paused]"
          style={{ gap: `${GAP}px`, height: `${ROW_HEIGHT}px` }}
        >
          {loop.map((col, i) => {
            if (col.kind === "full") {
              return (
                <div
                  key={`${col.photo.id}-${i}`}
                  className="overflow-hidden shrink-0 bg-[#f1f1f1]"
                  style={{
                    height: `${ROW_HEIGHT}px`,
                    width: `${Math.round(ROW_HEIGHT * col.photo.ratio)}px`,
                  }}
                >
                  <img src={col.photo.src} alt={col.photo.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              );
            }
            const width = Math.round(HALF * col.photos[0].ratio);
            return (
              <div
                key={`${col.photos[0].id}-${i}`}
                className="flex flex-col shrink-0"
                style={{ height: `${ROW_HEIGHT}px`, gap: `${GAP}px`, width: `${width}px` }}
              >
                {col.photos.map((p, j) => (
                  <div
                    key={`${p.id}-${j}`}
                    className="overflow-hidden bg-[#f1f1f1]"
                    style={{ height: `${HALF}px` }}
                  >
                    <img src={p.src} alt={p.alt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
