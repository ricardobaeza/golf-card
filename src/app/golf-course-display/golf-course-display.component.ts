import {Component, NgZone, OnInit} from '@angular/core';
import {CourseService} from "../welcome-page/welcome-page.service";
import {PlayerNamesService} from '../shared/player-names.service';

@Component({
  selector: 'app-golf-course-display',
  templateUrl: './golf-course-display.component.html',
  styleUrls: ['./golf-course-display.component.css']
})
export class GolfCourseDisplayComponent implements OnInit {

  course;
  players;
  playerArray: any[] = [];
  selectedTeeType;

  constructor( private db: CourseService,
               private zone: NgZone,
               private playerNamesService: PlayerNamesService) { }

  ngOnInit() {
    this.db.getCourse(this.db.exampleId).subscribe(course => this.course = course);
    this.zone.run(() => {
      this.players = this.db.numberOfPlayers;
    });
    this.selectedTeeType = this.db.selectedTeeType;
   this.playerArray = this.playerNamesService.playerArray;
  }



}


