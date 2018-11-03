import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../todo';
import { CREATE_TODO, SWITCH_TODO_COMPLETED } from '../actions';
import { Observable } from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todoNextId: number = 0;
  public todos$: Observable<Todo[]>;

  constructor(private _store: Store<any>) {

    this.createTodo("Faire du café");
    this.createTodo("Finir cette application");
    this.createTodo("Prendre un peu de repos");
  }

  ngOnInit() {

    this.todos$ = this._store.select(state => state.appState.todos);
  }

  createTodo(title: string, description: string = "", completed: boolean = false) {

    this._store.dispatch({ type: CREATE_TODO, payload: { id: this.todoNextId++, title: title, description: description, completed: completed } });
  }

  switchTodoCompleted(todo: Todo) {

    this._store.dispatch({ type: SWITCH_TODO_COMPLETED, payload: { id: todo.id } });
  }

}
