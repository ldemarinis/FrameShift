const VARIANTS = {
  primary: {
    background: 'linear-gradient(135deg,#FF4F35,#FF6A4A)',
    color: 'white',
    border: 'none',
    boxShadow: '0 4px 14px rgba(255,79,53,0.35)',
  },
  ghost: {
    background: 'transparent',
    color: '#FF4F35',
    border: '1.5px solid #FF4F35',
  },
  subtle: {
    background: '#FFF0ED',
    color: '#E63820',
    border: 'none',
  },
  secondary: {
    background: '#0093E0',
    color: 'white',
    border: 'none',
  },
  white: {
    background: 'white',
    color: '#FF4F35',
    border: 'none',
    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
  },
};

export default function Button({ children, variant = 'primary', small = false, onClick, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        borderRadius: 9999,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: small ? 13 : 15,
        padding: small ? '9px 18px' : '13px 26px',
        transition: 'all 0.18s',
        ...VARIANTS[variant],
        ...style,
      }}
    >
      {children}
    </button>
  );
}
