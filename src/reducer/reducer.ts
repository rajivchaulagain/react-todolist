import { todoActions } from "../actions/actions";
import { TodoList } from "../models/types/TodoList";

const newTodo = (title: string) => {
    return { id: Date.now(), key: Date.now(), title }
}
export const TodoReducer = (todos: TodoList[] = [], action: any) => {
    switch (action.type) {
        case todoActions.ADD_TO_DO:
            return [...todos, newTodo(action.payload.title)]
        case todoActions.RESET:
            return []
            case todoActions.DELETE_BY_ID:
            const fiteredTodos = todos.filter((todo:TodoList) => todo.id !== action.payload.id)
            return fiteredTodos
        default:
            break;
    }
}