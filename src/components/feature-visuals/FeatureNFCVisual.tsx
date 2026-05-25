export function FeatureNFCVisual() {
  return (
    <div className='vis bg-[linear-gradient(160deg,#FFF_0%,#F0FCEF_100%)] border border-(--line)'>
      <svg viewBox='0 0 240 200' width='100%' height='100%' className='p-3'>
        <rect x='64' y='24' width='86' height='160' rx='20' fill='#231F20' />
        <rect x='69' y='29' width='76' height='150' rx='16' fill='#DFFBE3' />
        <rect
          x='80'
          y='50'
          width='54'
          height='6'
          rx='3'
          fill='#398B46'
          opacity='.5'
        />
        <rect
          x='80'
          y='64'
          width='40'
          height='4'
          rx='2'
          fill='#398B46'
          opacity='.25'
        />
        <circle cx='107' cy='120' r='22' fill='#72F886' opacity='.25' />
        <circle cx='107' cy='120' r='14' fill='#72F886' />
        <g transform='translate(160 100)'>
          <circle r='38' fill='#341616' />
          <circle
            r='38'
            fill='none'
            stroke='#72F886'
            strokeWidth='1.5'
            strokeDasharray='3 4'
            opacity='.7'
          />
          <g
            stroke='#FFD9B6'
            strokeWidth='2.4'
            fill='none'
            strokeLinecap='round'
          >
            <path d='M-12 0a12 12 0 0 1 24 0' />
            <path d='M-6 0a6 6 0 0 1 12 0' />
            <circle r='2' fill='#FFD9B6' stroke='none' />
          </g>
        </g>
        <g
          stroke='#72F886'
          strokeWidth='2.4'
          fill='none'
          strokeLinecap='round'
          opacity='.8'
        >
          <path d='M132 90 q 14 30 0 60' />
          <path d='M140 80 q 22 40 0 80' opacity='.6' />
        </g>
      </svg>
    </div>
  );
}
