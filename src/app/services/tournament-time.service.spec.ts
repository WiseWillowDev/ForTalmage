import { TestBed } from '@angular/core/testing';

import { TournamentTimeService } from './tournament-time.service';

describe('TournamentTimeService', () => {
  let service: TournamentTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
