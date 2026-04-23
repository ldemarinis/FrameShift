import { create } from 'zustand';

interface User {
  id: string;
  displayName: string;
  handle: string;
  avatarInitial: string;
}

interface AuthState {
  user: User | null;
  isOnboarded: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setOnboarded: (v: boolean) => void;
  setLoading: (v: boolean) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isOnboarded: false,
  isLoading: true,
  setUser: (user) => set({ user }),
  setOnboarded: (isOnboarded) => set({ isOnboarded }),
  setLoading: (isLoading) => set({ isLoading }),
  signOut: () => set({ user: null, isOnboarded: false }),
}));
