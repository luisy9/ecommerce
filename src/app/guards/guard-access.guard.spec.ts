import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardAccessGuard } from './guard-access.guard';

describe('guardAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
