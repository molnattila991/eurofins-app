import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../../models/todo-item.interface';

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

  @Input() list: TodoItem[] | null = [];
  constructor() { }

  ngOnInit(): void {
  }

}
