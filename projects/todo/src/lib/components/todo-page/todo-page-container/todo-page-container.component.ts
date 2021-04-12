import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModuleState } from '../../../models/todo-module-state.interface';
import { deleteTodo, refresh } from '../../../stroe/todo.actions';

@Component({
  selector: 'lib-todo-page-container',
  templateUrl: './todo-page-container.component.html',
  styleUrls: ['./todo-page-container.component.css']
})
export class TodoPageContainerComponent implements OnInit {

  list$ = this.store.select(state=>state.todo.todoItemsList);

  constructor(
    private store: Store<{ todo: TodoModuleState }>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(refresh());
  }

  delete(id: number) {
    this.store.dispatch(deleteTodo({id}));
  }
}
