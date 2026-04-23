import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradients, colors, typography } from '../tokens';

type GradientName = 'hero' | 'ocean' | 'sunset' | 'golden' | 'teal';

interface AvatarProps {
  initial: string;
  size?: number;
  gradient?: GradientName;
  style?: ViewStyle;
  ring?: boolean;
}

const GRADIENTS: Record<GradientName, [string, string]> = {
  hero:   gradients.hero,
  ocean:  gradients.ocean,
  sunset: [gradients.sunset[0], gradients.sunset[2]],
  golden: gradients.golden,
  teal:   [colors.teal400, colors.teal500],
};

export function Avatar({ initial, size = 36, gradient = 'hero', style, ring = false }: AvatarProps) {
  const fontSize = Math.round(size * 0.4);
  const content = (
    <LinearGradient
      colors={GRADIENTS[gradient]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.base, { width: size, height: size, borderRadius: size / 2 }, style]}
    >
      <Text style={[styles.initial, { fontSize }]}>{initial}</Text>
    </LinearGradient>
  );

  if (ring) {
    return (
      <LinearGradient
        colors={gradients.hero}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ borderRadius: (size + 6) / 2, padding: 2 }}
      >
        <View style={{ borderRadius: size / 2 + 1, padding: 1.5, backgroundColor: 'white' }}>
          {content}
        </View>
      </LinearGradient>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: {
    color: 'white',
    fontFamily: typography.familyDisplay,
    fontWeight: typography.weightBold,
  },
});
