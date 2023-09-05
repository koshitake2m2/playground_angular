import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinHomeComponent } from './loggedin-home.component';

describe('LoggedinHomeComponent', () => {
  let component: LoggedinHomeComponent;
  let fixture: ComponentFixture<LoggedinHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoggedinHomeComponent]
    });
    fixture = TestBed.createComponent(LoggedinHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
