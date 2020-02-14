import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharPipe'
})
export class FirstCharPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const wordTab = value.split(' ');
    let stringReturn: '';
    wordTab.forEach((word: string) => {
      stringReturn += word[0];
    });
    return stringReturn;
  }

}
