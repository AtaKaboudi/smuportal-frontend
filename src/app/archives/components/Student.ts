import {Course} from "./Course"
export class Student {
     name : string;
     lastName:number;
     gpa : number   ;
     id : number  ; 
     rating : number  ;
     level:String;
     field:String;
    static students : Student[] = [];
    course:String[]= [];
 constructor (n,ln,gpa,id,rating,l,f,c){
this.name = n ;
this.lastName = ln;
this.gpa=gpa;
this.id = id ;
this.rating = rating;
this.level=l;
this.field=f;
this.course=c;
 }
static addStudent(s){
Student.students[Student.students.length]= s
}

displayStudentinfo(){
    console.log("name:"+this.name);
}



}
