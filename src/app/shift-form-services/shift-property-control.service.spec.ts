import { TestBed } from '@angular/core/testing';

import { ShiftPropertyControlService } from './shift-property-control.service';

describe('ShiftPropertyControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShiftPropertyControlService = TestBed.get(ShiftPropertyControlService);
    expect(service).toBeTruthy();
  });
});
