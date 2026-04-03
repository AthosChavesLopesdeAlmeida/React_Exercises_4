import { create } from 'zustand'

const useCounterStore = create((set) => ({
  counter: 0,
  addCounter: () => set((state) =>({
    counter: state.counter + 1
  })),
  decreaseCounter: () => set((state) => ({
    counter: state.counter - 1
  })),
  resetCounter: () => set({
    counter: 0
  })
}))

export { useCounterStore }