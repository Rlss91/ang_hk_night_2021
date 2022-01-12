import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsnewComponent } from './animalsnew.component';

describe('AnimalsnewComponent', () => {
  let component: AnimalsnewComponent;
  let fixture: ComponentFixture<AnimalsnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
