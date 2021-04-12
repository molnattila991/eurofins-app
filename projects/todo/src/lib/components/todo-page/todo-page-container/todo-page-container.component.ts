import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiState } from 'src/app/models/ui-state.interface';

@Component({
  selector: 'lib-todo-page-container',
  templateUrl: './todo-page-container.component.html',
  styleUrls: ['./todo-page-container.component.css']
})
export class TodoPageContainerComponent {

  opened$ = this.storeUI.select(state => state.ui.opened);

  constructor(private storeUI: Store<{ ui: UiState }>) { }
}
