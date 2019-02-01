import { Injectable } from '@angular/core';
import {IPlayerArray} from './player-interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerNamesService {
  playerArray: IPlayerArray[] = [];
  constructor() { }
}
