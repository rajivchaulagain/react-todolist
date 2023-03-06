import { useContext } from "react"

import { TodoContext } from "../context/TodoListProvider"

export const useTodos = () => {
    return useContext(TodoContext)
}