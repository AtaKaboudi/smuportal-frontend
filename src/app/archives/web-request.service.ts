import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Course} from './components/Course'
import { Student } from './components/Student';
import { Professor } from './components/Professor';
@Injectable({
  providedIn: 'root'
})

export class WebRequestService {
  data : any ;
  constructor(private  http : HttpClient){ 
  }
  fetchCourses() {
    this.http.get('http://localhost:3000/course').subscribe( (res) => {
      for(let i = 1 ;i++ ; i< res[0].size){
        let course = new Course (res[i].name,res[i].lastName,i-2,1,res[i].credit,res[i].SuccessRate,res[i].ReviewTime,res[i].Comments,res[i].AvailableNotes);
        Course.Courses.push(course);
      }
    });
  }
  fetchstudents() {
    this.http.get('http://localhost:3000/student').subscribe( (res) => {
      for(let i = 1  ;i++ ; i< res[0].size){
        let student = new Student(res[i].name,res[i].lastname,res[i].gpa,i,res[i].rating,res[i].level,res[i].field,res[i].courses)
        Student.students.push(student);
      }
    });
  }

  fetchProfessor() {
    this.http.get('http://localhost:3000/professor').subscribe( (res) => {
      for(let i = 1 ;i++ ; i< res[0].size){
        let professor = new Professor(res[i].name,res[i].lastname,i,res[i].rating,res[i].courses);
        Professor.Professors.push(professor);
      }
    });
  }

  fetchChat (users,messages){
    this.http.get('http://localhost:3000/chat').subscribe( (res) => {
      for(let i = 1  ;i++ ; i <= res[0].size){
        messages[i]= res[i].message;
        users[i]= res[i].name;

      }
    });  
  }
  
  
  }