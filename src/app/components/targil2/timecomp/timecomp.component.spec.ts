import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecompComponent } from './timecomp.component';

describe('TimecompComponent', () => {
  let component: TimecompComponent;
  let fixture: ComponentFixture<TimecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
