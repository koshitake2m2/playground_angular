import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsSample1Component } from './signals-sample1.component';

describe('SignalsSample1Component', () => {
  let component: SignalsSample1Component;
  let fixture: ComponentFixture<SignalsSample1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalsSample1Component]
    });
    fixture = TestBed.createComponent(SignalsSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
