import {Component, NgZone, OnInit} from '@angular/core';
import {CourseService} from "../welcome-page/welcome-page.service";
import {PlayerNamesService} from '../shared/player-names.service';
import {IPlayerArray} from '../shared/player-interface';

@Component({
  selector: 'app-golf-course-display',
  templateUrl: './golf-course-display.component.html',
  styleUrls: ['./golf-course-display.component.css']
})
export class GolfCourseDisplayComponent implements OnInit {

  course;
  players;
  playerArray: IPlayerArray[] = [];
  selectedTeeType;
  in

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


  logScore ($event, hole: any, playerIndex: number) {
    Math.abs($event.data);
    if (hole <= 9) {
      this.playerArray[playerIndex].inScore += Number($event.data);
      this.playerArray[playerIndex].totalScore += Number($event.data);
    } else {
      this.playerArray[playerIndex].outScore += Number($event.data);
      this.playerArray[playerIndex].totalScore += Number($event.data);
    }
  }
}


