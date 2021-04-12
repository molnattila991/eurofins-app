import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoItem } from '../../../models/todo-item.interface';
import { TodoCreateContainerComponent } from '../../todo-dialog/todo-create-container/todo-create-container.component';

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

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.viewContainerRef
    const dialogRef = this.dialog.open(TodoCreateContainerComponent, {
      width: '250px',
    });
  }

}
