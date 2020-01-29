import { TestBed } from '@angular/core/testing';

import { JewerlyService } from './jewerly.service';

describe('JewerlyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JewerlyService = TestBed.get(JewerlyService);
    expect(service).toBeTruthy();
  });
});
