import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, semantic, radii, typography } from '../tokens';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'neutral';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  dot?: boolean;
  style?: ViewStyle;
}

const VARIANT_STYLES: Record<BadgeVariant, { bg: string; text: string }> = {
  primary: { bg: semantic.primaryMuted,      text: colors.coral600 },
  success: { bg: colors.successSubtle,       text: colors.success },
  warning: { bg: colors.golden50,            text: colors.golden700 },
  error:   { bg: colors.errorSubtle,         text: colors.error },
  neutral: { bg: colors.neutral100,          text: colors.neutral600 },
};

export function Badge({ label, variant = 'primary', dot = false, style }: BadgeProps) {
  const vs = VARIANT_STYLES[variant];
  return (
    <View style={[styles.badge, { backgroundColor: vs.bg }, style]}>
      {dot && <View style={[styles.dot, { backgroundColor: vs.text }]} />}
      <Text style={[styles.label, { color: vs.text }]}>{label.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.sm,
    alignSelf: 'flex-start',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 9999,
  },
  label: {
    fontFamily: typography.familyBodySemi,
    fontSize: typography.xs,
    fontWeight: typography.weightSemibold,
    letterSpacing: 0.6,
  },
});
