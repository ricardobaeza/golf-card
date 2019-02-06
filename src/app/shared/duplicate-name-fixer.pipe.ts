import { Pipe, PipeTransform } from '@angular/core';
import {CourseService} from '../welcome-page/welcome-page.service';
import {PlayerNamesService} from './player-names.service';

@Pipe({
  name: 'duplicateNameFixer'
})
export class DuplicateNameFixerPipe implements PipeTransform {
  private duplicateArray: any[] = [];
  private numberCounter = 0;

  constructor (private welcomePageService: CourseService,
               private playerNamesService: PlayerNamesService) {}
  transform( input: string, args?: any): string {
    this.duplicateArray = [];
    if (input === undefined) {
      return '';
    }
    for (let i = 0; i < this.playerNamesService.playerArray.length; i++) {
      if (input === this.playerNamesService.playerArray[i].name) {
        this.duplicateArray.push(this.playerNamesService.playerArray[i].name);
      }
    }
    if (this.duplicateArray.length === 2) {
      this.numberCounter++;
    }
    if (this.numberCounter === 2 ) {
      this.numberCounter = this.numberCounter - 2;
      return input + ' 2';
    }
    return input;
  }
}
