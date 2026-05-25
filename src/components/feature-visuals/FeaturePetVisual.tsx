import { CatSprite } from '../../CatSprite';
import { DECOR, Decor } from './Decor';

export function FeaturePetVisual() {
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

      {/* Coin badge ties the "earn coins to decorate" idea */}
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
