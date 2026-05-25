import { Ico } from '../icons';
import { PhoneMock } from '../PhoneMock';
import { APK_URL } from '../constants';

export function Hero() {
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
