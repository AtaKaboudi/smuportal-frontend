import { Component, OnInit } from '@angular/core';
import { Course } from '../components/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  currentComment = '';
  constructor() { this.DisplayMode = "Button" ;}
  ElementDisplayed ;
   DisplayMode: String;
   contentDisplayed = Course.Courses;

  DisplayElementInfo(a){
     this.DisplayMode="info";
     this.ElementDisplayed = Course.Courses[a];
     console.log(this.ElementDisplayed.comments)
  }

 
  onKey(event) {
    this.currentComment = event.target.value;
   }
  addComment(){
    this.ElementDisplayed.addComment(this.currentComment);
  }


 
  ngOnInit() {
  }

}
