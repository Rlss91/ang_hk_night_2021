import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngif2Component } from './ngif2.component';

describe('Ngif2Component', () => {
  let component: Ngif2Component;
  let fixture: ComponentFixture<Ngif2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngif2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngif2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
