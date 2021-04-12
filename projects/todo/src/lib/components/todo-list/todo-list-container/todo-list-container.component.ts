import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem } from '../../../models/todo-item.interface';
import { TodoModuleState } from '../../../models/todo-module-state.interface';
import { deleteTodo, editTodo, refresh } from '../../../store/todo.actions';

@Component({
  selector: 'lib-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent implements OnInit {
  list$ = this.store.select(state => state.todo.todoItemsList);

  constructor(private store: Store<{ todo: TodoModuleState }>) { }

  ngOnInit(): void {
    this.store.dispatch(refresh());
  }

  delete(id: number) {
    this.store.dispatch(deleteTodo({ id }));
  }

  completedChanged(item: TodoItem): void {
    this.store.dispatch(editTodo({ item: { ...item, isCompleted: !item.isCompleted } }));
  }
}
