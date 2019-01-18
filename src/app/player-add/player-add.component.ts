import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {

  form: FormGroup;
  example: string = 'ricky';


  constructor( private fb:FormBuilder,  private router: Router, private http: HttpClient) {};


  ngOnInit() {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      totalPlayers: this.fb.array([
        this.fb.group({
          firstName: [''],
          lastName: [''],
        })
      ]),
      scores: this.fb.array([
        this.fb.group({
          score: 0
        })
      ])
    })
  }


  get totalPlayers():FormArray {
    return this.form.get('totalPlayers') as FormArray;
  }

  get scores():FormArray {
    return this.form.get('scores') as FormArray;
}

  addPlayer() {
    this.totalPlayers.push(this.fb.group({
      firstName: [''],
      lastName: [''],
    }));
    this.scores.push(this.fb.group({
      score: 0
    }))
  }


  nextPage() {
    this.http.post('../assets/data/players.json', this.example);
    this.router.navigate(['golfDisplay'])
  }
}
