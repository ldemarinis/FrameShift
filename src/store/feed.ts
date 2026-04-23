import { create } from 'zustand';

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userInitial: string;
  caption: string;
  mediaUrl: string | null;
  likes: number;
  commentCount: number;
  createdAt: string;
  likedByMe: boolean;
}

interface FeedState {
  posts: Post[];
  isLoading: boolean;
  hasMore: boolean;
  setPosts: (posts: Post[]) => void;
  appendPosts: (posts: Post[]) => void;
  toggleLike: (postId: string) => void;
  setLoading: (v: boolean) => void;
  setHasMore: (v: boolean) => void;
}

export const useFeedStore = create<FeedState>((set) => ({
  posts: [],
  isLoading: false,
  hasMore: true,
  setPosts: (posts) => set({ posts }),
  appendPosts: (newPosts) => set((s) => ({ posts: [...s.posts, ...newPosts] })),
  toggleLike: (postId) =>
    set((s) => ({
      posts: s.posts.map((p) =>
        p.id === postId
          ? { ...p, likedByMe: !p.likedByMe, likes: p.likedByMe ? p.likes - 1 : p.likes + 1 }
          : p
      ),
    })),
  setLoading: (isLoading) => set({ isLoading }),
  setHasMore: (hasMore) => set({ hasMore }),
}));
