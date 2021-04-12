import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators"
import { TodoItemProp } from "../models/todo-item-prop.interface";
import { TodoApiService } from "../services/todo-api.service";
import { addTodo, deleteTodo, editTodo, refresh, refreshList } from "./todo.actions";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TodoEffects {
    loadTodoList$ = createEffect(() => this.actions$.pipe(
        ofType(refresh.type),
        switchMap(() => this.dataProvider.getAll()
            .pipe(
                map(items =>
                    refreshList({ items })
                ),
                catchError(this.handleApiError.bind(this))
            )
        ))
    );

    deleteTodoItem$ = createEffect(() => this.actions$.pipe(
        ofType(deleteTodo.type),
        switchMap((action: { id: number }) => this.dataProvider.delete(action.id)
            .pipe(
                map(() =>
                    refresh()
                ),
                catchError(this.handleApiError.bind(this))
            )
        ))
    );

    addTodoItem$ = createEffect(() => this.actions$.pipe(
        ofType(addTodo.type),
        switchMap((action: TodoItemProp) => this.dataProvider.create(action.item)
            .pipe(
                map(() =>
                    refresh()
                ),
                catchError(this.handleApiError.bind(this))
            )
        ))
    );

    editTodoItem$ = createEffect(() => this.actions$.pipe(
        ofType(editTodo.type),
        switchMap((action: TodoItemProp) => this.dataProvider.update(action.item)
            .pipe(
                map(() =>
                    refresh()
                ),
                catchError(this.handleApiError.bind(this))
            )
        ))
    );

    constructor(
        private actions$: Actions,
        private dataProvider: TodoApiService,
        private toastr: ToastrService
    ) { }

    handleApiError(error: any) {
        if (error.status == 0) {
            this.toastr.error('Server cannot be reached.', 'Error');
        }
        if (error.status == 400) {
            if (error.error && error.error.errors && error.error.errors.Title) {
                let messageHtml = "<ul>";
                error.error.errors.Title.forEach((message: string) => {
                    messageHtml += `<li>${message}</li>`;
                });
                messageHtml += "</ul>";
                this.toastr.error(messageHtml, 'Error', { enableHtml: true, timeOut: 10000 });
            } else {
                this.toastr.error(error.statusText, 'Error');
            }
        }
        return EMPTY;
    }
}

