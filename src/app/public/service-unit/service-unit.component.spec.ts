import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUnitComponent } from './service-unit.component';

describe('ServiceUnitComponent', () => {
  let component: ServiceUnitComponent;
  let fixture: ComponentFixture<ServiceUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceUnitComponent]
    });
    fixture = TestBed.createComponent(ServiceUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
