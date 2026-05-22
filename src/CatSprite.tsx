import type { CSSProperties } from "react";

/**
 * Cream cat idle animation using a sliding strip approach.
 * Row 0, 10 frames × 32px native. A single @keyframes catSlide in index.css
 * works for any size — no per-size keyframe injection needed.
 */
export function CatSprite({ size }: { size: number }) {
  const scale = size / 32;
  const sw = Math.round(512 * scale);
  const sh = Math.round(640 * scale);
  return (
    <div
      className="overflow-hidden shrink-0 w-(--cat-s) h-(--cat-s)"
      style={{ "--cat-s": `${size}px` } as CSSProperties}
    >
      <div
        className="h-full bg-[url('/sprites/cream_cat_spritesheet.png')] bg-no-repeat bg-position-[0_0] [image-rendering:pixelated] animate-[catSlide_1.5s_steps(10)_infinite] w-(--strip-w) bg-size-[var(--bg-sw)_var(--bg-sh)]"
        style={
          {
            "--strip-w": `${size * 10}px`,
            "--bg-sw": `${sw}px`,
            "--bg-sh": `${sh}px`,
          } as CSSProperties
        }
      />
    </div>
  );
}
