import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsDatepickerComponent } from './materials-datepicker.component';

describe('MaterialsDatepickerComponent', () => {
  let component: MaterialsDatepickerComponent;
  let fixture: ComponentFixture<MaterialsDatepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialsDatepickerComponent]
    });
    fixture = TestBed.createComponent(MaterialsDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
