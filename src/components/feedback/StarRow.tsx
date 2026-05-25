export function StarRow({
  value,
  hover,
  onHover,
  onPick,
}: {
  value: number;
  hover: number | null;
  onHover: (n: number | null) => void;
  onPick: (n: number) => void;
}) {
  return (
    <div className='flex gap-2.5'>
      {[1, 2, 3, 4, 5].map((n) => {
        const active = (hover ?? value) >= n;
        return (
          <button
            key={n}
            onMouseEnter={() => onHover(n)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onPick(n)}
            aria-label={`Rate ${n} star${n > 1 ? 's' : ''}`}
            className={`w-14 h-14 rounded-[18px] cursor-pointer grid place-items-center border-[1.5px] transition-[transform,background,box-shadow] ease-in-out duration-150 ${
              active
                ? 'border-transparent bg-[linear-gradient(135deg,#A6F4B6,#72F886)] -translate-y-0.5 shadow-[0_10px_20px_-10px_rgba(57,139,70,.55)]'
                : 'border-[rgba(20,24,26,.12)] bg-white translate-y-0 shadow-none'
            }`}
          >
            <svg
              width='26'
              height='26'
              viewBox='0 0 24 24'
              fill={active ? '#0c2911' : 'none'}
              stroke={active ? '#0c2911' : 'rgba(20,24,26,.35)'}
              strokeWidth='1.8'
              strokeLinejoin='round'
            >
              <path d='m12 3 2.6 5.5 6 .9-4.4 4.2 1 6L12 16.8 6.8 19.6l1-6L3.4 9.4l6-.9L12 3Z' />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
