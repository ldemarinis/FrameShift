import Avatar from '../components/Avatar';
import Button from '../components/Button';

const CREWS = [
  {
    name: 'The Rivera Fam', members: 6, last: 'Mom posted a new memory',
    color: 'hero', icon: '👨‍👩‍👧‍👦', bg: 'linear-gradient(135deg,#FF4F35,#FFB830)',
    initials: ['J', 'M', 'D', 'S', 'R', 'A'],
  },
  {
    name: 'Beach Squad 🏖️', members: 4, last: 'Riley shared 3 photos',
    color: 'ocean', icon: '🏄', bg: 'linear-gradient(135deg,#2BACF5,#00AB90)',
    initials: ['J', 'R', 'K', 'T'],
  },
  {
    name: 'College Crew', members: 8, last: 'Alex dropped a moment',
    color: 'sunset', icon: '🎓', bg: 'linear-gradient(135deg,#FF4F35,#FFD246)',
    initials: ['J', 'A', 'P', 'L', 'M', 'S', 'K', 'R'],
  },
];

const AVATAR_GRADIENTS = ['hero', 'ocean', 'golden', 'teal'];

export default function CrewScreen() {
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: 'var(--bg-base)' }}>
      {/* Top bar */}
      <div style={{
        background: 'white', borderBottom: '1px solid var(--neutral-200)',
        padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--neutral-900)' }}>
          My Crews
        </div>
        <Button small>+ New</Button>
      </div>

      <div style={{ padding: 14 }}>
        {CREWS.map((crew, i) => (
          <div key={i} style={{
            background: 'white', borderRadius: 20, padding: 16,
            marginBottom: 12, boxShadow: '0 2px 12px rgba(255,79,53,0.07)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, background: crew.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
              }}>
                {crew.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16, color: 'var(--neutral-900)' }}>
                  {crew.name}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--neutral-400)', marginTop: 2 }}>
                  {crew.last}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex' }}>
                {crew.initials.slice(0, 4).map((init, j) => (
                  <Avatar
                    key={j}
                    initial={init}
                    size={28}
                    gradient={AVATAR_GRADIENTS[j % 4]}
                    style={{ marginLeft: j > 0 ? -8 : 0, border: '2px solid white' }}
                  />
                ))}
                {crew.members > 4 && (
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', background: 'var(--neutral-200)',
                    border: '2px solid white', marginLeft: -8, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 10, fontWeight: 700, color: 'var(--neutral-600)',
                  }}>
                    +{crew.members - 4}
                  </div>
                )}
              </div>
              <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--neutral-400)' }}>
                {crew.members} members
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
