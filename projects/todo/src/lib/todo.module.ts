import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { TodoPageContainerComponent } from './components/todo-page/todo-page-container/todo-page-container.component';
import { TodoPageViewComponent } from './components/todo-page/todo-page-view/todo-page-view.component';



@NgModule({
  declarations: [
    TodoComponent,
    TodoPageContainerComponent,
    TodoPageViewComponent
  ],
  imports: [
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }
