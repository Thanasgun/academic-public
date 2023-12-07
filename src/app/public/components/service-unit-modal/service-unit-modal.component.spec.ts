import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUnitModalComponent } from './service-unit-modal.component';

describe('ServiceUnitModalComponent', () => {
  let component: ServiceUnitModalComponent;
  let fixture: ComponentFixture<ServiceUnitModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceUnitModalComponent]
    });
    fixture = TestBed.createComponent(ServiceUnitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
