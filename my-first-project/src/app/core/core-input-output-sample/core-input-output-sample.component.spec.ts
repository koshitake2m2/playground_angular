import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreInputOutputSampleComponent } from './core-input-output-sample.component';

describe('CoreInputOutputSampleComponent', () => {
  let component: CoreInputOutputSampleComponent;
  let fixture: ComponentFixture<CoreInputOutputSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreInputOutputSampleComponent]
    });
    fixture = TestBed.createComponent(CoreInputOutputSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
