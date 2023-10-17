import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child003AComponent } from './child003-a.component';

describe('Child003AComponent', () => {
  let component: Child003AComponent;
  let fixture: ComponentFixture<Child003AComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Child003AComponent]
    });
    fixture = TestBed.createComponent(Child003AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
