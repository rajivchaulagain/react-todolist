import React from 'react'
import { useTodos } from '../../hooks/useTodos'

const TodoLists = ({todoLists}:any) => {
  const {todos} = useTodos()
  return (
    <div>
        <ul>
        {todos.map((item:any) => (
            <li key={item.id}>{item.title}</li>
        ))}
        </ul>
    </div>
  )
}

export default TodoLists