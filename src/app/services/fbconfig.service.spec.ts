import { TestBed } from '@angular/core/testing';

import { FbconfigService } from './fbconfig.service';

describe('FbconfigService', () => {
  let service: FbconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
