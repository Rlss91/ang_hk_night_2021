import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdirectivecomponentComponent } from './customdirectivecomponent.component';

describe('CustomdirectivecomponentComponent', () => {
  let component: CustomdirectivecomponentComponent;
  let fixture: ComponentFixture<CustomdirectivecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomdirectivecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomdirectivecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
