import { TestBed } from '@angular/core/testing';

import { SubjectExampleService } from './subject-example.service';

describe('SubjectExampleService', () => {
  let service: SubjectExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
