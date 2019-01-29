import { TestBed } from '@angular/core/testing';

import { PlayerNamesService } from './player-names.service';

describe('PlayerNamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerNamesService = TestBed.get(PlayerNamesService);
    expect(service).toBeTruthy();
  });
});
