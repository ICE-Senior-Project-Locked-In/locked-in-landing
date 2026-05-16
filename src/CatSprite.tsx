import { useEffect } from "react";

// Track which keyframe sizes have already been injected
const injected = new Set<number>();

/**
 * Cream cat idle animation (row 0, 10 frames × 32 px native).
 * Injects a per-size @keyframes rule into <head> on first render.
 */
export function CatSprite({ size }: { size: number }) {
  useEffect(() => {
    if (injected.has(size)) return;
    injected.add(size);
    const style = document.createElement("style");
    style.textContent = `@keyframes catIdle_${size}{from{background-position:0 0}to{background-position:${-(size * 10)}px 0}}`;
    document.head.appendChild(style);
  }, [size]);

  const scale = size / 32;

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundImage: "url('/sprites/cream_cat_spritesheet.png')",
        backgroundPosition: "0 0",
        backgroundSize: `${Math.round(512 * scale)}px ${Math.round(640 * scale)}px`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        animation: `catIdle_${size} 1.5s steps(10) infinite`,
      }}
    />
  );
}
