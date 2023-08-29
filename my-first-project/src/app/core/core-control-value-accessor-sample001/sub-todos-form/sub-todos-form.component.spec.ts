import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTodosFormComponent } from './sub-todos-form.component';

describe('SubTodosFormComponent', () => {
  let component: SubTodosFormComponent;
  let fixture: ComponentFixture<SubTodosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SubTodosFormComponent]
    });
    fixture = TestBed.createComponent(SubTodosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
