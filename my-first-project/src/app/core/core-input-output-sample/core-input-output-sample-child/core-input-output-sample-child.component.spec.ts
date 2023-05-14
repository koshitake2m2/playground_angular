import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreInputOutputSampleChildComponent } from './core-input-output-sample-child.component';

describe('CoreInputOutputSampleChildComponent', () => {
  let component: CoreInputOutputSampleChildComponent;
  let fixture: ComponentFixture<CoreInputOutputSampleChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreInputOutputSampleChildComponent]
    });
    fixture = TestBed.createComponent(CoreInputOutputSampleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
