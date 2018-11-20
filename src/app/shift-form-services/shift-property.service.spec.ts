import { TestBed } from '@angular/core/testing';

import { ShiftPropertyService } from './shift-property.service';

describe('ShiftPropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShiftPropertyService = TestBed.get(ShiftPropertyService);
    expect(service).toBeTruthy();
  });
});
