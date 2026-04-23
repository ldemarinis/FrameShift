import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, semantic, shadows, radii, typography, gradients } from '../tokens';

type ButtonVariant = 'primary' | 'ghost' | 'subtle' | 'secondary' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

const SIZE_STYLES: Record<ButtonSize, { paddingHorizontal: number; paddingVertical: number; fontSize: number }> = {
  sm: { paddingHorizontal: 16, paddingVertical: 9,  fontSize: typography.sm },
  md: { paddingHorizontal: 22, paddingVertical: 12, fontSize: typography.base },
  lg: { paddingHorizontal: 32, paddingVertical: 16, fontSize: typography.md },
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled,
  loading,
  onPress,
  style,
  textStyle,
  fullWidth,
}: ButtonProps) {
  const sizeStyle = SIZE_STYLES[size];
  const isDisabled = disabled || loading;

  const containerStyle: ViewStyle = {
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: sizeStyle.paddingHorizontal,
    paddingVertical: sizeStyle.paddingVertical,
    ...(fullWidth ? { alignSelf: 'stretch' } : { alignSelf: 'flex-start' }),
    opacity: isDisabled ? 0.5 : 1,
  };

  if (variant === 'primary') {
    return (
      <TouchableOpacity onPress={onPress} disabled={isDisabled} activeOpacity={0.85} style={[style]}>
        <LinearGradient
          colors={gradients.hero}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[containerStyle, shadows.button]}
        >
          {loading
            ? <ActivityIndicator color="white" size="small" />
            : <Text style={[styles.text, styles.textInverse, { fontSize: sizeStyle.fontSize }, textStyle]}>{children}</Text>
          }
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  const variantStyles: Record<Exclude<ButtonVariant, 'primary'>, { container: ViewStyle; text: TextStyle }> = {
    ghost: {
      container: { borderWidth: 1.5, borderColor: semantic.primary, backgroundColor: 'transparent' },
      text: { color: semantic.primary },
    },
    subtle: {
      container: { backgroundColor: semantic.primarySubtle },
      text: { color: colors.coral600 },
    },
    secondary: {
      container: { backgroundColor: semantic.secondary, ...shadows.button },
      text: { color: 'white' },
    },
    danger: {
      container: { backgroundColor: colors.error, ...shadows.button },
      text: { color: 'white' },
    },
  };

  const vs = variantStyles[variant as Exclude<ButtonVariant, 'primary'>];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      style={[containerStyle, vs.container, style]}
    >
      {loading
        ? <ActivityIndicator color={vs.text.color as string} size="small" />
        : <Text style={[styles.text, { fontSize: sizeStyle.fontSize }, vs.text, textStyle]}>{children}</Text>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: typography.familyBodySemi,
    fontWeight: typography.weightSemibold,
  },
  textInverse: {
    color: 'white',
  },
});
