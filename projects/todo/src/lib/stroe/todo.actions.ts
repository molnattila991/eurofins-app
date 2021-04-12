import { createAction, props } from '@ngrx/store';
import { TodoItemProp } from '../models/todo-item-prop.interface';
import { TodoItem } from '../models/todo-item.interface';

export const addTodo = createAction('[Todo Module] Add Todo', props<TodoItemProp>());
export const refresh = createAction('[Todo Module] Refresh');
export const refreshList = createAction('[Todo Module] Refresh Todo list', props<{ items: TodoItem[] }>());
export const deleteTodo = createAction('[Todo Module] Delete Todo', props<{ id: number }>());
export const editTodo = createAction('[Todo Module] Edit Todo', props<TodoItemProp>());
