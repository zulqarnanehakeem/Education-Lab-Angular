import { Injectable } from '@angular/core';
import { Courses } from '../Models/Courses';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { AppConstants } from '../Route Configration/Constants';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }

GetAll():Observable<Courses[]>
{
  const res=this.http.get<Courses[]>(`${AppConstants.baseURL}/${AppConstants.CoursesGetAllRelativePath}`);
  console.log(res);
  return res;
}
CreateCourse(course:Courses)
{
  return this.http.post(`${AppConstants.baseURL}/${AppConstants.CourseCreateRelativePath}`,course)
  .pipe(
    catchError(
      err=>
      {
        console.log(course);
        alert('Record Added Successfully!');
        throw err;
      }
      )
    );
}

UpadteCourse(updatecourse:Courses,Id:any)
{
  return this.http.put(`${AppConstants.baseURL}/${AppConstants.CourseUpadteRelativePath}/${Id}`,updatecourse)
  .pipe(
    catchError(
      err=>
      {
        console.log(updatecourse);
        
        console.log(err);
        throw err;
      }
      )
    ); 
}
GetCourseById(Id:any)
{
  return this.http.get(`${AppConstants.baseURL}/${AppConstants.GetCourseByIdRelativePath}/${Id}`)
  .pipe(
    catchError(
      err=>{
        console.log(err);
        console.log(Id);
        throw err;
      }));
}

DeleteCourse(Id:any)
{
  return this.http.delete(`${AppConstants.baseURL}/${AppConstants.DeleteCourseIdRelativePath}/${Id}`)
  .pipe
  (
    catchError(
      err=>{
        console.log(err);
        console.log(Id);
        throw err;
      }
      )
      );
    }

    GetCoursesName():Observable<any>
    {
      var response= this.http.get(`${AppConstants.baseURL}/${AppConstants.GetCoursesNameRelativePath}`);
      console.log(response);
      return response;
    }
}


