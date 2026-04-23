import { useState } from 'react';
import OnboardingScreen from './screens/OnboardingScreen';
import FeedScreen from './screens/FeedScreen';
import ProfileScreen from './screens/ProfileScreen';
import CrewScreen from './screens/CrewScreen';

const NAV_TABS = [
  { id: 'feed',    label: 'Feed',  icon: '🏠' },
  { id: 'crew',    label: 'Crew',  icon: '👥' },
  { id: 'profile', label: 'Me',    icon: '👤' },
];

function PhoneShell({ children }) {
  return (
    <div style={{
      width: 390, height: 844,
      background: 'var(--bg-base)',
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 10px #1a1a1a, 0 0 0 12px #2a2a2a',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* iOS status bar */}
      <div style={{
        height: 44,
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        flexShrink: 0,
        zIndex: 10,
      }}>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--neutral-900)' }}>9:41</span>
        <span style={{ fontSize: 13, color: 'var(--neutral-900)', display: 'flex', gap: 5, alignItems: 'center' }}>▲▲▲ WiFi 🔋</span>
      </div>
      {children}
    </div>
  );
}

function BottomNav({ tab, setTab }) {
  return (
    <div style={{
      height: 80,
      background: 'rgba(255,251,245,0.92)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--neutral-200)',
      boxShadow: '0 -2px 16px rgba(255,79,53,0.08)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      paddingTop: 10,
      flexShrink: 0,
      zIndex: 20,
    }}>
      {/* Feed */}
      <NavItem id="feed" label="Feed" icon="🏠" active={tab === 'feed'} onPress={setTab} />

      {/* Crew */}
      <NavItem id="crew" label="Crew" icon="👥" active={tab === 'crew'} onPress={setTab} />

      {/* FAB — Drop */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          width: 54, height: 54, borderRadius: '50%',
          background: 'linear-gradient(135deg,#FF4F35,#FFB830)',
          boxShadow: '0 4px 16px rgba(255,79,53,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 26, color: 'white', marginTop: -28,
          border: '3px solid var(--bg-base)', cursor: 'pointer',
          transition: 'transform 0.18s cubic-bezier(0.34,1.56,0.64,1)',
        }}>
          +
        </div>
        <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--neutral-400)', marginTop: 7 }}>Drop</div>
      </div>

      {/* Me */}
      <NavItem id="profile" label="Me" icon="👤" active={tab === 'profile'} onPress={setTab} />
    </div>
  );
}

function NavItem({ id, label, icon, active, onPress }) {
  return (
    <div
      onClick={() => onPress(id)}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, flex: 1, cursor: 'pointer', paddingTop: 4 }}
    >
      <div style={{ fontSize: 22, lineHeight: 1, transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1)', transform: active ? 'scale(1.15)' : 'scale(1)' }}>
        {icon}
      </div>
      <div style={{ fontSize: 10, fontWeight: 600, color: active ? 'var(--coral-500)' : 'var(--neutral-400)', transition: 'color 0.15s' }}>
        {label}
      </div>
    </div>
  );
}

export default function AppPrototype() {
  const [screen, setScreen] = useState('onboarding');
  const [tab, setTab] = useState('feed');

  const renderScreen = () => {
    if (screen === 'onboarding') return <OnboardingScreen onDone={() => setScreen('app')} />;
    switch (tab) {
      case 'feed':    return <FeedScreen />;
      case 'crew':    return <CrewScreen />;
      case 'profile': return <ProfileScreen />;
      default:        return <FeedScreen />;
    }
  };

  return (
    <PhoneShell>
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {renderScreen()}
      </div>
      {screen === 'app' && <BottomNav tab={tab} setTab={setTab} />}
    </PhoneShell>
  );
}
