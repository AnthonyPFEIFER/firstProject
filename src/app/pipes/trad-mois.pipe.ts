import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tradMois'
})
export class TradMoisPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const tabMois = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'juillet', 'Aout', 'Septembre', 'Octobre',
      'Novembre', 'Décembre'];
    let mois = value.getMonth();
    return tabMois[mois];
  }
}
