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
          this.duplicateArray.push(input);
        }
        if (this.duplicateArray.length > 1) {
          return input + ' 2';
        }
        console.log('the length of the array is ' + this.duplicateArray.length);
        return input;
      }
    }
  }
