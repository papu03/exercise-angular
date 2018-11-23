import { TestBed } from '@angular/core/testing';

import { CrewMemberService } from './crew-member.service';

describe('CrewMemberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrewMemberService = TestBed.get(CrewMemberService);
    expect(service).toBeTruthy();
  });
});
