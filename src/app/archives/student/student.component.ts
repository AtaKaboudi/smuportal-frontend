import { Component, OnInit } from '@angular/core';
import { Student } from '../components/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
  ElementDisplayed = Student.students[1];
  DisplayMode :String ="Button";
  contentDisplayed = Student.students;
 
   DisplayElementInfo(a){
     this.DisplayMode="info";
     this.ElementDisplayed =Student.students[a-2];
  }
 
  ngOnInit() {
  }

}
