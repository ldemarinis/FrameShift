import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { typography, radii } from '../tokens';

const { width } = Dimensions.get('window');

const STEPS = [
  {
    gradient: ['#FF4F35', '#FFB830'] as [string, string],
    emoji: '📸',
    headline: 'The best moments,\njust for you and yours.',
    sub: 'A private feed for the people who matter most.',
  },
  {
    gradient: ['#0093E0', '#00AB90'] as [string, string],
    emoji: '🔒',
    headline: 'Completely private.\nAlways.',
    sub: 'No algorithms. No strangers. Just your crew.',
  },
  {
    gradient: ['#F5A800', '#FF4F35'] as [string, string],
    emoji: '✨',
    headline: 'Drop a moment\nanytime, anywhere.',
    sub: 'Photos, videos, milestones — all in one warm place.',
  },
];

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [step, setStep] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const transition = (next: number) => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start();
    setStep(next);
  };

  const s = STEPS[step];

  return (
    <LinearGradient colors={s.gradient} start={{ x: 0.1, y: 0 }} end={{ x: 0.9, y: 1 }} style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        {/* Emoji hero */}
        <Text style={styles.emoji}>{s.emoji}</Text>

        {/* Copy */}
        <View style={styles.copyBlock}>
          <Text style={styles.headline}>{s.headline}</Text>
          <Text style={styles.sub}>{s.sub}</Text>
        </View>

        {/* Dots */}
        <View style={styles.dots}>
          {STEPS.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === step ? styles.dotActive : styles.dotInactive]}
            />
          ))}
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          {step < STEPS.length - 1 ? (
            <TouchableOpacity style={styles.btn} onPress={() => transition(step + 1)} activeOpacity={0.85}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btn} onPress={onComplete} activeOpacity={0.85}>
              <Text style={styles.btnText}>Get started 🎉</Text>
            </TouchableOpacity>
          )}
          {step > 0 && (
            <TouchableOpacity onPress={() => transition(step - 1)} style={styles.backBtn}>
              <Text style={styles.backBtnText}>Back</Text>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 60,
    paddingBottom: 48,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emoji: {
    fontSize: 80,
    lineHeight: 96,
    textAlign: 'center',
  },
  copyBlock: {
    alignItems: 'center',
    gap: 14,
  },
  headline: {
    fontFamily: typography.familyDisplay,
    fontWeight: typography.weightExtrabold,
    fontSize: 32,
    color: 'white',
    lineHeight: 38,
    textAlign: 'center',
  },
  sub: {
    fontFamily: typography.familyBody,
    fontSize: 16,
    color: 'rgba(255,255,255,0.82)',
    lineHeight: 26,
    textAlign: 'center',
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  dot: {
    height: 6,
    borderRadius: radii.full,
  },
  dotActive: {
    width: 20,
    backgroundColor: 'white',
  },
  dotInactive: {
    width: 6,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  actions: {
    width: '100%',
    gap: 10,
    alignItems: 'center',
  },
  btn: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: radii.full,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 6,
  },
  btnText: {
    fontFamily: typography.familyBodyBold,
    fontWeight: typography.weightBold,
    fontSize: 16,
    color: '#FF4F35',
  },
  backBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  backBtnText: {
    fontFamily: typography.familyBody,
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
});
