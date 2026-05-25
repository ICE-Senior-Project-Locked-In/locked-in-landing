export function FeatureBlockVisual() {
  const apps = [
    { x: 40, y: 30, color: '#FF5A5A', letter: 'T' },
    { x: 100, y: 30, color: '#5A7CFF', letter: 'f' },
    { x: 160, y: 30, color: '#FF9E4A', letter: '▶' },
    { x: 40, y: 90, color: '#FF4A8A', letter: '♥' },
    { x: 100, y: 90, color: '#72F886', letter: '✓' },
    { x: 160, y: 90, color: '#A36BFF', letter: '♪' },
  ];
  return (
    <div className='vis bg-[linear-gradient(160deg,#1F0B0B,#341616)]'>
      <svg viewBox='0 0 240 200' width='100%' height='100%' className='p-4.5'>
        {apps.map((a, i) => (
          <g key={i} opacity={a.color === '#72F886' ? 1 : 0.35}>
            <rect
              x={a.x}
              y={a.y}
              width='40'
              height='40'
              rx='11'
              fill={a.color}
            />
            <text
              x={a.x + 20}
              y={a.y + 26}
              textAnchor='middle'
              fill='#fff'
              fontSize='18'
              fontWeight='700'
            >
              {a.letter}
            </text>
            {a.color !== '#72F886' && (
              <line
                x1={a.x}
                y1={a.y}
                x2={a.x + 40}
                y2={a.y + 40}
                stroke='#FF7C7C'
                strokeWidth='3'
                strokeLinecap='round'
              />
            )}
          </g>
        ))}
        <g transform='translate(120 160)'>
          <path
            d='M0 -22 L 22 -14 L 22 4 C 22 16, 12 22, 0 26 C -12 22, -22 16, -22 4 L -22 -14 Z'
            fill='#72F886'
            stroke='#0c2911'
            strokeWidth='2'
          />
          <path
            d='M-8 0 l 6 6 l 12 -12'
            stroke='#0c2911'
            strokeWidth='3'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </svg>
    </div>
  );
}
