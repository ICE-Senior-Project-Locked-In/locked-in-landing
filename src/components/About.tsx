import { Ico } from '../icons';
import { WHITEPAPER_URL } from '../constants';

export function About() {
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
