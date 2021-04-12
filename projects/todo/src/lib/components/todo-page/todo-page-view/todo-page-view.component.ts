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
  @Input() opened: boolean | null = true;
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

}
