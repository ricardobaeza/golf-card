import { Pipe, PipeTransform } from '@angular/core';
import {CourseService} from '../welcome-page/welcome-page.service';
import {PlayerNamesService} from './player-names.service';

@Pipe({
  name: 'duplicateNameFixer'
})
export class DuplicateNameFixerPipe implements PipeTransform {
  private numberCounter: number;
  private duplicateArray: string[] = [];
  constructor (private welcomePageService: CourseService,
               private playerNamesService: PlayerNamesService) {}
  transform( input: string, args?: any): string {
    this.numberCounter = 0;
    if (input === undefined) {
      return '';
    }
    for (let i = 0; i < this.playerNamesService.playerArray.length; i++) {
        if (input === this.playerNamesService.playerArray[i].name) {
          this.numberCounter + 1;
        }
    }
    if ( this.numberCounter > 1) {
      console.log('duplicate found');
    }
    return input;
  }}
