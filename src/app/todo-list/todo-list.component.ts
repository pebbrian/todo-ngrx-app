import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { CreateTodoAction, SwitchTodoCompletedAction } from '../actions';
import { Observable } from 'rxjs';
import { AppStoreModule } from '../app-store.module';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todoNextId: number = 0;
  private todos$: Observable<Todo[]>;
  private openedTodoId$: Observable<number>;
  private openedTodoId: number;
  private newTodoTitle: string;
  private newTodoDescription: string;

  constructor(private appStoreModule: AppStoreModule) {

    this.createTodo("Prendre un peu de repos", "mérité");
    this.createTodo("Finir cette application", "avant lundi");
    this.createTodo("Faire du café", "et le boire");
  }
 
  ngOnInit() {

    this.todos$ = this.appStoreModule.getStore().select(state => state.appState.todos);
    this.openedTodoId$ = this.appStoreModule.getStore().select(state => state.appState.openedTodoId);
  }

  createTodo(title: string, description: string = "", completed: boolean = false) {

    this.appStoreModule.getStore().dispatch(new CreateTodoAction({ id: this.todoNextId++, title: title, description: description, completed: completed } ));
  }

  switchTodoCompleted(todo: Todo) {

    this.appStoreModule.getStore().dispatch(new SwitchTodoCompletedAction(todo.id ));
  }
}