import create from 'zustand';

interface authState {
    token: string | null;
    setAuth: (token: string) => void;
    clearAuth: () => void;
  }

  export const useAuthStore = create<authState>((set) => ({
    token: null,
    setAuth: (token) => set({ token }),
    clearAuth: () => set({ token: null }),
  }));