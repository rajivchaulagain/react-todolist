import { todoActions } from "../actions/actions";

const newTodo = (title: string) => {
    return { id: Date.now(), key: Date.now(), title }
}
export const TodoReducer = (todos: any = [], action: any) => {
    switch (action.type) {
        case todoActions.ADD_TO_DO:
            return [...todos, newTodo(action.payload.title)]
        case todoActions.RESET:
            return []
        default:
            break;
    }
}