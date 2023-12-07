import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsOverviewComponent } from './about-us-overview.component';

describe('AboutUsOverviewComponent', () => {
  let component: AboutUsOverviewComponent;
  let fixture: ComponentFixture<AboutUsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
