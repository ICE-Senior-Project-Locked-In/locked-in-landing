import { useEffect, useState } from 'react';
import { Ico } from './icons';
import { PhoneMock } from './PhoneMock';
import { CatSprite } from './CatSprite';

const GITHUB_URL = 'https://github.com/ICE-Senior-Project-Locked-In';
const EMAIL = 'team@lock-in-app.com';
const WHITEPAPER_URL = '/lock-in-whitepaper.pdf';

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
          <a href='#download' className='btn btn-primary btn-sm ml-1.5'>
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
            <a href='#download' className='btn btn-primary'>
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

function FeaturePetVisual() {
  return (
    <div className='vis bg-[linear-gradient(160deg,#DFFBE3_0%,#B7EFC1_100%)]'>
      <svg viewBox='0 0 240 200' width='100%' height='100%' className='p-1.5'>
        <line
          x1='20'
          y1='160'
          x2='220'
          y2='160'
          stroke='#398B46'
          strokeWidth='1.5'
          strokeDasharray='3 3'
          opacity='.4'
        />
        <g
          stroke='#398B46'
          strokeWidth='2'
          fill='none'
          strokeLinecap='round'
          opacity='.6'
        >
          <path d='M70 170 q 20 12 38 0' />
          <path d='M150 170 q 20 12 38 0' />
          <polyline points='106,168 110,170 106,172' />
          <polyline points='186,168 190,170 186,172' />
        </g>
      </svg>
      <div className='absolute inset-0 flex items-center justify-around px-2'>
        <div className='text-center'>
          <CatSprite size={56} />
          <div className='text-[10px] font-bold text-[#398B46] -mt-1'>Lv 1</div>
        </div>
        <div className='text-center -translate-y-1.5'>
          <CatSprite size={86} />
          <div className='text-[10px] font-bold text-[#398B46] -mt-0.5'>
            Lv 5
          </div>
        </div>
        <div className='text-center -translate-y-3'>
          <CatSprite size={108} />
          <div className='text-[10px] font-bold text-[#398B46]'>Lv 12</div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const items = [
    {
      tag: 'Anchor',
      title: 'Hardware-locked focus.',
      body: 'Tap a physical NFC tag on your desk to start a session. Removing the phone from the anchor pauses your timer — your environment becomes the trigger.',
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
      title: 'Companion that evolves.',
      body: '1 XP per minute focused. Unlocks decorations and interact with your. Skip days and they get a little sad.',
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

const FEEDBACK_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSf-LockIn-feedback/viewform';

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
            story shapes the next build. Drop us a quick star — or tell us the
            whole thing in the form.
          </p>

          <div className='mt-9 bg-white rounded-[36px] py-6.5 px-7 border border-(--line) shadow-[0_30px_60px_-36px_rgba(20,40,26,.25)] flex flex-col gap-4.5'>
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
            <div className='flex gap-3 mt-1.5 flex-wrap'>
              <a
                href={value ? `${FEEDBACK_URL}?rating=${value}` : FEEDBACK_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary py-4 px-6 text-[15px]'
              >
                {value ? `Send ${value}-star feedback` : 'Open feedback form'}
                <Ico.arrowRight s={15} />
              </a>
              <a
                href={`mailto:${EMAIL}?subject=Feedback%20on%20Lock%20In`}
                className='btn btn-ghost py-4 px-4.5 text-[15px] text-(--ink-2)'
              >
                Email us instead
              </a>
            </div>
            <div className='text-[12.5px] text-(--ink-3) mt-0.5'>
              Responses go straight to our Google Sheet. No login, no tracking.
            </div>
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
              <b className='text-(--ink) font-semibold'>Dual-Process Theory</b>{' '}
              — the idea that the brain has two modes: a fast, automatic,
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
                href='#'
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
                <b>System 1 — Impulsive</b>
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
                <b>System 2 — Deliberative</b>
                <div className='desc'>
                  Slow, intentional. The version of you that planned the day. We
                  make it cheap to listen to.
                </div>
              </div>
            </div>

            <div className='flex justify-between items-center mt-1.5 px-1.5'>
              <div className='text-xs text-(--ink-3)'>
                Result, after 30 days
              </div>
              <div className='flex gap-4.5 text-[13px]'>
                <span>
                  <b className='text-(--primary-500)'>+38%</b> focus time
                </span>
                <span>
                  <b className='text-(--primary-500)'>−61%</b> phone pickups
                </span>
              </div>
            </div>
          </div>
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
              <a href='#' className='btn btn-primary btn-sm'>
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

        <div className='wordmark'>LOCK·IN</div>

        <div className='foot-bot'>
          <div>© 2026 Lock In Studio · Crafted with care</div>
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
      <Footer />
    </>
  );
}
