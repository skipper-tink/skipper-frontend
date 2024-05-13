import { create } from 'zustand';

export interface UserStore {
  name: string;
  setName: (name: string) => void;
}

const initialName = localStorage.getItem('name') || '';

export const useUserStore = create<UserStore>((set) => ({
  name: initialName,
  setName: (name: string) => {
    localStorage.setItem('name', name);
    set(() => ({ name }));
  },
}));
