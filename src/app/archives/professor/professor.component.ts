import { Component, OnInit } from '@angular/core';
import {Professor} from'../components/Professor';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  ElementDisplayed = Professor.Professors[1];
  DisplayMode :String ="Button";
  contentDisplayed = Professor.Professors;
   constructor() { }
 
   DisplayElementInfo(a){
     this.DisplayMode="info";
     this.ElementDisplayed =Professor.Professors[a-2];
  }
  ngOnInit() {
  }

}
