import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoItem } from '../../../models/todo-item.interface';
import { TodoEditContainerComponent } from '../../todo-dialog/todo-edit-container/todo-edit-container.component';

@Component({
  selector: 'lib-todo-list-view',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.css']
})
export class TodoListViewComponent implements OnInit {
  @Input() list: TodoItem[] | null = [];

  @Output() editPushed: EventEmitter<TodoItem> = new EventEmitter();
  @Output() deletePushed: EventEmitter<number> = new EventEmitter();
  @Output() completedChanged: EventEmitter<TodoItem> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openEditDialog(item: TodoItem): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.viewContainerRef
    let dialogRef = this.dialog.open(TodoEditContainerComponent, {
      width: '300px',
      data: item
    });
  }
}
