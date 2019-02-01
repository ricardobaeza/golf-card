import { Component, OnInit } from '@angular/core';
import { CourseService} from "./welcome-page.service";
import { ILocation } from "./welcome-page";
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
  numberSelect: number[] = [1, 2, 3, 4];
  playerNumberArray: number[] = [];
  constructor( private courseService: CourseService, private router: Router) {
  }


  ngOnInit() {
    this.courseService.getCourses().subscribe(
      courses => {
        this.courses = courses;
      },
    );
  }

  getCourseData() {
    this.courseService.getCourse(this.selectedCourseId).subscribe(course => this.selectedCourse = course);
  }

  nextPage () {
    console.log(this.selectedCourseId);
    this.courseService.exampleId = this.selectedCourseId;
    this.router.navigate(['playerName']);
  }

  changePlayer($event) {
    this.playerNumberArray = [];
    for (let i = 0; i < $event.value; i++) {
      this.playerNumberArray.push(i);
    }
    this.courseService.numberOfPlayers = this.playerNumberArray;
    console.log(this.courseService.numberOfPlayers);
  }

  logTeeType($event) {
    Number($event.value);
    $event.value -= 1;
    this.courseService.selectedTeeType = $event.value;
    console.log('the teeTypeId is: ' + $event.value);
  }
}
