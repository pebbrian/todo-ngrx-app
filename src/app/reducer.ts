import State from './state';
import { Todo } from './todo';
import { CREATE_TODO } from './actions';

const INITIAL_STATE: State = { todos: new Array<Todo>(), openedTodo: null }

export function reducer(state: State = INITIAL_STATE, action) {

    switch( action.type ) {
        case CREATE_TODO:
            let newState = { ...state, todos: [...state.todos, action.payload] }
            console.log(newState);
            return newState;
        default:
            return state;
    }
}