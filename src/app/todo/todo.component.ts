import { Component, OnInit } from '@angular/core';
import { AppStoreModule } from '../store/app-store.module';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { SwitchTodoOpenedAction } from '../store/store.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private todo$: Observable<Todo>;

  constructor(private appStoreModule: AppStoreModule, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.todo$ = this.appStoreModule.getStore().select(state => state.appState.openedTodo);
    this.route.url.subscribe(url => { this.appStoreModule.getStore().dispatch(new SwitchTodoOpenedAction(parseInt(url[1].path))) });
  }

}
