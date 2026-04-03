import { create } from 'zustand'

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, {id: Date.now(), text, done: false}]
  })),
  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id)
  })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? {...todo, done: !todo.done} : todo
    )
  }))
}))

export { useTodoStore }