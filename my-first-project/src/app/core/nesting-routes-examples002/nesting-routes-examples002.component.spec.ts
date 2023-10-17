import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestingRoutesExamples002Component } from './nesting-routes-examples002.component';

describe('NestingRoutesExamples002Component', () => {
  let component: NestingRoutesExamples002Component;
  let fixture: ComponentFixture<NestingRoutesExamples002Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NestingRoutesExamples002Component]
    });
    fixture = TestBed.createComponent(NestingRoutesExamples002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
