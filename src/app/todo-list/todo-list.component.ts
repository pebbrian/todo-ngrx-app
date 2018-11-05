import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo.model';
import { CreateTodoAction, SwitchTodoCompletedAction, DeleteTodoAction } from '../store/store.actions';
import { Observable } from 'rxjs';
import { AppStoreModule } from '../store/app-store.module';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Todo[]>;
  public newTodoTitle: string;
  public newTodoDescription: string;

  constructor(private appStoreModule: AppStoreModule) {

    this.createTodo("Prendre un peu de repos", "mérité");
    this.createTodo("Finir cette application", "avant lundi");
    this.createTodo("Faire du café", "et le boire");
  }
 
  ngOnInit() : void {

    this.todos$ = this.appStoreModule.getStore().select(state => state.appState.todos);
  }

  createTodo(title: string, description: string = "", completed: boolean = false) : void {

    this.appStoreModule.getStore().dispatch(new CreateTodoAction({ title: title, description: description, completed: completed }));
  }

  switchTodoCompleted(todoId: number) : void {

    this.appStoreModule.getStore().dispatch(new SwitchTodoCompletedAction(todoId));
  }

  deleteTodo(todoId: number) : void {
    
    this.appStoreModule.getStore().dispatch(new DeleteTodoAction(todoId))
  }
}