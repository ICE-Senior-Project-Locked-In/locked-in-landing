/** Reusable form atoms for the feedback long-form.
 *  Match the design tokens (--primary-100, --line, --ink-2/3) used elsewhere
 *  in the landing page so they sit naturally inside the feedback card. */

export function PillRadio({
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

export function PillCheckbox({
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

export function ScaleRow({
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

export function FieldLabel({
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
