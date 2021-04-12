import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TodoPageContainerComponent } from './components/todo-page/todo-page-container/todo-page-container.component';
import { TodoPageViewComponent } from './components/todo-page/todo-page-view/todo-page-view.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { todoReducer } from './stroe/todo.reducer';
import { TodoEffects } from './stroe/todo.effects';
import { TodoApiService } from './services/todo-api.service';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '', component: TodoPageContainerComponent
  }
];

@NgModule({
  declarations: [
    TodoPageContainerComponent,
    TodoPageViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("todo", todoReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [
    TodoApiService
  ]
})
export class TodoModule { }
