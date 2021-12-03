import { TestBed } from '@angular/core/testing';

import { GetCodesService } from './get-codes.service';

describe('GetCodesService', () => {
  let service: GetCodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
