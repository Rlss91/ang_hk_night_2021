import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngif3Component } from './ngif3.component';

describe('Ngif3Component', () => {
  let component: Ngif3Component;
  let fixture: ComponentFixture<Ngif3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngif3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngif3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
