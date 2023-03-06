import { todoActions } from "../actions/actions";
import { TodoList } from "../models/types/TodoList";

const newTodo = (title: string) => {
    return { id: Date.now(), key: Date.now(), title }
}
export const TodoReducer = (todos: TodoList[] = [], action: any) => {
    switch (action.type) {
        case todoActions.ADD_TO_DO:
            const newTodos = [...todos, newTodo(action.payload.title)]
            localStorage.setItem('todos' , JSON.stringify(newTodos))
            return newTodos
        case todoActions.RESET:
            localStorage.setItem('todos' , JSON.stringify([]))
            return []
            case todoActions.DELETE_BY_ID:
            const fiteredTodos = todos.filter((todo:TodoList) => todo.id !== action.payload.id)
            localStorage.setItem('todos' , JSON.stringify(fiteredTodos))
            return fiteredTodos
        default:
            break;
    }
}