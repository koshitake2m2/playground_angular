import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreInputOutputSampleParentComponent } from './core-input-output-sample-parent.component';

describe('CoreInputOutputSampleParentComponent', () => {
  let component: CoreInputOutputSampleParentComponent;
  let fixture: ComponentFixture<CoreInputOutputSampleParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreInputOutputSampleParentComponent]
    });
    fixture = TestBed.createComponent(CoreInputOutputSampleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
