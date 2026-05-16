type IcoProps = { s?: number };

export const Ico = {
  download: ({ s = 18 }: IcoProps) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v12" />
      <path d="m6 11 6 6 6-6" />
      <path d="M5 21h14" />
    </svg>
  ),
  arrowRight: ({ s = 16 }: IcoProps) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  ),
  spark: ({ s = 18 }: IcoProps) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  ),
  flame: ({ s = 20 }: IcoProps) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c1 4 4 5 4 9a4 4 0 0 1-8 0c0-1.5.5-2.5 1.5-3.5C10.5 6.5 11 4 12 2Zm0 11.5c1.7 0 3-1.2 3-2.7 0-1.6-2-2.4-2-4-1 1-2 2-2 3.5 0 1.8 1 3.2 1 3.2Z" />
    </svg>
  ),
  github: ({ s = 18 }: IcoProps) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.57 9.57 0 0 1 12 6.84c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  ),
  twitter: ({ s = 18 }: IcoProps) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2H21l-6.55 7.49L22 22h-6.4l-4.99-6.53L4.8 22H2.04l7.02-8.02L2 2h6.56l4.51 5.97L18.24 2Zm-1.12 18h1.7L7.04 4H5.2l11.92 16Z" />
    </svg>
  ),
  discord: ({ s = 18 }: IcoProps) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.27 5.33A17.5 17.5 0 0 0 14.65 4l-.2.36a14 14 0 0 1 4.18 1.96 13.5 13.5 0 0 0-4.74-1.5 12.7 12.7 0 0 0-3.78 0 13.5 13.5 0 0 0-4.74 1.5 14 14 0 0 1 4.18-1.96L9.35 4a17.5 17.5 0 0 0-4.62 1.33C2.4 8.7 1.78 12 2.07 15.24a17.6 17.6 0 0 0 5.34 2.7l.95-1.32a11.7 11.7 0 0 1-1.85-.9c.16-.12.31-.24.46-.37 3.6 1.66 7.5 1.66 11.06 0l.46.37c-.6.36-1.22.66-1.85.9l.95 1.32a17.6 17.6 0 0 0 5.34-2.7c.34-3.65-.59-6.94-2.66-9.91ZM8.78 13.86c-1.05 0-1.92-.96-1.92-2.14 0-1.18.84-2.14 1.92-2.14 1.07 0 1.94.97 1.92 2.14 0 1.18-.85 2.14-1.92 2.14Zm6.45 0c-1.06 0-1.92-.96-1.92-2.14 0-1.18.84-2.14 1.92-2.14 1.07 0 1.94.97 1.92 2.14 0 1.18-.85 2.14-1.92 2.14Z" />
    </svg>
  ),
};

export function Sprout({
  size = 120,
  mood = "happy",
  blink = false,
}: {
  size?: number;
  mood?: "happy" | "focus";
  blink?: boolean;
}) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
      <defs>
        <radialGradient id="bodyG" cx=".4" cy=".35" r=".8">
          <stop offset="0" stopColor="#A6F4B6" />
          <stop offset=".6" stopColor="#72F886" />
          <stop offset="1" stopColor="#3FA950" />
        </radialGradient>
        <radialGradient id="cheek" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#FF7C7C" stopOpacity=".55" />
          <stop offset="1" stopColor="#FF7C7C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="leaf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7AE08D" />
          <stop offset="1" stopColor="#398B46" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="178" rx="46" ry="6" fill="#1a3a1f" opacity=".18" />
      <g transform="translate(100 28)">
        <path d="M0 0 C 4 -22, 28 -28, 36 -10 C 22 -2, 6 6, 0 0 Z" fill="url(#leaf)" />
        <path d="M0 0 C 4 -16, 18 -22, 30 -12" stroke="#1f5d2a" strokeWidth="1.2" fill="none" opacity=".4" />
        <rect x="-2" y="0" width="4" height="20" rx="2" fill="#3FA950" />
      </g>
      <path
        d="M44 110 C 44 70, 70 44, 100 44 C 130 44, 156 70, 156 110 C 156 154, 132 170, 100 170 C 68 170, 44 154, 44 110 Z"
        fill="url(#bodyG)"
        stroke="#2b6f37"
        strokeWidth="2"
        strokeOpacity=".25"
      />
      <ellipse cx="100" cy="135" rx="34" ry="20" fill="#fff" opacity=".18" />
      <ellipse cx="68" cy="118" rx="11" ry="7" fill="url(#cheek)" />
      <ellipse cx="132" cy="118" rx="11" ry="7" fill="url(#cheek)" />
      {blink ? (
        <g stroke="#1a2b1c" strokeWidth="3" strokeLinecap="round">
          <line x1="78" y1="104" x2="92" y2="104" />
          <line x1="108" y1="104" x2="122" y2="104" />
        </g>
      ) : (
        <g fill="#1a2b1c">
          <ellipse cx="85" cy="104" rx="5" ry="6" />
          <ellipse cx="115" cy="104" rx="5" ry="6" />
          <circle cx="86.5" cy="102" r="1.6" fill="#fff" />
          <circle cx="116.5" cy="102" r="1.6" fill="#fff" />
        </g>
      )}
      {mood === "focus" ? (
        <path d="M92 130 Q 100 134 108 130" stroke="#1a2b1c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      ) : (
        <path d="M88 128 Q 100 142 112 128" stroke="#1a2b1c" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      )}
    </svg>
  );
}

export function Ring({
  size = 180,
  stroke = 12,
  value = 0.42,
  color = "#72F886",
  track = "rgba(20,40,26,.12)",
}: {
  size?: number;
  stroke?: number;
  value?: number;
  color?: string;
  track?: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} stroke={track} strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - value)}
        strokeLinecap="round"
      />
    </svg>
  );
}
