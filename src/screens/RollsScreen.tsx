import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
import { colors, semantic, typography, shadows, radii } from '../tokens';

type GradientName = 'hero' | 'ocean' | 'golden' | 'teal';

interface Roll {
  name: string;
  emoji: string;
  members: number;
  last: string;
  gradient: [string, string];
  initials: { letter: string; grad: GradientName }[];
}

const ROLLS: Roll[] = [
  {
    name: 'The Rivera Fam',
    emoji: '👨‍👩‍👧‍👦',
    members: 6,
    last: 'Mom posted a new moment',
    gradient: ['#FF4F35', '#FFB830'],
    initials: [
      { letter: 'J', grad: 'hero' },
      { letter: 'M', grad: 'ocean' },
      { letter: 'D', grad: 'golden' },
      { letter: 'S', grad: 'teal' },
    ],
  },
  {
    name: 'Beach Squad 🏖️',
    emoji: '🏄',
    members: 4,
    last: 'Riley shared 3 photos',
    gradient: ['#2BACF5', '#00AB90'],
    initials: [
      { letter: 'J', grad: 'hero' },
      { letter: 'R', grad: 'teal' },
      { letter: 'K', grad: 'ocean' },
      { letter: 'T', grad: 'golden' },
    ],
  },
  {
    name: 'College Days',
    emoji: '🎓',
    members: 8,
    last: 'Alex dropped a moment',
    gradient: ['#FF4F35', '#FFD246'],
    initials: [
      { letter: 'J', grad: 'hero' },
      { letter: 'A', grad: 'ocean' },
      { letter: 'P', grad: 'golden' },
      { letter: 'L', grad: 'teal' },
    ],
  },
];

export function RollsScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <Text style={styles.title}>My Rolls</Text>
        <Button size="sm" onPress={() => {}}>+ New Roll</Button>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
        {ROLLS.map((roll, i) => (
          <TouchableOpacity key={i} activeOpacity={0.85} style={styles.rollCard}>
            <LinearGradient colors={roll.gradient} style={styles.rollIcon}>
              <Text style={styles.rollEmoji}>{roll.emoji}</Text>
            </LinearGradient>

            <View style={styles.rollInfo}>
              <Text style={styles.rollName}>{roll.name}</Text>
              <Text style={styles.rollLast}>{roll.last}</Text>
            </View>

            <View style={styles.rollMeta}>
              <View style={styles.facepile}>
                {roll.initials.map((m, j) => (
                  <View key={j} style={[styles.faceWrap, j > 0 && styles.faceOverlap]}>
                    <Avatar initial={m.letter} size={26} gradient={m.grad} />
                  </View>
                ))}
                {roll.members > 4 && (
                  <View style={[styles.faceWrap, styles.faceOverlap, styles.faceMore]}>
                    <Text style={styles.faceMoreText}>+{roll.members - 4}</Text>
                  </View>
                )}
              </View>
              <Text style={styles.memberCount}>{roll.members} members</Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semantic.bgBase,
  },
  header: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral200,
    paddingHorizontal: 18,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: typography.familyDisplay,
    fontWeight: typography.weightExtrabold,
    fontSize: 20,
    color: colors.neutral900,
  },
  list: {
    padding: 14,
    gap: 12,
  },
  rollCard: {
    backgroundColor: 'white',
    borderRadius: radii.xl,
    padding: 16,
    gap: 12,
    ...shadows.sm,
  },
  rollIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  rollEmoji: {
    fontSize: 22,
  },
  rollInfo: {
    gap: 2,
  },
  rollName: {
    fontFamily: typography.familyBodyBold,
    fontWeight: typography.weightBold,
    fontSize: 16,
    color: colors.neutral900,
  },
  rollLast: {
    fontFamily: typography.familyBody,
    fontSize: 12,
    color: colors.neutral400,
  },
  rollMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  facepile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  faceWrap: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
  },
  faceOverlap: {
    marginLeft: -8,
  },
  faceMore: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.neutral200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  faceMoreText: {
    fontFamily: typography.familyBodyBold,
    fontWeight: typography.weightBold,
    fontSize: 9,
    color: colors.neutral600,
  },
  memberCount: {
    fontFamily: typography.familyBody,
    fontSize: 11,
    color: colors.neutral400,
  },
});
