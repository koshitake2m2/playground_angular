import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreControlValueAccessorSample001Component } from './core-control-value-accessor-sample001.component';

describe('CoreControlValueAccessorSample001Component', () => {
  let component: CoreControlValueAccessorSample001Component;
  let fixture: ComponentFixture<CoreControlValueAccessorSample001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreControlValueAccessorSample001Component]
    });
    fixture = TestBed.createComponent(CoreControlValueAccessorSample001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
