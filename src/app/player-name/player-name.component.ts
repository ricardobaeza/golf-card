import { Component, OnInit } from '@angular/core';
import {CourseService} from '../welcome-page/welcome-page.service';
import {Router} from '@angular/router';
import {PlayerNamesService} from '../shared/player-names.service';

@Component({
  selector: 'app-player-name',
  templateUrl: './player-name.component.html',
  styleUrls: ['./player-name.component.css']
})
export class PlayerNameComponent implements OnInit {
  numberOfPlayers: number[] = [];
  playerArray: any[] = [];
  playerName = '';
  isButtonDisabled = false;
  constructor(private courseService: CourseService,
              private router: Router,
              private playerNamesService: PlayerNamesService) { }

  ngOnInit() {
    this.numberOfPlayers = this.courseService.numberOfPlayers;
  }
  logName() {
    if (this.playerArray.length === this.numberOfPlayers.length) {
      this.isButtonDisabled = true;
    } else  {
      this.playerArray.push({ name: this.playerName});
      console.log(this.playerArray);
      this.playerName = '';
    }

  }
  nextPage() {
    this.playerNamesService.playerArray = this.playerArray;
    this.router.navigate(['golfDisplay']);
  }
}
