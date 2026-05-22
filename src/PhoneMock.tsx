import { useEffect, useState } from 'react';
import { Ico } from './icons';
import { CatSprite } from './CatSprite';

const ENCOURAGEMENTS = [
  'Focused session in progress...',
  'Keep going, you got this!',
  "You're doing great!",
  'Stay locked in!',
  'Your pet is cheering for you!',
  'Deep breaths, deep focus.',
];

/** Perspective room matching the Flutter RoomView background */
function RoomBg() {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 100 175'
      preserveAspectRatio='xMidYMid slice'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='100' height='175' fill='#C8A87C' />
      <polygon points='0,0 18,23 18,148 0,175' fill='#AE9068' />
      <polygon points='100,0 82,23 82,148 100,175' fill='#AE9068' />
      <polygon points='0,0 100,0 82,23 18,23' fill='#F0DEBB' />
      <polygon points='0,175 100,175 82,148 18,148' fill='#6B5040' />
      <line
        x1='18'
        y1='148'
        x2='82'
        y2='148'
        stroke='#9A7850'
        strokeWidth='0.6'
      />
      <line
        x1='0'
        y1='175'
        x2='18'
        y2='148'
        stroke='#9A7850'
        strokeWidth='0.3'
      />
      <line
        x1='100'
        y1='175'
        x2='82'
        y2='148'
        stroke='#9A7850'
        strokeWidth='0.3'
      />
    </svg>
  );
}

export function PhoneMock() {
  const [secs, setSecs] = useState(23 * 60 + 42);
  const [encourageIdx, setEncourageIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSecs((s) => Math.max(0, s - 1)), 1000);
    const e = setInterval(
      () => setEncourageIdx((i) => (i + 1) % ENCOURAGEMENTS.length),
      8000,
    );
    return () => {
      clearInterval(t);
      clearInterval(e);
    };
  }, []);

  const hh = String(Math.floor(secs / 3600)).padStart(2, '0');
  const mm = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const ss = String(secs % 60).padStart(2, '0');

  return (
    <div className='phone-wrap'>
      {/* ── Floating badges ── */}
      <div className='float float-xp'>
        <div className='ico-32 bg-[linear-gradient(135deg,#72F886,#398B46)] text-[#0c2911]'>
          <Ico.spark s={20} />
        </div>
        <div>
          <div className='text-[11px] text-(--ink-3) font-medium tracking-[.06em] uppercase'>
            + XP gained
          </div>
          <div className='font-bold text-[18px] tracking-[-0.01em]'>
            +128 XP
          </div>
        </div>
      </div>

      <div className='float float-streak'>
        <div className='ico-32 bg-[rgba(255,255,255,.08)]'>
          <span className='text-[#FFB36B]'>
            <Ico.flame s={20} />
          </span>
        </div>
        <div>
          <div className='text-[10.5px] text-[rgba(255,255,255,.6)] font-medium tracking-[.08em] uppercase'>
            Streak
          </div>
          <div className='font-bold text-[18px]'>
            <span className='num'>14</span> days
          </div>
        </div>
      </div>

      <div className='float float-nfc'>
        <div className='ico-32 bg-(--secondary-500) text-[#FFD9B6]'>
          <svg
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.2'
            strokeLinecap='round'
          >
            <path d='M3 12a9 9 0 0 1 18 0' />
            <path d='M6 12a6 6 0 0 1 12 0' />
            <path d='M9 12a3 3 0 0 1 6 0' />
          </svg>
        </div>
        <div>
          <div className='text-[11px] text-(--ink-3) font-medium'>
            NFC paired
          </div>
          <div className='font-semibold text-[14px]'>Desk · Tag #02</div>
        </div>
      </div>

      {/* ── Phone shell ── */}
      <div className='phone'>
        <div className='screen flex flex-col'>
          {/* Status bar */}
          <div className='flex justify-between pt-12 px-5.5 pb-0 text-[11px] font-semibold text-[#3D2200] bg-[#F0DEBB] relative z-2'>
            <span>9:41</span>
            <span className='flex gap-1.25 items-center'>
              <span className='w-3.5 h-2 border-[1.5px] border-[#3D2200] rounded-xs relative inline-block'>
                <span className='absolute inset-px bg-[#3D2200] w-[70%] rounded-[1px]' />
              </span>
            </span>
          </div>

          {/* Top bar */}
          <div className='bg-[#F6DCC1] pt-2 px-4 pb-2.5 relative z-2'>
            <div className='flex justify-between mb-1'>
              <span className='text-[11.5px] font-semibold text-[#3D2200]'>
                Mittens
              </span>
              <span className='text-[11.5px] font-semibold text-[#3D2200]'>
                LV 7
              </span>
            </div>
            <div className='h-2.5 border-[1.5px] border-[#3D2200] rounded-md bg-white overflow-hidden'>
              <div className='w-[62%] h-full bg-[#3D2200] rounded-sm' />
            </div>
            <div className='text-[9px] text-[#7A5230] mt-0.75'>
              42 minutes until next level
            </div>
          </div>

          {/* Room area */}
          <div className='flex-1 relative overflow-hidden'>
            {/* SVG room background */}
            <div className='absolute inset-0'>
              <RoomBg />
            </div>

            {/* Cat sprite */}
            <div className='absolute bottom-[14%] left-1/2 -translate-x-1/2'>
              <CatSprite size={128} />
            </div>

            {/* Timer card */}
            <div className='absolute top-2.5 left-2.5 right-2.5 bg-[rgba(255,255,255,0.88)] rounded-xl p-[12px_14px] shadow-[0_4px_16px_rgba(0,0,0,.22)] flex flex-col items-center gap-2'>
              <div className='text-[13px] font-bold text-[#14181a]'>
                Locked In
              </div>
              <div className='mono text-[36px] font-bold tracking-[-0.02em] text-[#14181a] leading-none'>
                {hh}
                <span className='opacity-30'>:</span>
                {mm}
                <span className='opacity-30'>:</span>
                {ss}
              </div>
              <div className='text-[10px] text-[#7a8480] text-center'>
                {ENCOURAGEMENTS[encourageIdx]}
              </div>
            </div>

            {/* Pet + Feed buttons */}
            <div className='absolute top-29.5 left-0 right-0 flex gap-2 justify-center px-5 py-5'>
              {(['👋 Pet', '🍖 Feed'] as const).map((label) => (
                <button
                  key={label}
                  className='bg-[#14181a] text-white border-0 rounded-full py-1.75 px-4 text-[11px] font-semibold cursor-default flex-1'
                >
                  {label}
                </button>
              ))}
            </div>

            {/* End Focus Session */}
            <div className='absolute bottom-3 left-3 right-3'>
              <button className='w-full bg-transparent text-white border-[1.5px] border-[rgba(255,255,255,0.75)] rounded-full py-2.25 text-[11.5px] font-semibold cursor-default'>
                End Focus Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
