import { Component, OnInit } from '@angular/core';
import { CourseService} from "./welcome-page.service";
import {ICourse, ILocation} from "./welcome-page";
import { Router } from "@angular/router";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  courses: ILocation;
  selectedCourseId: number;
  selectedCourse: any;

  courseInfo: ICourse[] = [
    {value: 18300, viewValue: "Fox Hollow"},
    {value: 11819, viewValue: "Thanksgiving Point"},
    {value: 19002, viewValue: "Spanish Oaks"}
  ];
  constructor( private courseService: CourseService, private router :Router) {

  }


  ngOnInit() {
    this.courseService.getCourses().subscribe(
      courses => {
        this.courses = courses
      },
      // error1 => this.errorMessage = <any>error
    )
  }

  getCourseData() {
    this.courseService.getCourse(this.selectedCourseId).subscribe(course => this.selectedCourse = course);
  }

  changeMe() {
    this.router.navigate(['#'])
  }
  nextPage () {
    this.router.navigate(['playerAdd'])
  }




}
