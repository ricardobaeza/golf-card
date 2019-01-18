import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfCourseDisplayComponent } from './golf-course-display.component';

describe('GolfCourseDisplayComponent', () => {
  let component: GolfCourseDisplayComponent;
  let fixture: ComponentFixture<GolfCourseDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfCourseDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfCourseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
