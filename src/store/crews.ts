import { create } from 'zustand';

export interface Crew {
  id: string;
  name: string;
  emoji: string;
  memberCount: number;
  lastActivity: string;
  memberInitials: string[];
}

interface CrewsState {
  crews: Crew[];
  activeCrew: Crew | null;
  isLoading: boolean;
  setCrews: (crews: Crew[]) => void;
  setActiveCrew: (crew: Crew | null) => void;
  setLoading: (v: boolean) => void;
}

export const useCrewsStore = create<CrewsState>((set) => ({
  crews: [],
  activeCrew: null,
  isLoading: false,
  setCrews: (crews) => set({ crews }),
  setActiveCrew: (activeCrew) => set({ activeCrew }),
  setLoading: (isLoading) => set({ isLoading }),
}));
