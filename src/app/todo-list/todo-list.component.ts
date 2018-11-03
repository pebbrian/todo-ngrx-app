import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Todo } from '../todo';
import { CREATE_TODO } from '../actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todos: Todo[];
  private openedTodo: Number;

  constructor(private store: Store<any>) {

    this.todos = new Array<Todo>();

    this.createTodo("Faire du café");
    this.createTodo("Finir cette application");
    this.createTodo("Prendre un peu de repos");
  }

  ngOnInit() {

    this.store.pipe(select('appState')).subscribe(data => {

      this.todos = data.todos;
      this.openedTodo = this.openedTodo;
    });
  }

  getTodos() {
    
    return this.todos;
  }

  createTodo(title: string, description: string = "", completed: boolean = false) {

    this.store.dispatch({ type: CREATE_TODO, payload: { title: title, description: description, completed: completed } });
  }

}
