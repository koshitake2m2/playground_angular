import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAsyncOnceInitSampleComponent } from './core-async-once-init-sample.component';

describe('CoreAsyncOnceInitSampleComponent', () => {
  let component: CoreAsyncOnceInitSampleComponent;
  let fixture: ComponentFixture<CoreAsyncOnceInitSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreAsyncOnceInitSampleComponent]
    });
    fixture = TestBed.createComponent(CoreAsyncOnceInitSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
