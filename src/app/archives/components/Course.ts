import { Student } from "./Student"

export class Course{
    name :string 
    lastName : string;
    id : number;
    lastUpdate : string;
    credits : number ;
    comments :String[]= [];
    successrate : number ;
    reviewtime : number ;
    static Courses : Course[] =[];
    availablenotes : String[]= [];
    constructor(n,l,i,lu,cr,sr,rt,comment,av){
        this.name=n;
        this.lastName =l ;
        this.id = i ;
        this.lastUpdate = lu ;
        this.credits = cr;
        this.successrate=sr;
        this.reviewtime =rt;
        this.comments = comment;
        this.availablenotes = av;
    }
 displayCourseInfo(){
     console.log("name :"+ this.name + "LastName:"+this.lastName+"id:this.id"+"lastUpdate:"+this.lastUpdate+" credits:"+this.credits);
 }
 static addCourse(a){
Course.Courses[Course.Courses.length]=a;
 }

 static getElement(a){
    return Course.Courses[a];
}
 addComment(a){
    this.comments.push(a);

}

}