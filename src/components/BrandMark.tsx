type Variant = 'color' | 'white';

export function BrandMark({ variant = 'color' }: { variant?: Variant }) {
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
