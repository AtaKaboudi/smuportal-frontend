import { domain } from 'process';
import { Course } from "./Course"

export class Professor{
    name :string ;
    lastName :string;
    id : number;
    rating : number ;
    static Professors : Professor[]=[];
    courses :String [] = [];
    constructor(n,ln,i,r,c){
        this.name=n;
        this.lastName= ln;
        this.id = i ;
        this.rating = r;
        this.courses=c;
    }

 static addProfessor(a){
Professor.Professors[Professor.Professors.length]=a;
 }


}