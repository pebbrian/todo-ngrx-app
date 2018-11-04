import { Component, OnInit } from '@angular/core';
import { AppStoreModule } from '../app-store.module';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { SwitchTodoOpenedAction } from '../actions';

@Component({
  selector: 'app-todo-description',
  templateUrl: './todo-description.component.html',
  styleUrls: ['./todo-description.component.css']
})
export class TodoDescriptionComponent implements OnInit {

  private todos$: Observable<Todo[]>;
  private description: string;
  private title: string;

  constructor(private appStoreModule: AppStoreModule, private route: ActivatedRoute, private router: Router) {
    this.route.url.subscribe(url => {
      this.appStoreModule.getStore().dispatch(new SwitchTodoOpenedAction(parseInt(url[1].path)));
    });
  }

  ngOnInit() {

    this.appStoreModule.getStore().subscribe((data)=> {

      const id = +this.route.snapshot.paramMap.get('id');
      for( let todo of data.appState.todos ) {
        if( todo.id === id ) {
          this.description = todo.description;
          this.title = todo.title;
        }
      }
    });
  }

}
