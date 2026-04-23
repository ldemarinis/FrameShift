import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { radii, shadows, semantic } from '../tokens';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  elevated?: boolean;
}

export function Card({ children, style, padding = 16, elevated = false }: CardProps) {
  return (
    <View style={[
      styles.card,
      elevated ? styles.elevated : styles.base,
      { padding },
      style,
    ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: semantic.bgSurface,
    borderRadius: radii.lg,
    overflow: 'hidden',
  },
  base: {
    ...shadows.sm,
  },
  elevated: {
    ...shadows.lg,
  },
});
