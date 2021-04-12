import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFilterViewComponent } from './todo-filter-view.component';

describe('TodoFilterViewComponent', () => {
  let component: TodoFilterViewComponent;
  let fixture: ComponentFixture<TodoFilterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFilterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFilterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
