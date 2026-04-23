import Avatar from '../components/Avatar';
import Button from '../components/Button';

const PHOTO_GRADIENTS = [
  '#FF8C70,#FFD246', '#63C6FF,#4DD9C0', '#FFD246,#FFB830',
  '#1DC4A8,#2BACF5', '#FF6A4A,#FF8C70', '#4DD9C0,#63C6FF',
];

const STATS = [
  ['47', 'Moments'],
  ['3', 'Crews'],
  ['284', 'Reactions'],
];

export default function ProfileScreen() {
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: 'var(--bg-base)' }}>
      {/* Header gradient */}
      <div style={{
        background: 'linear-gradient(160deg,#FF4F35,#FFB830)',
        padding: '48px 20px 70px', position: 'relative',
      }}>
        <div style={{
          fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 17,
          color: 'white', textAlign: 'center', marginBottom: 2,
        }}>
          My Profile
        </div>
      </div>

      <div style={{ padding: '0 20px', marginTop: -50 }}>
        {/* Avatar + name */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
          <div style={{
            padding: 3, borderRadius: '50%', background: 'white',
            boxShadow: '0 4px 20px rgba(255,79,53,0.25)', marginBottom: 10,
          }}>
            <Avatar initial="J" size={84} gradient="hero" />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--neutral-900)' }}>
            Jamie Rivera
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--neutral-500)', marginBottom: 12 }}>
            @jamie · Member since 2024
          </div>
          <Button small>Edit Profile</Button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
          {STATS.map(([n, label]) => (
            <div key={label} style={{
              background: 'white', borderRadius: 16, padding: '14px 10px',
              textAlign: 'center', boxShadow: '0 2px 8px rgba(255,79,53,0.06)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--coral-500)' }}>{n}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--neutral-500)', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Photo grid */}
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--neutral-800)', marginBottom: 10 }}>
          My Moments
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
          {PHOTO_GRADIENTS.map((c, i) => (
            <div key={i} style={{
              aspectRatio: '1', borderRadius: 12,
              background: `linear-gradient(135deg,${c})`,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
