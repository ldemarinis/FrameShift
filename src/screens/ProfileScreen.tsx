import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
import { colors, semantic, typography, shadows, radii } from '../tokens';

const STATS = [
  { value: '47',  label: 'Moments' },
  { value: '3',   label: 'Coves' },
  { value: '284', label: 'Reactions' },
];

const PHOTO_GRADIENTS: [string, string][] = [
  ['#FF8C70', '#FFD246'],
  ['#63C6FF', '#4DD9C0'],
  ['#FFD246', '#FFB830'],
  ['#1DC4A8', '#2BACF5'],
  ['#FF6A4A', '#FF8C70'],
  ['#4DD9C0', '#63C6FF'],
];

export function ProfileScreen() {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero gradient */}
      <LinearGradient
        colors={['#FF4F35', '#FFB830']}
        style={[styles.heroGradient, { paddingTop: insets.top + 14 }]}
      >
        <Text style={styles.screenTitle}>My Profile</Text>
      </LinearGradient>

      {/* Profile content */}
      <View style={styles.content}>
        {/* Avatar + name — overlaps gradient */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarRing}>
            <Avatar initial="J" size={84} gradient="hero" />
          </View>
          <Text style={styles.name}>Jamie Rivera</Text>
          <Text style={styles.handle}>@jamie · Member since 2024</Text>
          <Button size="sm" variant="ghost" onPress={() => {}}>Edit Profile</Button>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          {STATS.map(s => (
            <View key={s.label} style={styles.statCard}>
              <Text style={styles.statValue}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* Photo grid */}
        <Text style={styles.sectionTitle}>My Moments</Text>
        <View style={styles.grid}>
          {PHOTO_GRADIENTS.map((g, i) => (
            <LinearGradient key={i} colors={g} style={styles.gridItem} />
          ))}
        </View>

        <View style={{ height: 32 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semantic.bgBase,
  },
  heroGradient: {
    paddingHorizontal: 20,
    paddingBottom: 64,
    alignItems: 'center',
  },
  screenTitle: {
    fontFamily: typography.familyBodyBold,
    fontWeight: typography.weightBold,
    fontSize: 17,
    color: 'white',
  },
  content: {
    paddingHorizontal: 20,
    marginTop: -48,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 20,
    gap: 6,
  },
  avatarRing: {
    padding: 3,
    borderRadius: 48,
    backgroundColor: 'white',
    ...shadows.md,
    marginBottom: 6,
  },
  name: {
    fontFamily: typography.familyDisplay,
    fontWeight: typography.weightExtrabold,
    fontSize: 24,
    color: colors.neutral900,
  },
  handle: {
    fontFamily: typography.familyBody,
    fontSize: 14,
    color: colors.neutral500,
    marginBottom: 6,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: radii.lg,
    padding: 14,
    alignItems: 'center',
    ...shadows.xs,
  },
  statValue: {
    fontFamily: typography.familyDisplay,
    fontWeight: typography.weightExtrabold,
    fontSize: 24,
    color: colors.coral500,
  },
  statLabel: {
    fontFamily: typography.familyBody,
    fontSize: 12,
    color: colors.neutral500,
    marginTop: 2,
  },
  sectionTitle: {
    fontFamily: typography.familyDisplay,
    fontWeight: typography.weightBold,
    fontSize: 18,
    color: colors.neutral800,
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  gridItem: {
    width: '31.5%',
    aspectRatio: 1,
    borderRadius: radii.md,
  },
});
