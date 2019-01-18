import { TestBed } from '@angular/core/testing';

import { GolfCourseDisplayService } from './golf-course-display.service';

describe('GolfCourseDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GolfCourseDisplayService = TestBed.get(GolfCourseDisplayService);
    expect(service).toBeTruthy();
  });
});
