import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedServiceUnitComponent } from './featured-service-unit.component';

describe('FeaturedServiceUnitComponent', () => {
  let component: FeaturedServiceUnitComponent;
  let fixture: ComponentFixture<FeaturedServiceUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedServiceUnitComponent]
    });
    fixture = TestBed.createComponent(FeaturedServiceUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
