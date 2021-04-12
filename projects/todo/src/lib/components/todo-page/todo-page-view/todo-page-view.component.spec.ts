import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPageViewComponent } from './todo-page-view.component';

describe('TodoPageViewComponent', () => {
  let component: TodoPageViewComponent;
  let fixture: ComponentFixture<TodoPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoPageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
