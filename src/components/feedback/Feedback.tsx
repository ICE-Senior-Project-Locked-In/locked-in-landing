import { useState, type FormEvent } from 'react';
import { Ico } from '../../icons';
import { CatSprite } from '../../CatSprite';
import { EMAIL } from '../../constants';
import {
  BUGS_OPTIONS,
  COMPARISON_OPTIONS,
  ENTRY,
  FEATURES_OPTIONS,
  HELPED_OPTIONS,
  KEEP_USING_OPTIONS,
  RECOMMEND_OPTIONS,
} from './constants';
import { submitToGoogleForms } from './submit';
import {
  FieldLabel,
  PillCheckbox,
  PillRadio,
  ScaleRow,
} from './form-inputs';
import { StarRow } from './StarRow';

const RATING_LABELS = [
  '',
  'Not for me',
  'Needs work',
  "It's okay",
  'Pretty good',
  "I'm locked in 🌱",
];

export function Feedback() {
  // Quick rating (always visible)
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const shown = hover ?? value;

  // Long-form flow
  const [showLongForm, setShowLongForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Per-question state
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

  // Dynamic visible question numbering. The conditional Q6 (bug description)
  // is only shown when bugs is non-empty and not "No"; subsequent questions
  // shift up by one when it's hidden so users never see a numbering gap.
  const showBugDesc = !!bugs && bugs !== BUGS_OPTIONS[0];
  const bugDescNum = showBugDesc ? 6 : null;
  const afterBugDescStart = showBugDesc ? 7 : 6;

  async function handleSubmit(e: FormEvent) {
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
    } catch {
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
              <SubmittedConfirmation />
            ) : (
              <>
                <QuickRatingHeader shown={shown} labels={RATING_LABELS} />
                <StarRow
                  value={value}
                  hover={hover}
                  onHover={setHover}
                  onPick={setValue}
                />

                {!showLongForm && (
                  <ShortFormActions onExpand={() => setShowLongForm(true)} />
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

function QuickRatingHeader({
  shown,
  labels,
}: {
  shown: number;
  labels: string[];
}) {
  return (
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
  );
}

function ShortFormActions({ onExpand }: { onExpand: () => void }) {
  return (
    <>
      <div className='flex gap-3 mt-1.5 flex-wrap items-center'>
        <button
          type='button'
          onClick={onExpand}
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
        Responses go straight to our Google Sheet. No login, no tracking.
      </div>
    </>
  );
}

function SubmittedConfirmation() {
  return (
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
        We read every response. It genuinely shapes what we build next.
      </p>
    </div>
  );
}
