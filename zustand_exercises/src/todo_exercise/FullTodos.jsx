import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoHeader from './TodoHeader'

const FullTodos = () => {
  return (
    <div>
      <TodoHeader/>
      <TodoList/>
      <TodoForm/>
    </div>
  )
}

export default FullTodos