import { Component, OnInit } from '@angular/core';
import {DisplayService} from "./golf-course-display.service";

@Component({
  selector: 'app-golf-course-display',
  templateUrl: './golf-course-display.component.html',
  styleUrls: ['./golf-course-display.component.css']
})
export class GolfCourseDisplayComponent implements OnInit {
  public players = [];
  constructor(private _playerService: DisplayService) { }

  ngOnInit() {
    this._playerService.getPlayerNames()
      .subscribe(data => this.players = data);

  }

}

