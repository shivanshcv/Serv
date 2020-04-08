import { TestBed } from '@angular/core/testing';

import { GuardLoggedInService } from './guard-logged-in.service';

describe('GuardLoggedInService', () => {
  let service: GuardLoggedInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardLoggedInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
