import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalActivitiesComponent } from './portal-activities.component';

describe('PortalActivitiesComponent', () => {
  let component: PortalActivitiesComponent;
  let fixture: ComponentFixture<PortalActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalActivitiesComponent]
    });
    fixture = TestBed.createComponent(PortalActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
