import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleDirComponent } from './ng-style-dir.component';

describe('NgStyleDirComponent', () => {
  let component: NgStyleDirComponent;
  let fixture: ComponentFixture<NgStyleDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStyleDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
