import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectChild2Component } from './subject-child2.component';

describe('SubjectChild2Component', () => {
  let component: SubjectChild2Component;
  let fixture: ComponentFixture<SubjectChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
