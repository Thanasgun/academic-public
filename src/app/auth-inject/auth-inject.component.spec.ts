import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthInjectComponent } from './auth-inject.component';

describe('AuthInjectComponent', () => {
  let component: AuthInjectComponent;
  let fixture: ComponentFixture<AuthInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthInjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
