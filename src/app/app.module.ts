import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { reducer } from './store/store.reducer';
import { TodoComponent } from './todo/todo.component';
import { AppStoreModule } from './store/app-store.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ appState: reducer }),
    AppStoreModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
