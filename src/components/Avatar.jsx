const GRADIENTS = {
  hero:   'linear-gradient(135deg,#FF4F35,#FFB830)',
  ocean:  'linear-gradient(135deg,#2BACF5,#00AB90)',
  sunset: 'linear-gradient(135deg,#FF4F35,#FFD246)',
  golden: '#F5A800',
  teal:   '#00AB90',
};

export default function Avatar({ initial, size = 36, gradient = 'hero', style }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: GRADIENTS[gradient] ?? gradient,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size * 0.4,
      color: 'white',
      flexShrink: 0,
      ...style,
    }}>
      {initial}
    </div>
  );
}
