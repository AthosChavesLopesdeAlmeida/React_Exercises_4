import { useTodoStore } from './todoStore'

const TodoHeader = () => {
  const pending = useTodoStore((state) =>
    state.todos.filter((todo) => !todo.done).length
  )

  return (
    <div>
      <h4>Pending tasks: {pending}</h4>
    </div>
  )
}

export default TodoHeader