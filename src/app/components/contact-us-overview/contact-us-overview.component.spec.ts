import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsOverviewComponent } from './contact-us-overview.component';

describe('ContactUsOverviewComponent', () => {
  let component: ContactUsOverviewComponent;
  let fixture: ComponentFixture<ContactUsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
