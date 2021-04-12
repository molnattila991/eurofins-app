import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFilterContainerComponent } from './todo-filter-container.component';

describe('TodoFilterContainerComponent', () => {
  let component: TodoFilterContainerComponent;
  let fixture: ComponentFixture<TodoFilterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFilterContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
