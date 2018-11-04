import State from './store.state';
import { Todo } from '../todo/todo.model';
import { TodoActions, TodoActionTypes } from './store.actions';

const INITIAL_STATE: State = { todos: new Array<Todo>(), openedTodo: null, nextTodoId: 0 };

export function reducer(state: State = INITIAL_STATE, action: TodoActions) {

    switch( action.type ) {
        case TodoActionTypes.CREATE_TODO:
            if( action.payload.title === undefined || action.payload.title === '' ) {
                return state;
            }
            return { ...state, todos: [{ ...action.payload, id: state.nextTodoId++ }, ...state.todos], nextTodoId: state.nextTodoId };
        case TodoActionTypes.SWITCH_TODO_COMPLETED:
            for( let k = 0; k < state.todos.length; k++ ) {
                if( state.todos[k].id === action.payload ) {
                    state.todos[k].completed = !state.todos[k].completed;
                    if( state.todos[k].completed ) {
                        let todo = state.todos[k];
                        state.todos.splice(k, 1);
                        state.todos.push(todo);
                    }
                    break;
                }
            }
            return { ...state };
        case TodoActionTypes.SWITCH_TODO_OPENED:
            if( action.payload === undefined || action.payload === null || typeof action.payload != 'number' ) {
                return state;
            }
            for( let k = 0; k < state.todos.length; k++ ) {
                if( state.todos[k].id === action.payload ) {
                    return { ...state, openedTodo: state.todos[k] }
                }
            }
            return state;
        case TodoActionTypes.DELETE_TODO:
            if( action.payload === undefined || action.payload === null || typeof action.payload != 'number' ) {
                return state;
            }
            for( let k = 0; k < state.todos.length; k++ ) {
                if( state.todos[k].id === action.payload ) {
                    state.todos.splice(k, 1);
                }
            }
            return { ...state, state: state.todos }
        default:
            return state;
    }
}