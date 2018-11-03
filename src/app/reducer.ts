import State from './state';
import { Todo } from './todo';
import { CREATE_TODO, SWITCH_TODO_COMPLETED } from './actions';

const INITIAL_STATE: State = { todos: new Array<Todo>(), openedTodo: null }

export function reducer(state: State = INITIAL_STATE, action) {

    switch( action.type ) {
        case CREATE_TODO:
            if( action.payload.title === undefined || action.payload.title === '' ) {
                return state;
            }
            return { ...state, todos: [action.payload, ...state.todos] };
        case SWITCH_TODO_COMPLETED:
            for( let k = 0; k < state.todos.length; k++ ) {
                if( state.todos[k].id === action.payload.id ) {
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
        default:
            return state;
    }
}