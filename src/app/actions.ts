import { Action } from '@ngrx/store';
import { Todo } from './todo';

export enum TodoActionTypes {

    CREATE_TODO = 'CREATE TODO',
    SWITCH_TODO_COMPLETED = 'SWITCH TODO COMPLETED',
    SWITCH_TODO_OPENED = 'SWITCH TODO OPENED'
}

export class CreateTodoAction implements Action {

    type = TodoActionTypes.CREATE_TODO;

    constructor(public payload: any) {} // TODO: found why there is an error when replacing "any" by "Todo"
}

export class SwitchTodoCompletedAction implements Action {

    type = TodoActionTypes.SWITCH_TODO_COMPLETED;

    constructor(public payload: number) {}
}

export class SwitchTodoOpenedAction implements Action {

    type = TodoActionTypes.SWITCH_TODO_OPENED;

    constructor(public payload: number) {}
}

export type TodoActions = CreateTodoAction | SwitchTodoCompletedAction | SwitchTodoOpenedAction;