import React from 'react';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

interface LogoMarkProps {
  size?: number;
  white?: boolean;
}

// Three stacked portrait frames:
// - Top: small, left-aligned, 35% opacity
// - Center: slightly wider, shifted right, full opacity (dominant)
// - Bottom: small, left-aligned, 35% opacity
// The horizontal rightward shift of the center frame = "FrameShift"
export function LogoMark({ size = 46, white = false }: LogoMarkProps) {
  const scale = size / 46;
  const w = 46;
  const h = 58;

  if (white) {
    return (
      <Svg width={w * scale} height={h * scale} viewBox={`0 0 ${w} ${h}`} fill="none">
        {/* Top frame — left-aligned */}
        <Rect x="2" y="3" width="22" height="14" rx="4" fill="white" opacity="0.35" />
        {/* Center frame — shifted right, wider, dominant */}
        <Rect x="12" y="19" width="28" height="20" rx="5" fill="white" />
        {/* Bottom frame — left-aligned */}
        <Rect x="2" y="41" width="22" height="14" rx="4" fill="white" opacity="0.35" />
      </Svg>
    );
  }

  return (
    <Svg width={w * scale} height={h * scale} viewBox={`0 0 ${w} ${h}`} fill="none">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor="#FF4F35" />
          <Stop offset="100%" stopColor="#FFB830" />
        </LinearGradient>
      </Defs>
      {/* Top frame — left-aligned */}
      <Rect x="2" y="3" width="22" height="14" rx="4" fill="url(#grad)" opacity="0.35" />
      {/* Center frame — shifted right, wider, dominant */}
      <Rect x="12" y="19" width="28" height="20" rx="5" fill="url(#grad)" />
      {/* Bottom frame — left-aligned */}
      <Rect x="2" y="41" width="22" height="14" rx="4" fill="url(#grad)" opacity="0.35" />
    </Svg>
  );
}
