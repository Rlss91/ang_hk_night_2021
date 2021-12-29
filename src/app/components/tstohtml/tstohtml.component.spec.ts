import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TstohtmlComponent } from './tstohtml.component';

describe('TstohtmlComponent', () => {
  let component: TstohtmlComponent;
  let fixture: ComponentFixture<TstohtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TstohtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TstohtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
