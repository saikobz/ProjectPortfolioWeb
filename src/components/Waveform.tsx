type WaveformProps = {
  bars?: number;
  className?: string;
};

// Signature motif: a row of equalizer bars. Idle animation lives in CSS
// (`.waveform__bar` / `@keyframes eq` in globals.css); amplitude scales with the
// inherited `--energy` var (0..1) that ScrollProgress writes to documentElement.
// Decorative only — always aria-hidden.
export function Waveform({ bars = 56, className = "" }: WaveformProps) {
  return (
    <div
      className={`waveform flex items-center justify-between gap-[2px] ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="waveform__bar h-full flex-1 rounded-full bg-current"
          style={{
            animationDelay: `${(i % 13) * 0.08}s`,
            animationDuration: `${1 + (i % 6) * 0.16}s`,
          }}
        />
      ))}
    </div>
  );
}
