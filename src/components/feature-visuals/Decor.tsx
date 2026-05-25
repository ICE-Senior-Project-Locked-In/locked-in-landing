import type { CSSProperties } from 'react';

export type DecorFrame = { x: number; y: number; w: number; h: number };

/** Crop a single frame out of /decorations.png via CSS background.
 *  Spritesheet is 254x292. We scale the whole sheet by `scale` and offset
 *  so only the requested frame shows. `image-rendering: pixelated` keeps it crisp. */
export function Decor({
  frame,
  scale = 2,
  className = '',
  style = {},
}: {
  frame: DecorFrame;
  scale?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={'absolute ' + className}
      style={{
        width: frame.w * scale,
        height: frame.h * scale,
        backgroundImage: 'url(/decorations.png)',
        backgroundPosition: `-${frame.x * scale}px -${frame.y * scale}px`,
        backgroundSize: `${254 * scale}px ${292 * scale}px`,
        backgroundRepeat: 'no-repeat',
        imageRendering: 'pixelated',
        ...style,
      }}
    />
  );
}

/** Frame coordinates from decorations.json. */
export const DECOR = {
  bed: { x: 1, y: 70, w: 110, h: 82 },
  carpet: { x: 1, y: 1, w: 173, h: 67 },
  lamp: { x: 159, y: 220, w: 42, h: 36 }, // rotated in sheet
  plantLarge: { x: 70, y: 219, w: 26, h: 61 },
  plantSmall: { x: 129, y: 253, w: 23, h: 23 },
  towerSquare: { x: 176, y: 1, w: 76, h: 105 },
  windowCurtain: { x: 1, y: 154, w: 67, h: 67 },
} as const;
