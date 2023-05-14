import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsSample001Component } from './materials-sample001.component';

describe('MaterialsSample001Component', () => {
  let component: MaterialsSample001Component;
  let fixture: ComponentFixture<MaterialsSample001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialsSample001Component]
    });
    fixture = TestBed.createComponent(MaterialsSample001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
