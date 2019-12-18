import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
goals:any=['g1','g2']; 
  constructor() { }

  addItem(goal:string)
  {
    this.goals.push(goal); 
  }

  getGaols()
  {
    return this.goals ; 
  }
}
