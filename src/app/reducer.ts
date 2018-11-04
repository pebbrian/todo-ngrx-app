import State from './state';
import { Todo } from './todo';
import { TodoActions, TodoActionTypes } from './actions';

const INITIAL_STATE: State = { todos: new Array<Todo>(), openedTodoId: null }

export function reducer(state: State = INITIAL_STATE, action: TodoActions) {

    switch( action.type ) {
        case TodoActionTypes.CREATE_TODO:
            if( action.payload.title === undefined || action.payload.title === '' ) {
                return state;
            }
            return { ...state, todos: [action.payload, ...state.todos], openedTodoId: 1 };
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
            return { ...state, openedTodoId: action.payload }
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