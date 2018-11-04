import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDescriptionComponent } from './todo-description/todo-description.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full'  },
  { path: 'todos/:id', component: TodoDescriptionComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
