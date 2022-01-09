import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerChangeStatusComponent } from './server-change-status.component';

describe('ServerChangeStatusComponent', () => {
  let component: ServerChangeStatusComponent;
  let fixture: ComponentFixture<ServerChangeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerChangeStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerChangeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
