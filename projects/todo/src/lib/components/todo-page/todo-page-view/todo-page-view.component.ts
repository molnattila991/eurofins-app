import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-todo-page-view',
  templateUrl: './todo-page-view.component.html',
  styleUrls: ['./todo-page-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPageViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
