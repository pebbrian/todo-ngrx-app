import { Todo } from "./todo";

export default interface State {

    todos: Todo[];
    openedTodoId: number;
}