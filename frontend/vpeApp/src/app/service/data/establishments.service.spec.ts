import { TestBed } from '@angular/core/testing';

import { EstablishmentsService } from './establishments.service';

describe('EstablishmentsService', () => {
  let service: EstablishmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstablishmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
