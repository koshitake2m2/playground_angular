import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCoreAsyncOnceInitComponent } from './child-core-async-once-init.component';

describe('ChildCoreAsyncOnceInitComponent', () => {
  let component: ChildCoreAsyncOnceInitComponent;
  let fixture: ComponentFixture<ChildCoreAsyncOnceInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChildCoreAsyncOnceInitComponent]
    });
    fixture = TestBed.createComponent(ChildCoreAsyncOnceInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
