import { FeatureBlockVisual } from './feature-visuals/FeatureBlockVisual';
import { FeatureNFCVisual } from './feature-visuals/FeatureNFCVisual';
import { FeaturePetVisual } from './feature-visuals/FeaturePetVisual';

const ITEMS = [
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

export function Features() {
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
        {ITEMS.map((f) => (
          <article className='feat-card' key={f.tag}>
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
