import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiState } from 'src/app/models/ui-state.interface';
import { TodoModuleState } from '../../../models/todo-module-state.interface';
import { deleteTodo, refresh } from '../../../store/todo.actions';

@Component({
  selector: 'lib-todo-page-container',
  templateUrl: './todo-page-container.component.html',
  styleUrls: ['./todo-page-container.component.css']
})
export class TodoPageContainerComponent implements OnInit {

  list$ = this.store.select(state => state.todo.todoItemsList);
  opened$ = this.storeUI.select(state => state.ui.opened);

  constructor(
    private store: Store<{ todo: TodoModuleState }>,
    private storeUI: Store<{ ui: UiState }>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(refresh());
  }

  delete(id: number) {
    this.store.dispatch(deleteTodo({ id }));
  }
}
