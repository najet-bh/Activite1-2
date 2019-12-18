import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemCount:number=4; 
  btnText:string="Add an Item"; 
  goalText:string="My first life goal"; 
  goals:any=[] ; 
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  Additem()
  {
    this.dataService.addItem(this.goalText); 
    this.goalText=""; 
    this.itemCount=this.dataService.goals.length; 
  }

}
