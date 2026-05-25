import { Ico } from '../icons';
import { APK_URL, EMAIL, GITHUB_URL, WHITEPAPER_URL } from '../constants';
import { BrandMark } from './BrandMark';

export function Footer() {
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
