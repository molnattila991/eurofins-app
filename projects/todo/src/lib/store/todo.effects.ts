import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators"
import { TodoItemProp } from "../models/todo-item-prop.interface";
import { TodoApiService } from "../services/todo-api.service";
import { addTodo, deleteTodo, refresh, refreshList } from "./todo.actions";

@Injectable()
export class TodoEffects {
    loadTodoList$ = createEffect(() => this.actions$.pipe(
        ofType(refresh.type),
        switchMap(() => this.dataProvider.getAll()
            .pipe(
                map(items =>
                    refreshList({ items }),
                    catchError((error) => {
                        console.log(error);
                        return EMPTY
                    })
                ))
        ))
    );

    deleteTodoItem$ = createEffect(() => this.actions$.pipe(
        ofType(deleteTodo.type),
        switchMap((action: { id: number }) =>
            this.dataProvider.delete(action.id)
                .pipe(
                    map(() =>
                        refresh(),
                        catchError((error) => EMPTY)
                    ))
        ))
    );

    addTodoItem$ = createEffect(() => this.actions$.pipe(
        ofType(addTodo.type),
        switchMap((action: TodoItemProp) => this.dataProvider.create(action.item)
            .pipe(
                map(() =>
                    refresh(),
                    catchError((error) => EMPTY)
                ))
        ))
    );

    constructor(
        private actions$: Actions,
        private dataProvider: TodoApiService
    ) { }
}