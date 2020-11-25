import { Component, OnInit } from '@angular/core';
import {Student} from "../components/Student"
import {Course} from "../components/Course"
import { Professor } from '../components/Professor'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebRequestService } from '../web-request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  contentDisplayed=[];
  SearchType=""  ; // use button below search ;
  SearchElement ="";
  DisplayMode = "Button";
  DisplayedContent="Course";
  ElementDisplayed ;     
   webReq = new WebRequestService(this.http);

onKey(event) {
  this.SearchElement = event.target.value;
 }


Search(){
  
 if(this.contentDisplayed == Course.Courses){
  for (let element of Course.Courses){
    if(element.name == this.SearchElement){
      this.DisplayMode = "Button";
      [this.contentDisplayed[0], this.contentDisplayed[element.id]] = [this.contentDisplayed[element.id], this.contentDisplayed[0]];

     break;

    }
  }

 }else if (this.contentDisplayed == Professor.Professors){
   for(let element of Professor.Professors){

     if (element.name == this.SearchElement){
       this.DisplayMode = "Button";
       [this.contentDisplayed[0], this.contentDisplayed[element.id-2]] = [this.contentDisplayed[element.id-2], this.contentDisplayed[0]];
       break;

     }
   }

 }else if(this.contentDisplayed == Student.students){
  for(let element of Student.students){
    if(element.name == this.SearchElement){
     this.DisplayMode = "Button";
     [this.contentDisplayed[0], this.contentDisplayed[element.id-2]] = [this.contentDisplayed[element.id-2], this.contentDisplayed[0]];
     break;
    }
  }

 }
 
}  


Displaycourses(){
 this.DisplayMode = "Button";
 this.DisplayedContent="Course";
}
Displayprofessor(){
 this.DisplayMode = "Button";
 this.DisplayedContent="Professor";
}
Displaystudent(){
 this.DisplayMode = "Button";
 this.DisplayedContent="Student";
}
DisplayChat(){
 this.DisplayMode="Chat";
}








constructor  (private  http : HttpClient ) { 
 console.log(Course.Courses);
 console.log(Professor.Professors);
 console.log(Student.students);

 this.contentDisplayed = Course.Courses;

}


ngOnInit( ): void {  
 this.webReq.fetchCourses()
 this.webReq.fetchProfessor();
  this.webReq.fetchstudents();
}


}

