import { TestBed } from '@angular/core/testing';

import { ListAPIserviceService } from './list-apiservice.service';

describe('ListAPIserviceService', () => {
  let service: ListAPIserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAPIserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
