import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistModalComponent } from './specialist-modal.component';

describe('SpecialistModalComponent', () => {
  let component: SpecialistModalComponent;
  let fixture: ComponentFixture<SpecialistModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialistModalComponent]
    });
    fixture = TestBed.createComponent(SpecialistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
