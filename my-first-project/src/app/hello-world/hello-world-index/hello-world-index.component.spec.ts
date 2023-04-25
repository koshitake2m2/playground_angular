import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldIndexComponent } from './hello-world-index.component';

describe('HelloWorldIndexComponent', () => {
  let component: HelloWorldIndexComponent;
  let fixture: ComponentFixture<HelloWorldIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [HelloWorldIndexComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(HelloWorldIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
