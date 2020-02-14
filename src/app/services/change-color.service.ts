import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeColorService {
  colors: string[];
  constructor() {
    this.colors = ['greenyellow', 'cadetblue', 'whitesmoke'];
  }
  changerCouleurs(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
