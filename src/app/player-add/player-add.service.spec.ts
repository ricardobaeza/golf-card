import { TestBed } from '@angular/core/testing';

import { PlayerAddService } from './player-add.service';

describe('PlayerAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerAddService = TestBed.get(PlayerAddService);
    expect(service).toBeTruthy();
  });
});
