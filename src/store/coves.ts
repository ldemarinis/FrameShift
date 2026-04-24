import { create } from 'zustand';

export interface Cove {
  id: string;
  name: string;
  emoji: string;
  memberCount: number;
  lastActivity: string;
  memberInitials: string[];
}

interface CovesState {
  coves: Cove[];
  activeCove: Cove | null;
  isLoading: boolean;
  setCoves: (coves: Cove[]) => void;
  setActiveCove: (cove: Cove | null) => void;
  setLoading: (v: boolean) => void;
}

export const useCovesStore = create<CovesState>((set) => ({
  coves: [],
  activeCove: null,
  isLoading: false,
  setCoves: (coves) => set({ coves }),
  setActiveCove: (activeCove) => set({ activeCove }),
  setLoading: (isLoading) => set({ isLoading }),
}));
