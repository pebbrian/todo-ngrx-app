import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppStoreModule {

  constructor(private store: Store<any>) { }

  getStore() {
    return this.store;
  }
}
