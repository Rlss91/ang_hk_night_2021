import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bind2waybindComponent } from './bind2waybind.component';

describe('Bind2waybindComponent', () => {
  let component: Bind2waybindComponent;
  let fixture: ComponentFixture<Bind2waybindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bind2waybindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bind2waybindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
