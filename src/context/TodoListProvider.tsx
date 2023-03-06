

import React, { createContext, useReducer } from 'react'
import { todoActions } from '../actions/actions'

import { TodoReducer } from '../reducer/reducer'

export const TodoContext:any = createContext([]);

const TodoListProvider = (props:any) => {

  const [todos , dispatch] = useReducer(TodoReducer , []);

  const addTodo = (title:string):void => {
    dispatch({type : todoActions.ADD_TO_DO , payload : {title}})
  }
  const deleteById = (id:number):void => {
    dispatch({type : todoActions.DELETE_BY_ID , payload : {id}})
  }
  const deleteAll = ():void => {
    dispatch({type : todoActions.RESET})
  }

  return (
    <TodoContext.Provider value={{todos , addTodo , deleteAll , deleteById}}>{props.children}</TodoContext.Provider>
  )
}

export default TodoListProvider