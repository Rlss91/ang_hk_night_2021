import { TestBed } from '@angular/core/testing';

import { AnimalsserviceService } from './animalsservice.service';

describe('AnimalsserviceService', () => {
  let service: AnimalsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
