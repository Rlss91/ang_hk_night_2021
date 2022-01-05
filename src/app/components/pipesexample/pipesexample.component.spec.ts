import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesexampleComponent } from './pipesexample.component';

describe('PipesexampleComponent', () => {
  let component: PipesexampleComponent;
  let fixture: ComponentFixture<PipesexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
