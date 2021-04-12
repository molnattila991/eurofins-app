import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPageContainerComponent } from './todo-page-container.component';

describe('TodoPageContainerComponent', () => {
  let component: TodoPageContainerComponent;
  let fixture: ComponentFixture<TodoPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoPageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
