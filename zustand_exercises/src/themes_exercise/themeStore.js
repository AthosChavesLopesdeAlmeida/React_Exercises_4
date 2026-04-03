import { create } from 'zustand'

export const useUIStore = create((set) => ({
  modalOpen: false,
  toggleModal: () => set((state) => ({modalOpen: !state.modalOpen}))
}))

export const useThemeStore = create((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light'
  }))
}))