import { TestBed } from '@angular/core/testing';

import { TargilServicesService } from './targil-services.service';

describe('TargilServicesService', () => {
  let service: TargilServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TargilServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
