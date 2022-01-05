import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBootstrapComponent } from './btn-bootstrap.component';

describe('BtnBootstrapComponent', () => {
  let component: BtnBootstrapComponent;
  let fixture: ComponentFixture<BtnBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
