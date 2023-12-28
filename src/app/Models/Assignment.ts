import { Courses } from "./Courses";

export class Assignment{
    Id?:number;
    Text?: string;
    Name?:string;
    Type?:string;
    StartTime?:Date;    
    EndTime?:Date;
    Score?:number;
    CourseId?:number;
    Course?:Courses;

}