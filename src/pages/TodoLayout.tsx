import React, { useState } from 'react'

import TodoHeader from '../components/TodoHeader/TodoHeader'
import TodoLists from '../components/TodoLists/TodoLists'

import { TodoList } from '../models/types/TodoList'

const TodoLayout = () => {
  
  const [todoLists , setTodoLists] = useState<TodoList[]>([]);

  return (
    <div className='todo-layout'>
        <TodoHeader setTodoLists={setTodoLists} />
        <TodoLists todoLists={todoLists} />
    </div>
  )
}

export default TodoLayout