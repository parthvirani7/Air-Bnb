import { create } from 'zustand';
import type { User, SearchFilters } from '../types';

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  searchFilters: SearchFilters;
  setUser: (user: User | null) => void;
  setSearchFilters: (filters: Partial<SearchFilters>) => void;
  logout: () => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  isAuthenticated: false,
  searchFilters: {
    location: '',
    checkIn: null,
    checkOut: null,
    guests: 1,
    priceRange: [0, 1000],
    propertyType: [],
    amenities: [],
  },
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setSearchFilters: (filters) =>
    set((state) => ({
      searchFilters: { ...state.searchFilters, ...filters },
    })),
  logout: () => set({ user: null, isAuthenticated: false }),
}));