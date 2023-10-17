import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestingRoutesExamples001Component } from './nesting-routes-examples001.component';

describe('NestingRoutesExamples001Component', () => {
  let component: NestingRoutesExamples001Component;
  let fixture: ComponentFixture<NestingRoutesExamples001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NestingRoutesExamples001Component]
    });
    fixture = TestBed.createComponent(NestingRoutesExamples001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
