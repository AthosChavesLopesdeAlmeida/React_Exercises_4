import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useNotesStore = create(
  persist(
    (set) => ({
      notes: [],
      activeNote: null,
      addNote: () => set((state) => ({
        notes: [...state.notes, {
          id: Date.now(),
          title: 'New note',
          content: '',
          favorite: false
        }]
      })),
      removeNote: (id) => set((state) => ({
        notes: state.notes.filter((note) => note.id !== id)
      })),
      editNote: (id, changes) => set((state) => ({
        notes: state.notes.map((note) => 
          note.id === id ? { ...note, ...changes } : note
        )
      })),
      toggleFavorite: (id) => set((state) => ({
        notes: state.notes.map((note) => 
          note.id === id ? {...note, favorite: !note.favorite} : note
        )
      })),
      setActiveNote: (id) => set({activeNote: id})
    }),
    {
      name: 'notes_store'
    }
  )
)

export const useUIStore = create(
  persist(
    (set) => ({
      theme: 'light',
      sidebarOpen: false,
      toggleSidebar: () => set((state) => ({sidebarOpen: !state.sidebarOpen})),
      toggleTheme: () => set((state) => ({
        theme: state.theme === 'light' ? 'dark' : 'light'
      }))
    }),
    {
      name: 'ui_store'
    }
  )
)

export const useSearchStore = create((set) => ({
  query: '',
  setQuery: (text) => set({ query: text })
}))