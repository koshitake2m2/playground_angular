import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpFileSample001Component } from './http-file-sample001.component';

describe('HttpFileSample001Component', () => {
  let component: HttpFileSample001Component;
  let fixture: ComponentFixture<HttpFileSample001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpFileSample001Component]
    });
    fixture = TestBed.createComponent(HttpFileSample001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
