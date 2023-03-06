import React from 'react'
import { useTodos } from '../../hooks/useTodos'

const TodoLists = ({todoLists}:any) => {

  const {todos , deleteById} = useTodos();
  
  return (
    <div>
        <ul>
        {todos.map((item:any) => (
          <>
            <li key={item.id}>{item.title}</li>
            <button onClick={() => deleteById(item.id)}>X</button>
          </>
        ))}
        {todos.length === 0 && <h3 style={{textAlign : 'center'}}>No todo's yet !!!!!</h3>}
        </ul>
    </div>
  )
}

export default TodoLists