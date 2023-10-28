import { TestBed } from '@angular/core/testing';

import { WelomeDataService } from './welome-data.service';

describe('WelomeDataService', () => {
  let service: WelomeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelomeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
