import { useState } from 'react'
import { useTodoStore } from './todoStore'

const TodoForm = () => {
  const [text, setText] = useState('')
  const addTodo = useTodoStore((state) => state.addTodo)

  const submit = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" placeholder='Text here: ' value={text} onChange={(e) => setText(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default TodoForm