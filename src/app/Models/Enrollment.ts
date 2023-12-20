import { Courses } from "./Courses";
import { Student } from "./Student";

export class Enrollment
{
     Id?:number;
    StudentId?: number;
    CourseId?:number;
    Session?:string;    
    Course?:Courses ;
    Student?:Student;
}

export class EnrollmenUpdateViewModel
{
    CourseId?:number;
}


export class EnrollmenCreate
{
    StudentId?: number;
    CourseId?:number;
    Session?:string;   
}

export class EnrollmentList
{
    createEnrollmentViewModelChildren!:EnrollmenCreate[];
}

export class EnrollemntListViewModel
{
    Id?:number;
    StudentId?:number;
    FullName?:string;
    CourseId?:number;
    CourseName?:string;
    Session?:string;    
    Course?:Courses ;
    Student?:Student;

}

export  class EnrollmentUpdateViewModel
{
    StudentId?:number;
    CourseId?:number;
    FullName?:string;
    CourseName?:string;
    Session?:string;
    Student?:Student;
    Course?:Courses;
    
}