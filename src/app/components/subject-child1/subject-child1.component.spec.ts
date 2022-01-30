import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectChild1Component } from './subject-child1.component';

describe('SubjectChild1Component', () => {
  let component: SubjectChild1Component;
  let fixture: ComponentFixture<SubjectChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
