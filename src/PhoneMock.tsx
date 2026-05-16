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
      {/* Back wall */}
      <rect width='100' height='175' fill='#C8A87C' />
      {/* Left wall */}
      <polygon points='0,0 18,23 18,148 0,175' fill='#AE9068' />
      {/* Right wall */}
      <polygon points='100,0 82,23 82,148 100,175' fill='#AE9068' />
      {/* Ceiling */}
      <polygon points='0,0 100,0 82,23 18,23' fill='#F0DEBB' />
      {/* Floor */}
      <polygon points='0,175 100,175 82,148 18,148' fill='#6B5040' />
      {/* Baseboard trim */}
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
  const xpPct = 0.62;

  return (
    <div className='phone-wrap'>
      {/* ── Floating badges ── */}
      <div className='float float-xp'>
        <div
          className='ico-32'
          style={{
            background: 'linear-gradient(135deg,#72F886,#398B46)',
            color: '#0c2911',
          }}
        >
          <Ico.spark s={20} />
        </div>
        <div>
          <div
            style={{
              fontSize: 11,
              color: 'var(--ink-3)',
              fontWeight: 500,
              letterSpacing: '.06em',
              textTransform: 'uppercase',
            }}
          >
            + XP gained
          </div>
          <div
            style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-.01em' }}
          >
            +128 XP
          </div>
        </div>
      </div>

      <div className='float float-streak'>
        <div className='ico-32' style={{ background: 'rgba(255,255,255,.08)' }}>
          <span style={{ color: '#FFB36B' }}>
            <Ico.flame s={20} />
          </span>
        </div>
        <div>
          <div
            style={{
              fontSize: 10.5,
              color: 'rgba(255,255,255,.6)',
              fontWeight: 500,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
            }}
          >
            Streak
          </div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>
            <span className='num'>14</span> days
          </div>
        </div>
      </div>

      <div className='float float-nfc'>
        <div
          className='ico-32'
          style={{ background: 'var(--secondary-500)', color: '#FFD9B6' }}
        >
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
          <div style={{ fontSize: 11, color: 'var(--ink-3)', fontWeight: 500 }}>
            NFC paired
          </div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>Desk · Tag #02</div>
        </div>
      </div>

      {/* ── Phone shell ── */}
      <div className='phone'>
        <div
          className='screen'
          style={{
            background: 'none',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Status bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '48px 22px 0',
              fontSize: 11,
              fontWeight: 600,
              color: '#3D2200',
              background: '#F0DEBB',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <span>9:41</span>
            <span style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              <span
                style={{
                  width: 14,
                  height: 8,
                  border: '1.5px solid #3D2200',
                  borderRadius: 2,
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    inset: 1,
                    background: '#3D2200',
                    width: '70%',
                    borderRadius: 1,
                  }}
                />
              </span>
            </span>
          </div>

          {/* ── Top bar — #F6DCC1 warm beige ── */}
          <div
            style={{
              background: '#F6DCC1',
              padding: '8px 16px 10px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 4,
              }}
            >
              <span
                style={{ fontSize: 11.5, fontWeight: 600, color: '#3D2200' }}
              >
                Mittens
              </span>
              <span
                style={{ fontSize: 11.5, fontWeight: 600, color: '#3D2200' }}
              >
                LV 7
              </span>
            </div>
            <div
              style={{
                height: 10,
                border: '1.5px solid #3D2200',
                borderRadius: 6,
                background: '#fff',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${xpPct * 100}%`,
                  height: '100%',
                  background: '#3D2200',
                  borderRadius: 4,
                }}
              />
            </div>
            <div style={{ fontSize: 9, color: '#7A5230', marginTop: 3 }}>
              42 minutes until next level
            </div>
          </div>

          {/* ── Room area (fills remaining space) ── */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            {/* SVG room background */}
            <div style={{ position: 'absolute', inset: 0 }}>
              <RoomBg />
            </div>

            {/* Cat sprite */}
            <div style={{ position: 'absolute', bottom: '14%', left: '50%', transform: 'translateX(-50%)' }}>
              <CatSprite size={128} />
            </div>

            {/* ── Timer card ── */}
            <div
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                right: 10,
                background: 'rgba(255,255,255,0.88)',
                borderRadius: 12,
                padding: '12px 14px',
                boxShadow: '0 4px 16px rgba(0,0,0,.22)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: '#14181a' }}>
                Locked In
              </div>
              <div
                className='mono'
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  letterSpacing: '-.02em',
                  color: '#14181a',
                  lineHeight: 1,
                }}
              >
                {hh}
                <span style={{ opacity: 0.3 }}>:</span>
                {mm}
                <span style={{ opacity: 0.3 }}>:</span>
                {ss}
              </div>
              <div
                style={{ fontSize: 10, color: '#7a8480', textAlign: 'center' }}
              >
                {ENCOURAGEMENTS[encourageIdx]}
              </div>
            </div>

            {/* ── Pet + Feed buttons — sit just below the timer card ── */}
            <div
              style={{
                position: 'absolute',
                top: 118,
                left: 0,
                right: 0,
                display: 'flex',
                gap: 8,
                justifyContent: 'center',
                padding: '20px 20px',
              }}
            >
              {(['👋 Pet', '🍖 Feed'] as const).map((label) => (
                <button
                  key={label}
                  style={{
                    background: '#14181a',
                    color: '#fff',
                    border: 0,
                    borderRadius: 999,
                    padding: '7px 16px',
                    fontSize: 11,
                    fontWeight: 600,
                    cursor: 'default',
                    flex: 1,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* ── End Focus Session ── */}
            <div
              style={{ position: 'absolute', bottom: 12, left: 12, right: 12 }}
            >
              <button
                style={{
                  width: '100%',
                  background: 'transparent',
                  color: '#fff',
                  border: '1.5px solid rgba(255,255,255,0.75)',
                  borderRadius: 999,
                  padding: '9px',
                  fontSize: 11.5,
                  fontWeight: 600,
                  cursor: 'default',
                }}
              >
                End Focus Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
