import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child002AComponent } from './child002-a.component';

describe('Child002AComponent', () => {
  let component: Child002AComponent;
  let fixture: ComponentFixture<Child002AComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Child002AComponent]
    });
    fixture = TestBed.createComponent(Child002AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
