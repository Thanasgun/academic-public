import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCustomErrorDisplayComponent } from './field-custom-error-display.component';

describe('FieldCustomErrorDisplayComponent', () => {
  let component: FieldCustomErrorDisplayComponent;
  let fixture: ComponentFixture<FieldCustomErrorDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldCustomErrorDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldCustomErrorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
