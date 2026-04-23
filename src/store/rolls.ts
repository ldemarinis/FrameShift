import { create } from 'zustand';

export interface Roll {
  id: string;
  name: string;
  emoji: string;
  memberCount: number;
  lastActivity: string;
  memberInitials: string[];
}

interface RollsState {
  rolls: Roll[];
  activeRoll: Roll | null;
  isLoading: boolean;
  setRolls: (rolls: Roll[]) => void;
  setActiveRoll: (roll: Roll | null) => void;
  setLoading: (v: boolean) => void;
}

export const useRollsStore = create<RollsState>((set) => ({
  rolls: [],
  activeRoll: null,
  isLoading: false,
  setRolls: (rolls) => set({ rolls }),
  setActiveRoll: (activeRoll) => set({ activeRoll }),
  setLoading: (isLoading) => set({ isLoading }),
}));
