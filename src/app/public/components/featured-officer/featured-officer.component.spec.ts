import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedOfficerComponent } from './featured-officer.component';

describe('FeaturedOfficerComponent', () => {
  let component: FeaturedOfficerComponent;
  let fixture: ComponentFixture<FeaturedOfficerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedOfficerComponent]
    });
    fixture = TestBed.createComponent(FeaturedOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
