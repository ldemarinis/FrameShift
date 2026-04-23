import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
import { colors, semantic, typography, shadows, radii } from '../tokens';

type GradientName = 'hero' | 'ocean' | 'golden' | 'teal';

interface Crew {
  name: string;
  emoji: string;
  members: number;
  last: string;
  gradient: [string, string];
  initials: { letter: string; grad: GradientName }[];
}

const CREWS: Crew[] = [
  {
    name: 'The Rivera Fam',
    emoji: '👨‍👩‍👧‍👦',
    members: 6,
    last: 'Mom posted a new memory',
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
    name: 'College Crew',
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

export function CrewScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <Text style={styles.title}>My Crews</Text>
        <Button size="sm" onPress={() => {}}>+ New</Button>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
        {CREWS.map((crew, i) => (
          <TouchableOpacity key={i} activeOpacity={0.85} style={styles.crewCard}>
            {/* Icon */}
            <LinearGradient colors={crew.gradient} style={styles.crewIcon}>
              <Text style={styles.crewEmoji}>{crew.emoji}</Text>
            </LinearGradient>

            {/* Info */}
            <View style={styles.crewInfo}>
              <Text style={styles.crewName}>{crew.name}</Text>
              <Text style={styles.crewLast}>{crew.last}</Text>
            </View>

            {/* Facepile + member count */}
            <View style={styles.crewMeta}>
              <View style={styles.facepile}>
                {crew.initials.map((m, j) => (
                  <View key={j} style={[styles.faceWrap, j > 0 && styles.faceOverlap]}>
                    <Avatar initial={m.letter} size={26} gradient={m.grad} />
                  </View>
                ))}
                {crew.members > 4 && (
                  <View style={[styles.faceWrap, styles.faceOverlap, styles.faceMore]}>
                    <Text style={styles.faceMoreText}>+{crew.members - 4}</Text>
                  </View>
                )}
              </View>
              <Text style={styles.memberCount}>{crew.members} members</Text>
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
  crewCard: {
    backgroundColor: 'white',
    borderRadius: radii.xl,
    padding: 16,
    gap: 12,
    ...shadows.sm,
  },
  crewIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  crewEmoji: {
    fontSize: 22,
  },
  crewInfo: {
    gap: 2,
  },
  crewName: {
    fontFamily: typography.familyBodyBold,
    fontWeight: typography.weightBold,
    fontSize: 16,
    color: colors.neutral900,
  },
  crewLast: {
    fontFamily: typography.familyBody,
    fontSize: 12,
    color: colors.neutral400,
  },
  crewMeta: {
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
