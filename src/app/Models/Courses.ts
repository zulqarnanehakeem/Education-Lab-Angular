import { Teacher } from '../Models/Teacher';
export class Courses
{
    Id?:number;
    CourseName?:string; 
     Description?:string;
     TeacherId?:string; 
    Teacher?: Teacher;
}