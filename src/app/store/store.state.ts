import { Todo } from "../todo/todo.model";

export default interface State {

    nextTodoId: number;
    todos: Todo[];
    openedTodo: Todo;
}