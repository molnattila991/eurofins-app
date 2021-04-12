import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoItem } from '../../../models/todo-item.interface';
import { TodoCreateContainerComponent } from '../../todo-dialog/todo-create-container/todo-create-container.component';
import { TodoEditContainerComponent } from '../../todo-dialog/todo-edit-container/todo-edit-container.component';

@Component({
  selector: 'lib-todo-page-view',
  templateUrl: './todo-page-view.component.html',
  styleUrls: ['./todo-page-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPageViewComponent implements OnInit {
  @Output() editPushed: EventEmitter<TodoItem> = new EventEmitter();
  @Output() deletePushed: EventEmitter<number> = new EventEmitter();
  @Output() completedChanged: EventEmitter<TodoItem> = new EventEmitter();

  @Input() opened: boolean | null = true;
  @Input() list: TodoItem[] | null = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCreateDialog(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.viewContainerRef
    let dialogRef = this.dialog.open(TodoCreateContainerComponent, {
      width: '300px',
    });
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
