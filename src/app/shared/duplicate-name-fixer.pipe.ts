import { Pipe, PipeTransform } from '@angular/core';
import {PlayerNamesService} from './player-names.service';

@Pipe({
  name: 'duplicateNameFixer'
})
export class DuplicateNameFixerPipe implements PipeTransform {

  constructor (private playerService: PlayerNamesService) {}
  transform( input: string, args?: any): string {
    const nameArray = [];

    for (let i = 0; i < this.playerService.playerArray.length; i++) {
      if (input === this.playerService.playerArray[i].name) {
        nameArray.push(i);
      }
    }
    if (nameArray.length > 1) {
      input = input + '2';
      return input;
    }
  }

}
