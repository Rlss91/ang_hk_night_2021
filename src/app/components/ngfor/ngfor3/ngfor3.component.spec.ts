import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngfor3Component } from './ngfor3.component';

describe('Ngfor3Component', () => {
  let component: Ngfor3Component;
  let fixture: ComponentFixture<Ngfor3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngfor3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngfor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
