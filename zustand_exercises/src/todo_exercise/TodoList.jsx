import { useTodoStore } from './todoStore'

const TodoList = () => {
  const removeTodo = useTodoStore((state) => state.removeTodo)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const todos = useTodoStore((state) => state.todos)

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <p>{todo.text}</p>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
          <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList