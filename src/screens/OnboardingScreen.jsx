import { useState } from 'react';

const STEPS = [
  {
    bg: 'linear-gradient(160deg,#FF4F35 0%,#FFB830 100%)',
    emoji: '📸',
    headline: 'The best moments,\njust for you and yours.',
    sub: 'A private feed for the people who matter most.',
  },
  {
    bg: 'linear-gradient(160deg,#0093E0 0%,#00AB90 100%)',
    emoji: '🔒',
    headline: 'Completely private.\nAlways.',
    sub: 'No algorithms. No strangers. Just your crew.',
  },
  {
    bg: 'linear-gradient(160deg,#F5A800 0%,#FF4F35 100%)',
    emoji: '✨',
    headline: 'Drop a moment\nanytime, anywhere.',
    sub: 'Photos, videos, milestones — all in one warm place.',
  },
];

export default function OnboardingScreen({ onDone }) {
  const [step, setStep] = useState(0);
  const s = STEPS[step];

  return (
    <div style={{
      flex: 1, background: s.bg, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'space-between',
      padding: '48px 28px 36px', transition: 'background 0.5s ease',
    }}>
      <div style={{ fontSize: 80, lineHeight: 1, marginTop: 20 }}>{s.emoji}</div>

      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32,
          color: 'white', lineHeight: 1.2, whiteSpace: 'pre-line', marginBottom: 14,
        }}>
          {s.headline}
        </div>
        <div style={{
          fontFamily: 'var(--font-body)', fontSize: 16,
          color: 'rgba(255,255,255,0.82)', lineHeight: 1.6,
        }}>
          {s.sub}
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
          {STEPS.map((_, i) => (
            <div key={i} style={{
              width: i === step ? 20 : 6, height: 6, borderRadius: 9999,
              background: i === step ? 'white' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s',
            }} />
          ))}
        </div>

        {step < STEPS.length - 1 ? (
          <button onClick={() => setStep(s => s + 1)} style={{
            background: 'white', color: '#FF4F35', border: 'none', borderRadius: 9999,
            padding: '15px 0', fontSize: 16, fontWeight: 700, fontFamily: 'var(--font-body)',
            cursor: 'pointer', width: '100%', boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
          }}>
            Next
          </button>
        ) : (
          <button onClick={onDone} style={{
            background: 'white', color: '#FF4F35', border: 'none', borderRadius: 9999,
            padding: '15px 0', fontSize: 16, fontWeight: 700, fontFamily: 'var(--font-body)',
            cursor: 'pointer', width: '100%', boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
          }}>
            Get started 🎉
          </button>
        )}

        {step > 0 && (
          <button onClick={() => setStep(s => s - 1)} style={{
            background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.7)',
            fontSize: 14, fontFamily: 'var(--font-body)', cursor: 'pointer',
          }}>
            Back
          </button>
        )}
      </div>
    </div>
  );
}
