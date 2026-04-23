import { useState } from 'react';
import Avatar from '../components/Avatar';

const FEED_POSTS = [
  { id: 1, user: 'Jamie',  initial: 'J', gradient: 'hero',   time: 'Today · 3:42 PM',    caption: 'Beach trip finally happened! The water was perfect 🌊', color1: '#FF8C70', color2: '#FFD246', likes: 12, comments: 3 },
  { id: 2, user: 'Mom',    initial: 'M', gradient: 'ocean',  time: 'Yesterday · 11:10 AM', caption: 'Sunday pancake breakfast tradition continues 🥞',         color1: '#63C6FF', color2: '#4DD9C0', likes: 18, comments: 7 },
  { id: 3, user: 'Sam',    initial: 'S', gradient: 'golden', time: '2 days ago',           caption: 'First steps!! I cannot believe this is happening 😭❤️',    color1: '#FFD246', color2: '#FFB830', likes: 41, comments: 14 },
  { id: 4, user: 'Riley',  initial: 'R', gradient: 'teal',   time: '3 days ago',           caption: 'Sunset from the cabin. We needed this trip.',               color1: '#1DC4A8', color2: '#2BACF5', likes: 23, comments: 5 },
];

const STORY_PEOPLE = [
  { initial: 'J', gradient: 'hero',   label: 'You' },
  { initial: 'M', gradient: 'ocean',  label: 'Mom' },
  { initial: 'S', gradient: 'golden', label: 'Sam' },
  { initial: 'R', gradient: 'teal',   label: 'Riley' },
  { initial: 'A', gradient: 'sunset', label: 'Alex' },
  { initial: 'D', gradient: 'hero',   label: 'Dad' },
];

function FeedPost({ post }) {
  const [liked, setLiked] = useState(false);
  return (
    <div style={{
      background: 'white', borderRadius: 20, overflow: 'hidden',
      boxShadow: '0 2px 12px rgba(255,79,53,0.08)', marginBottom: 14,
    }}>
      <div style={{
        height: 200,
        background: `linear-gradient(135deg,${post.color1},${post.color2})`,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
          background: 'linear-gradient(transparent,rgba(26,18,10,0.55))',
        }} />
      </div>
      <div style={{ padding: '12px 14px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 8 }}>
          <Avatar initial={post.initial} size={34} gradient={post.gradient} />
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--neutral-800)' }}>{post.user}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--neutral-400)' }}>{post.time}</div>
          </div>
          <div style={{ marginLeft: 'auto', fontSize: 18, cursor: 'pointer', color: 'var(--neutral-400)' }}>···</div>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--neutral-700)', lineHeight: 1.5, marginBottom: 10 }}>
          {post.caption}
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <button
            onClick={() => setLiked(l => !l)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', display: 'flex',
              alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', fontWeight: 600,
              fontSize: 13, color: liked ? '#FF4F35' : 'var(--neutral-400)',
              transition: 'color 0.15s', padding: 0,
            }}
          >
            {liked ? '♥' : '♡'} {post.likes + (liked ? 1 : 0)}
          </button>
          <button style={{
            background: 'none', border: 'none', cursor: 'pointer', display: 'flex',
            alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', fontWeight: 600,
            fontSize: 13, color: 'var(--neutral-400)', padding: 0,
          }}>
            💬 {post.comments}
          </button>
          <button style={{
            background: 'none', border: 'none', cursor: 'pointer', marginLeft: 'auto',
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13,
            color: 'var(--neutral-400)', padding: 0,
          }}>
            ↗ Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeedScreen() {
  return (
    <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Top bar */}
      <div style={{
        background: 'white', borderBottom: '1px solid var(--neutral-200)',
        padding: '14px 18px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexShrink: 0,
      }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22,
          background: 'linear-gradient(135deg,#FF4F35,#FFB830)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          FrameShift
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%', background: 'var(--coral-50)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 17, position: 'relative',
          }}>
            🔔
            <div style={{
              position: 'absolute', top: 5, right: 5, width: 8, height: 8,
              background: '#FF4F35', borderRadius: '50%', border: '1.5px solid white',
            }} />
          </div>
          <Avatar initial="J" size={36} gradient="hero" />
        </div>
      </div>

      {/* Stories row */}
      <div style={{
        background: 'white', borderBottom: '1px solid var(--neutral-100)',
        padding: '12px 16px', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto' }}>
          {STORY_PEOPLE.map((person, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flexShrink: 0 }}>
              <div style={{ padding: 2, borderRadius: '50%', background: 'linear-gradient(135deg,#FF4F35,#FFB830)' }}>
                <Avatar initial={person.initial} size={48} gradient={person.gradient} style={{ border: '2px solid white' }} />
              </div>
              <div style={{ fontSize: 10, color: 'var(--neutral-500)', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                {person.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feed posts */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 14px 0' }}>
        {FEED_POSTS.map(post => <FeedPost key={post.id} post={post} />)}
      </div>
    </div>
  );
}
