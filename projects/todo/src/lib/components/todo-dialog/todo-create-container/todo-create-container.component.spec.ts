import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreateContainerComponent } from './todo-create-container.component';

describe('TodoCreateContainerComponent', () => {
  let component: TodoCreateContainerComponent;
  let fixture: ComponentFixture<TodoCreateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCreateContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
