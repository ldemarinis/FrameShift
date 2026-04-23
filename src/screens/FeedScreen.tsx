import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar } from '../components/Avatar';
import { colors, semantic, typography, shadows, radii } from '../tokens';

const { width } = Dimensions.get('window');

type GradientName = 'hero' | 'ocean' | 'golden' | 'teal';

const STORIES: { initial: string; name: string; gradient: GradientName }[] = [
  { initial: 'J', name: 'You',   gradient: 'hero' },
  { initial: 'M', name: 'Mom',   gradient: 'ocean' },
  { initial: 'S', name: 'Sam',   gradient: 'golden' },
  { initial: 'R', name: 'Riley', gradient: 'teal' },
  { initial: 'A', name: 'Alex',  gradient: 'hero' },
  { initial: 'D', name: 'Dad',   gradient: 'ocean' },
];

interface Post {
  id: number;
  user: string;
  initial: string;
  gradient: GradientName;
  time: string;
  caption: string;
  photoGradient: [string, string];
  likes: number;
  comments: number;
}

const FEED_POSTS: Post[] = [
  {
    id: 1, user: 'Jamie', initial: 'J', gradient: 'hero',
    time: 'Today · 3:42 PM',
    caption: 'Beach trip finally happened! The water was perfect 🌊',
    photoGradient: ['#FF8C70', '#FFD246'], likes: 12, comments: 3,
  },
  {
    id: 2, user: 'Mom', initial: 'M', gradient: 'ocean',
    time: 'Yesterday · 11:10 AM',
    caption: 'Sunday pancake breakfast tradition continues 🥞',
    photoGradient: ['#63C6FF', '#4DD9C0'], likes: 18, comments: 7,
  },
  {
    id: 3, user: 'Sam', initial: 'S', gradient: 'golden',
    time: '2 days ago',
    caption: 'First steps!! I cannot believe this is happening 😭❤️',
    photoGradient: ['#FFD246', '#FFB830'], likes: 41, comments: 14,
  },
  {
    id: 4, user: 'Riley', initial: 'R', gradient: 'teal',
    time: '3 days ago',
    caption: 'Sunset from the cabin. We needed this trip.',
    photoGradient: ['#1DC4A8', '#2BACF5'], likes: 23, comments: 5,
  },
];

function FeedPost({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.postCard}>
      {/* Photo */}
      <LinearGradient colors={post.photoGradient} style={styles.postPhoto}>
        <LinearGradient
          colors={['transparent', 'rgba(26,18,10,0.55)']}
          style={StyleSheet.absoluteFill}
        />
      </LinearGradient>
      {/* Content */}
      <View style={styles.postContent}>
        <View style={styles.postHeader}>
          <Avatar initial={post.initial} size={34} gradient={post.gradient} />
          <View style={styles.postMeta}>
            <Text style={styles.postUser}>{post.user}</Text>
            <Text style={styles.postTime}>{post.time}</Text>
          </View>
          <Text style={styles.postMenu}>•••</Text>
        </View>
        <Text style={styles.postCaption}>{post.caption}</Text>
        <View style={styles.postActions}>
          <TouchableOpacity
            onPress={() => setLiked(l => !l)}
            style={styles.actionBtn}
            activeOpacity={0.7}
          >
            <Text style={[styles.actionText, liked && styles.actionTextLiked]}>
              {liked ? '♥' : '♡'} {post.likes + (liked ? 1 : 0)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} activeOpacity={0.7}>
            <Text style={styles.actionText}>💬 {post.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, { marginLeft: 'auto' }]} activeOpacity={0.7}>
            <Text style={styles.actionText}>↗ Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export function FeedScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <Text style={styles.wordmark}>FrameShift</Text>
        <View style={styles.headerRight}>
          <View style={styles.notifBtn}>
            <Text style={{ fontSize: 17 }}>🔔</Text>
            <View style={styles.notifDot} />
          </View>
          <Avatar initial="J" size={36} gradient="hero" ring />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {/* Stories */}
        <View style={styles.storiesSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.storiesContent}>
            {STORIES.map((s, i) => (
              <View key={i} style={styles.storyItem}>
                <Avatar initial={s.initial} size={52} gradient={s.gradient} ring />
                <Text style={styles.storyName}>{s.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Feed */}
        <View style={styles.feed}>
          {FEED_POSTS.map(p => <FeedPost key={p.id} post={p} />)}
          <View style={{ height: 24 }} />
        </View>
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
  wordmark: {
    fontFamily: typography.familyDisplay,
    fontWeight: typography.weightExtrabold,
    fontSize: 22,
    color: colors.coral500,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  notifBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.coral50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifDot: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.coral500,
    borderWidth: 1.5,
    borderColor: 'white',
  },
  scroll: {
    flex: 1,
  },
  storiesSection: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral100,
    paddingVertical: 12,
  },
  storiesContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  storyItem: {
    alignItems: 'center',
    gap: 4,
  },
  storyName: {
    fontFamily: typography.familyBodyMed,
    fontWeight: typography.weightMedium,
    fontSize: 10,
    color: colors.neutral500,
  },
  feed: {
    padding: 14,
    gap: 14,
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: radii.xl,
    overflow: 'hidden',
    ...shadows.sm,
  },
  postPhoto: {
    height: 200,
  },
  postContent: {
    padding: 12,
    paddingBottom: 14,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginBottom: 8,
  },
  postMeta: {
    flex: 1,
  },
  postUser: {
    fontFamily: typography.familyBodySemi,
    fontWeight: typography.weightSemibold,
    fontSize: 13,
    color: colors.neutral800,
  },
  postTime: {
    fontFamily: typography.familyBody,
    fontSize: 10,
    color: colors.neutral400,
    marginTop: 1,
  },
  postMenu: {
    fontSize: 18,
    color: colors.neutral400,
  },
  postCaption: {
    fontFamily: typography.familyBody,
    fontSize: 14,
    color: colors.neutral700,
    lineHeight: 21,
    marginBottom: 10,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  actionBtn: {
    paddingVertical: 2,
  },
  actionText: {
    fontFamily: typography.familyBodySemi,
    fontWeight: typography.weightSemibold,
    fontSize: 13,
    color: colors.neutral400,
  },
  actionTextLiked: {
    color: colors.coral500,
  },
});
