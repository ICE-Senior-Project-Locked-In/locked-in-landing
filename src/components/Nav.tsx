import { useEffect, useState } from 'react';
import { Ico } from '../icons';
import { APK_URL, GITHUB_URL } from '../constants';
import { BrandMark } from './BrandMark';

export function Nav() {
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
