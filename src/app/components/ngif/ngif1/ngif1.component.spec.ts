import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngif1Component } from './ngif1.component';

describe('Ngif1Component', () => {
  let component: Ngif1Component;
  let fixture: ComponentFixture<Ngif1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngif1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngif1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
