import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsUserLoggedInComponent } from './is-user-logged-in.component';

describe('IsUserLoggedInComponent', () => {
  let component: IsUserLoggedInComponent;
  let fixture: ComponentFixture<IsUserLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsUserLoggedInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsUserLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
