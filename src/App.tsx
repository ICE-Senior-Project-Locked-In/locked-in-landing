import { useEffect, useState } from 'react';
import { Ico } from './icons';
import { PhoneMock } from './PhoneMock';
import { CatSprite } from './CatSprite';

const GITHUB_URL = 'https://github.com/ICE-Senior-Project-Locked-In';
const EMAIL = 'team@lock-in-app.com';
const WHITEPAPER_URL = '/lock-in-whitepaper.pdf';
const APK_URL =
  'https://github.com/ICE-Senior-Project-Locked-In/locked-in-frontend/releases/latest/download/lock-in.apk';

function BrandMark({ variant = 'color' }: { variant?: 'color' | 'white' }) {
  const src =
    variant === 'white' ? '/lock-in-logo-white.png' : '/lock-in-logo.png';
  return (
    <span
      className={
        'brand-mark' + (variant === 'white' ? ' brand-mark-white' : '')
      }
    >
      <img src={src} alt='Lock In' width={34} height={34} />
    </span>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className='nav-inner'>
        <div className='brand'>
          <BrandMark />
          <span className='text-lg tracking-[-0.015em]'>Lock In</span>
        </div>
        <div className='nav-links'>
          <a href='#features'>Features</a>
          <a href='#feedback'>Feedback</a>
          <a href='#about'>About</a>
          <a
            href={GITHUB_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1.5'
          >
            <Ico.github s={15} /> GitHub
          </a>
          <a href={APK_URL} className='btn btn-primary btn-sm ml-1.5'>
            <Ico.download s={15} /> Download
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className='hero wrap'>
      <div className='hero-grid'>
        <div>
          <span className='eyebrow'>
            <span className='dot'></span>
            Public beta · Android APK
          </span>
          <h1 className='mt-6'>
            Find your focus.
            <br />
            Raise your <span className='accent'>companion</span>
          </h1>
          <p className='lede mt-6.5'>
            Lock In gamifies productivity. Tap an NFC tag to begin a
            hard-blocked focus session, and watch a virtual pet you actually
            care about grow as you get things done.
          </p>
          <div className='hero-cta'>
            <a href={APK_URL} className='btn btn-primary'>
              <Ico.download s={18} /> Download for Android (APK)
            </a>
            <a href='#features' className='btn btn-ghost'>
              See how it works <Ico.arrowRight s={15} />
            </a>
          </div>
          <div className='hero-meta'>
            <div>
              <b>1 XP / min</b>focused, banked into your pet
            </div>
            <div>
              <b>Beta-approved</b>usability tested with real users
            </div>
            <div>
              <b>OS-level</b>hard block, not a soft nag
            </div>
          </div>
        </div>
        <PhoneMock />
      </div>
    </section>
  );
}

function FeatureNFCVisual() {
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

function FeatureBlockVisual() {
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

/** Crop a single frame out of /decorations.png via CSS background.
 *  Spritesheet is 254x292. We scale the whole sheet by `scale` and offset
 *  so only the requested frame shows. `image-rendering: pixelated` keeps it crisp. */
function Decor({
  frame,
  scale = 2,
  className = '',
  style = {},
}: {
  frame: { x: number; y: number; w: number; h: number };
  scale?: number;
  className?: string;
  style?: React.CSSProperties;
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

// Frame coordinates from decorations.json
const DECOR = {
  bed: { x: 1, y: 70, w: 110, h: 82 },
  carpet: { x: 1, y: 1, w: 173, h: 67 },
  lamp: { x: 159, y: 220, w: 42, h: 36 }, // rotated in sheet — we render via background-position
  plantLarge: { x: 70, y: 219, w: 26, h: 61 },
  plantSmall: { x: 129, y: 253, w: 23, h: 23 },
  towerSquare: { x: 176, y: 1, w: 76, h: 105 },
  windowCurtain: { x: 1, y: 154, w: 67, h: 67 },
};

function FeaturePetVisual() {
  return (
    <div
      className='vis'
      style={{
        background:
          'linear-gradient(180deg, #F0DEBB 0%, #F0DEBB 58%, #C8A87C 58%, #AE9068 100%)',
      }}
    >
      {/* Floor seam */}
      <div className='absolute left-0 right-0 top-[58%] h-px bg-[#9A7850] opacity-40' />

      {/* Window with curtain on back wall */}
      <Decor
        frame={DECOR.windowCurtain}
        scale={1.4}
        style={{ left: '14%', top: '8%' }}
      />

      {/* Cat tower against back wall */}
      <Decor
        frame={DECOR.towerSquare}
        scale={1.3}
        style={{ right: '8%', top: '4%' }}
      />

      {/* Carpet on floor */}
      <Decor
        frame={DECOR.carpet}
        scale={1.05}
        style={{ left: '50%', bottom: '6%', transform: 'translateX(-50%)' }}
      />

      {/* Bed */}
      <Decor
        frame={DECOR.bed}
        scale={1}
        style={{ left: '6%', bottom: '14%' }}
      />

      {/* Plants */}
      <Decor
        frame={DECOR.plantLarge}
        scale={1.2}
        style={{ right: '4%', bottom: '12%' }}
      />

      {/* Cat in the middle, on the carpet */}
      <div
        className='absolute'
        style={{ left: '50%', bottom: '18%', transform: 'translateX(-50%)' }}
      >
        <CatSprite size={72} />
      </div>

      {/* Coin badge — ties the "earn coins to decorate" idea */}
      <div className='absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full border border-(--line) shadow-[0_4px_12px_rgba(0,0,0,.08)]'>
        <span className='w-4 h-4 rounded-full bg-[linear-gradient(135deg,#FFD66B,#E2A93A)] grid place-items-center text-[9px] font-bold text-[#5A3A0E]'>
          ¢
        </span>
        <span className='text-[11px] font-bold text-(--ink) tracking-[-0.01em]'>
          +24
        </span>
      </div>
    </div>
  );
}

function Features() {
  const items = [
    {
      tag: 'Anchor',
      title: 'Hardware-locked focus.',
      body: 'Tap a physical NFC tag on your desk to start a session. Removing the phone from the anchor pauses your timer. Your environment becomes the trigger.',
      visual: <FeatureNFCVisual />,
    },
    {
      tag: 'Defend',
      title: 'Native app blocking.',
      body: 'A real, OS-level Hard Block stops you from opening Instagram, TikTok or whatever your kryptonite is. Bypassing it ends the session and costs your pet XP.',
      visual: <FeatureBlockVisual />,
    },
    {
      tag: 'Grow',
      title: 'Decorate their room.',
      body: 'Every minute focused earns coins. Spend them on room decorations to build a space your companion loves. The longer you focus, the cozier their room gets.',
      visual: <FeaturePetVisual />,
    },
  ];
  return (
    <section className='section wrap' id='features'>
      <div className='flex justify-between items-end gap-8 flex-wrap'>
        <div className='max-w-155'>
          <div className='section-tag'>The how-to</div>
          <h2 className='mt-3.5'>Three loops, working together.</h2>
        </div>
        <p className='lede max-w-95 text-[16.5px]'>
          We borrow from behaviour design: a clear cue, a frictionful action,
          and a reward that compounds. Each piece reinforces the others.
        </p>
      </div>
      <div className='feat-grid'>
        {items.map((f, i) => (
          <article className='feat-card' key={i}>
            {f.visual}
            <span className='feat-tag'>{f.tag}</span>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLScSDHti6_06xaKQ5sTADS_VPMaX3mf2VoWTKUE2cIXR2TpxdQ/formResponse';

const FEEDBACK_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScSDHti6_06xaKQ5sTADS_VPMaX3mf2VoWTKUE2cIXR2TpxdQ/viewform';

const ENTRY = {
  rating: 'entry.961518426', // Q1
  features: 'entry.1105178304', // Q2
  easeOfUse: 'entry.1615614262', // Q3
  helped: 'entry.941563120', // Q4
  comparison: 'entry.1967238831', // Q5
  bugs: 'entry.972490983', // Q6
  bugDesc: 'entry.2022165908', // Q7
  keepUsing: 'entry.1957893757', // Q8
  recommend: 'entry.1049718538', // Q9
  improve: 'entry.1180994269', // Q10
  comments: 'entry.140385047', // Q11
};

const FEATURES_OPTIONS = [
  'Focus / Study timer',
  'Session history / Progress tracking',
  'Schedule / Notifications reminders',
  'Settings / Customization',
  'Other',
];
const HELPED_OPTIONS = [
  'Yes, it helped a lot',
  'Somewhat / a little improvement',
  'Not really',
  "I haven't used it enough to tell",
];
const COMPARISON_OPTIONS = [
  'Much better',
  'Slightly better',
  'About the same',
  'Worse',
];
const BUGS_OPTIONS = [
  'No, everything worked fine',
  'Yes, minor glitches',
  'Yes, major issues that blocked me',
];
const KEEP_USING_OPTIONS = [
  'Yes, definitely',
  'Probably, once more features land',
  'Not sure yet',
  'Probably not',
];
const RECOMMEND_OPTIONS = ['Yes, definitely', 'Maybe', 'Probably not'];

async function submitToGoogleForms(
  data: Record<string, string | string[]>,
): Promise<void> {
  const body = new URLSearchParams();
  for (const [key, val] of Object.entries(data)) {
    if (Array.isArray(val)) {
      val.forEach((v) => body.append(key, v));
    } else if (val) {
      body.append(key, val);
    }
  }
  await fetch(FORM_ACTION, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });
}

function PillRadio({
  options,
  value,
  onChange,
}: {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className='flex flex-wrap gap-2'>
      {options.map((opt) => {
        const on = value === opt;
        return (
          <button
            key={opt}
            type='button'
            onClick={() => onChange(opt)}
            className={`px-3.5 py-2 rounded-full border text-[13px] font-medium transition ${
              on
                ? 'bg-(--primary-100) text-[#0c2911] border-transparent'
                : 'bg-white text-(--ink-2) border-(--line) hover:border-(--primary-300) hover:text-(--ink)'
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function PillCheckbox({
  options,
  values,
  onChange,
}: {
  options: readonly string[];
  values: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (opt: string) =>
    onChange(
      values.includes(opt) ? values.filter((v) => v !== opt) : [...values, opt],
    );
  return (
    <div className='flex flex-wrap gap-2'>
      {options.map((opt) => {
        const on = values.includes(opt);
        return (
          <button
            key={opt}
            type='button'
            onClick={() => toggle(opt)}
            className={`px-3.5 py-2 rounded-full border text-[13px] font-medium transition flex items-center gap-1.5 ${
              on
                ? 'bg-(--primary-100) text-[#0c2911] border-transparent'
                : 'bg-white text-(--ink-2) border-(--line) hover:border-(--primary-300) hover:text-(--ink)'
            }`}
          >
            {on && <span aria-hidden>✓</span>}
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function ScaleRow({
  value,
  onChange,
  lowLabel,
  highLabel,
}: {
  value: number;
  onChange: (n: number) => void;
  lowLabel: string;
  highLabel: string;
}) {
  return (
    <div className='flex flex-col gap-1.5'>
      <div className='flex gap-2'>
        {[1, 2, 3, 4, 5].map((n) => {
          const on = value === n;
          return (
            <button
              key={n}
              type='button'
              onClick={() => onChange(n)}
              className={`flex-1 py-2.5 rounded-[14px] border text-[14px] font-bold transition ${
                on
                  ? 'bg-(--primary-100) text-[#0c2911] border-transparent shadow-[0_8px_18px_-12px_rgba(57,139,70,.55)]'
                  : 'bg-white text-(--ink-2) border-(--line) hover:border-(--primary-300)'
              }`}
            >
              {n}
            </button>
          );
        })}
      </div>
      <div className='flex justify-between text-[11.5px] text-(--ink-3)'>
        <span>1 · {lowLabel}</span>
        <span>5 · {highLabel}</span>
      </div>
    </div>
  );
}

function FieldLabel({
  num,
  text,
  required,
}: {
  num: number;
  text: string;
  required?: boolean;
}) {
  return (
    <div className='flex items-baseline gap-2 mb-2.5'>
      <span className='text-[11px] font-bold text-(--primary-500) tracking-[.06em]'>
        Q{num}
      </span>
      <label className='text-[14px] font-semibold text-(--ink) leading-snug'>
        {text}
        {required && <span className='text-(--primary-500) ml-1'>*</span>}
      </label>
    </div>
  );
}

function StarRow({
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

function Feedback() {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const labels = [
    '',
    'Not for me',
    'Needs work',
    "It's okay",
    'Pretty good',
    "I'm locked in 🌱",
  ];
  const shown = hover ?? value;

  // Long-form state
  const [showLongForm, setShowLongForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [features, setFeatures] = useState<string[]>([]);
  const [easeOfUse, setEaseOfUse] = useState(0);
  const [helped, setHelped] = useState('');
  const [comparison, setComparison] = useState('');
  const [bugs, setBugs] = useState('');
  const [bugDesc, setBugDesc] = useState('');
  const [keepUsing, setKeepUsing] = useState('');
  const [recommend, setRecommend] = useState('');
  const [improve, setImprove] = useState('');
  const [comments, setComments] = useState('');

  // Dynamic visible question numbering. Q6 (bug description) is only shown
  // when bugs is non-empty and not "No, everything worked fine"; subsequent
  // questions shift up by one when it's hidden so users never see a gap.
  const showBugDesc = !!bugs && bugs !== BUGS_OPTIONS[0];
  const bugDescNum = showBugDesc ? 6 : null;
  const afterBugDescStart = showBugDesc ? 7 : 6;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (
      !value ||
      features.length === 0 ||
      !easeOfUse ||
      !helped ||
      !comparison ||
      !bugs ||
      !keepUsing ||
      !recommend
    ) {
      setError('Please answer the required questions before submitting.');
      return;
    }

    setSubmitting(true);
    try {
      await submitToGoogleForms({
        [ENTRY.rating]: String(value),
        [ENTRY.features]: features,
        [ENTRY.easeOfUse]: String(easeOfUse),
        [ENTRY.helped]: helped,
        [ENTRY.comparison]: comparison,
        [ENTRY.bugs]: bugs,
        [ENTRY.bugDesc]: bugDesc,
        [ENTRY.keepUsing]: keepUsing,
        [ENTRY.recommend]: recommend,
        [ENTRY.improve]: improve,
        [ENTRY.comments]: comments,
      });
      setSubmitted(true);
    } catch (err) {
      setError(
        'Something went wrong. Please try again, or use the link below.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className='section wrap' id='feedback'>
      <div className='relative bg-[linear-gradient(150deg,#fff_0%,#F0FCEF_55%,#C5F3CD_100%)] border border-(--line) rounded-[72px] p-18 overflow-hidden'>
        <div className='absolute -right-5 -bottom-7.5 opacity-90 pointer-events-none'>
          <CatSprite size={200} />
        </div>

        <div className='relative max-w-155'>
          <div className='section-tag'>Your turn</div>
          <h2 className='mt-3.5'>Tried our app? Let us know what you think.</h2>
          <p className='lede mt-5.5'>
            We're a tiny team. Every rating, bug report, and weird edge-case
            story shapes the next build. Drop us a quick star, or tell us the
            whole thing in the form.
          </p>

          <div className='mt-9 bg-white rounded-[36px] py-6.5 px-7 border border-(--line) shadow-[0_30px_60px_-36px_rgba(20,40,26,.25)] flex flex-col gap-4.5'>
            {submitted ? (
              <div className='py-6 text-center flex flex-col items-center gap-3'>
                <div className='w-12 h-12 rounded-full bg-(--primary-100) grid place-items-center'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#0c2911'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='m5 12 5 5L20 7' />
                  </svg>
                </div>
                <div className='font-semibold text-[17px]'>
                  Thanks! Your feedback has been sent.
                </div>
                <p className='text-[14px] text-(--ink-2) max-w-[420px]'>
                  We read every response. It genuinely shapes what we build
                  next.
                </p>
              </div>
            ) : (
              <>
                <div className='flex justify-between items-center gap-4 flex-wrap'>
                  <div className='font-semibold text-[15px] tracking-[-0.005em]'>
                    Quick rating
                  </div>
                  <div
                    className={`text-[13.5px] font-semibold min-h-4.5 ${shown ? 'text-(--primary-500)' : 'text-(--ink-3)'}`}
                  >
                    {shown ? labels[shown] : 'Tap a star'}
                  </div>
                </div>
                <StarRow
                  value={value}
                  hover={hover}
                  onHover={setHover}
                  onPick={setValue}
                />

                {!showLongForm && (
                  <>
                    <div className='flex gap-3 mt-1.5 flex-wrap items-center'>
                      <button
                        type='button'
                        onClick={() => setShowLongForm(true)}
                        className='btn btn-primary py-4 px-6 text-[15px]'
                      >
                        Tell us more <Ico.arrowRight s={15} />
                      </button>
                      <a
                        href={`mailto:${EMAIL}?subject=Feedback%20on%20Lock%20In`}
                        className='btn btn-ghost py-4 px-4.5 text-[15px] text-(--ink-2)'
                      >
                        Email us instead
                      </a>
                    </div>
                    <div className='text-[12.5px] text-(--ink-3) mt-0.5'>
                      Responses go straight to our Google Sheet. No login, no
                      tracking.
                    </div>
                  </>
                )}

                {showLongForm && (
                  <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-6 mt-3 pt-5 border-t border-(--line)'
                  >
                    {/* Features used (Q2 in form) */}
                    <div>
                      <FieldLabel
                        num={1}
                        text='Which features did you use?'
                        required
                      />
                      <PillCheckbox
                        options={FEATURES_OPTIONS}
                        values={features}
                        onChange={setFeatures}
                      />
                    </div>

                    {/* Ease of use (Q3 in form) */}
                    <div>
                      <FieldLabel
                        num={2}
                        text='How easy was the app to use?'
                        required
                      />
                      <ScaleRow
                        value={easeOfUse}
                        onChange={setEaseOfUse}
                        lowLabel='Very difficult'
                        highLabel='Very easy'
                      />
                    </div>

                    {/* Helped (Q4 in form) */}
                    <div>
                      <FieldLabel
                        num={3}
                        text='Did Lock-In actually help you stay focused or be more productive?'
                        required
                      />
                      <PillRadio
                        options={HELPED_OPTIONS}
                        value={helped}
                        onChange={setHelped}
                      />
                    </div>

                    {/* Comparison (Q5 in form) */}
                    <div>
                      <FieldLabel
                        num={4}
                        text='Compared to your previous study/work method, Lock-In is…'
                        required
                      />
                      <PillRadio
                        options={COMPARISON_OPTIONS}
                        value={comparison}
                        onChange={setComparison}
                      />
                    </div>

                    {/* Bugs (Q6 in form) */}
                    <div>
                      <FieldLabel
                        num={5}
                        text='Did you encounter any bugs or issues?'
                        required
                      />
                      <PillRadio
                        options={BUGS_OPTIONS}
                        value={bugs}
                        onChange={setBugs}
                      />
                    </div>

                    {/* Bug description, conditional reveal (Q7 in form) */}
                    {showBugDesc && bugDescNum !== null && (
                      <div>
                        <FieldLabel
                          num={bugDescNum}
                          text='Please describe the bug or issue.'
                        />
                        <textarea
                          value={bugDesc}
                          onChange={(e) => setBugDesc(e.target.value)}
                          rows={3}
                          placeholder='What happened, and on what screen?'
                          className='border border-(--line) rounded-[12px] px-3.5 py-2.5 text-[14px] w-full font-sans bg-white resize-y focus:outline-none focus:border-(--primary-300) focus:ring-2 focus:ring-(--primary-50)'
                        />
                      </div>
                    )}

                    {/* Keep using (Q8 in form) */}
                    <div>
                      <FieldLabel
                        num={afterBugDescStart}
                        text='Would you keep using this app?'
                        required
                      />
                      <PillRadio
                        options={KEEP_USING_OPTIONS}
                        value={keepUsing}
                        onChange={setKeepUsing}
                      />
                    </div>

                    {/* Recommend (Q9 in form) */}
                    <div>
                      <FieldLabel
                        num={afterBugDescStart + 1}
                        text='Would you recommend Lock-In to a friend?'
                        required
                      />
                      <PillRadio
                        options={RECOMMEND_OPTIONS}
                        value={recommend}
                        onChange={setRecommend}
                      />
                    </div>

                    {/* Improve (Q10 in form) */}
                    <div>
                      <FieldLabel
                        num={afterBugDescStart + 2}
                        text='What feature do you most want improved or added?'
                      />
                      <input
                        type='text'
                        value={improve}
                        onChange={(e) => setImprove(e.target.value)}
                        placeholder='One short answer is fine.'
                        className='border border-(--line) rounded-[12px] px-3.5 py-2.5 text-[14px] w-full font-sans bg-white focus:outline-none focus:border-(--primary-300) focus:ring-2 focus:ring-(--primary-50)'
                      />
                    </div>

                    {/* Comments (Q11 in form) */}
                    <div>
                      <FieldLabel
                        num={afterBugDescStart + 3}
                        text='Any other comments, ideas, or feedback?'
                      />
                      <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        rows={3}
                        placeholder='Anything else you want us to know.'
                        className='border border-(--line) rounded-[12px] px-3.5 py-2.5 text-[14px] w-full font-sans bg-white resize-y focus:outline-none focus:border-(--primary-300) focus:ring-2 focus:ring-(--primary-50)'
                      />
                    </div>

                    {error && (
                      <div className='text-[13px] text-[#B33A3A] bg-[#FFE3E3] border border-[#F5C4C4] rounded-[12px] px-3.5 py-2.5'>
                        {error}
                      </div>
                    )}

                    <div className='flex gap-3 flex-wrap items-center pt-1'>
                      <button
                        type='submit'
                        disabled={submitting}
                        className='btn btn-primary py-4 px-6 text-[15px] disabled:opacity-60 disabled:cursor-not-allowed'
                      >
                        {submitting ? 'Sending…' : 'Send feedback'}
                        {!submitting && <Ico.arrowRight s={15} />}
                      </button>
                      <button
                        type='button'
                        onClick={() => setShowLongForm(false)}
                        className='text-[13px] text-(--ink-3) hover:text-(--ink) underline-offset-2 hover:underline ml-auto'
                      >
                        Collapse
                      </button>
                    </div>
                    <div className='text-[12.5px] text-(--ink-3)'>
                      Responses go straight to our Google Sheet. No login, no
                      tracking. <span className='text-(--primary-500)'>*</span>{' '}
                      = required.
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className='wrap pt-15 px-7 pb-30' id='about'>
      <div className='about'>
        <div className='about-grid'>
          <div>
            <div className='section-tag'>The mission</div>
            <h2 className='mt-3.5'>
              We're not fighting your willpower. We're routing around it.
            </h2>
            <p className='lede mt-5.5'>
              Lock In is built on{' '}
              <b className='text-(--ink) font-semibold'>Dual-Process Theory</b>:
              the idea that the brain has two modes. A fast, automatic,
              impulsive one, and a slow, deliberate, focused one.
            </p>
            <p className='text-(--ink-2) mt-4 text-base leading-[1.6]'>
              Most productivity apps ask System 2 to outmuscle System 1. That
              fails. Instead, we add a small, physical ritual (the NFC tap),
              then make impulsive opens cost something you care about (your
              companion). The friction is tiny; the leverage is enormous.
            </p>
            <div className='flex gap-3.5 mt-8 flex-wrap'>
              <a
                href={WHITEPAPER_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-dark btn-sm'
              >
                Read the whitepaper <Ico.arrowRight s={14} />
              </a>
              <a
                href='#team'
                className='btn btn-ghost btn-sm py-2.75 px-1 text-(--primary-500)'
              >
                Meet the team <Ico.arrowRight s={14} />
              </a>
            </div>
          </div>

          <div className='dual-process'>
            <div className='dp-row'>
              <div className='ico-32 bg-[#FFE3E3] text-[#B33A3A]'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M13 3 4 14h6l-1 7 9-11h-6l1-7Z' />
                </svg>
              </div>
              <div>
                <b>System 1: Impulsive</b>
                <div className='desc'>
                  Automatic. Reaches for the phone before you've decided to. We
                  don't try to fight this.
                </div>
              </div>
            </div>

            <div className='dp-bridge'>↓ NFC tap · physical ritual</div>

            <div className='dp-row s2'>
              <div className='ico-32 bg-(--ink) text-(--primary-100)'>
                <Ico.spark s={20} />
              </div>
              <div>
                <b>System 2: Deliberative</b>
                <div className='desc'>
                  Slow, intentional. The version of you that planned the day. We
                  make it cheap to listen to.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TEAM = [
  {
    name: 'Krittapop Manupornprapa',
    role: 'Backend Developer',
    github: 'https://github.com/TungDude',
    handle: 'TungDude',
  },
  {
    name: 'Worranittha Hukhan',
    role: 'Frontend Developer & DevOps',
    github: 'https://github.com/mildrrnt',
    handle: 'mildrrnt',
  },
  {
    name: 'Nithiwat Niramitranon',
    role: 'UX/UI Designer',
    github: 'https://github.com/Tniramit',
    handle: 'Tniramit',
  },
];

function Team() {
  return (
    <section className='wrap pt-16 pb-28' id='team'>
      <div className='flex flex-col gap-8 items-center text-center'>
        <div>
          <div className='section-tag'>The makers</div>
          <h2 className='mt-3.5'>Meet our team.</h2>
        </div>
        <div className='team-grid'>
          {TEAM.map((m) => (
            <a
              key={m.handle}
              href={m.github}
              target='_blank'
              rel='noopener noreferrer'
              className='team-card'
            >
              <div className='team-avatar'>
                <img
                  src={`https://github.com/${m.handle}.png?size=240`}
                  alt={m.name}
                  loading='lazy'
                />
              </div>
              <div className='team-name'>{m.name}</div>
              <div className='team-role'>{m.role}</div>
              <div className='team-handle'>
                <Ico.github s={14} /> @{m.handle}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id='download'>
      <div className='foot-inner'>
        <div className='foot-top'>
          <div>
            <div className='brand text-white'>
              <BrandMark variant='white' />
              <span className='text-lg'>Lock In</span>
            </div>
            <p className='text-[rgba(240,230,226,.7)] mt-4 text-sm max-w-[320px] leading-[1.55]'>
              A digital sanctuary for the part of you that wants to focus. Built
              in Bangkok. Open-source on the way.
            </p>
            <div className='foot-cta-card mt-6'>
              <h3>Ready to lock in?</h3>
              <p>Android</p>
              <a href={APK_URL} className='btn btn-primary btn-sm'>
                <Ico.download s={15} /> Download APK
              </a>
            </div>
          </div>
          <div className='foot-col'>
            <h4>Product</h4>
            <ul>
              <li>
                <a href='#features'>Features</a>
              </li>
            </ul>
          </div>
          <div className='foot-col'>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href='#feedback'>Share feedback</a>
              </li>
              <li>
                <a href='#about'>About us</a>
              </li>
              <li>
                <a
                  href={WHITEPAPER_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>
          <div className='foot-col'>
            <h4>Connect</h4>
            <ul>
              <li>
                <a
                  href={GITHUB_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2'
                >
                  <Ico.github s={15} /> GitHub
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='foot-bot'>
          <div>© 2026 Lock In Team · Crafted with care</div>
          <div className='flex gap-5.5'>
            <span>
              Sprites and Assets by{' '}
              <a
                href='https://toffeecraft.itch.io/'
                target='_blank'
                rel='noopener noreferrer'
                className='underline decoration-dotted underline-offset-2 hover:text-(--primary-100)'
              >
                ToffeeCraft
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Feedback />
      <About />
      <Team />
      <Footer />
    </>
  );
}
