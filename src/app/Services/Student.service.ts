import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Models/Student';
import { catchError } from 'rxjs/operators';
import {AppConstants} from '../Route Configration/Constants';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

   
  constructor(private http: HttpClient) 
  {
   }

  

  get(): Observable<Student[]>
   {
    const apiResponse = this.http.get<Student[]>(`${AppConstants.baseURL}/${AppConstants.StudentGetRelativePath}`);
    console.log(apiResponse);
    return apiResponse;
  }


  createStudent(student: Student) {  
    console.log(student);
    return this.http.post<any>(`${AppConstants.baseURL}/${AppConstants.StudentCreateRelativePath}`,student) 
    .pipe(
      catchError(error => {
        console.error('Error in post request:', error);
        throw error; 
        })
    );
  }

 getStudentWithId(Id:any)
 {
  return this.http.get<any>(`${AppConstants.baseURL}/${AppConstants.GetStudentByIdRelativePath}/${Id}`)
  .pipe(
    catchError(error => {
      console.log(Id);
      throw error; 
      })
  ); 
  
}

UpdateStudent(InputData:Student,Id:any)
{
  const url = `${AppConstants.baseURL}/${AppConstants.StudentUpdateRelativePath}/${Id}`;
  return this.http.put(url, InputData, { headers: { 'Content-Type': 'application/json' } })
  .pipe(
    catchError(error => {
      console.log(InputData);
      throw error; 
      })
  );
}
DeleteRecord(Id:number)
{
  return this.http.delete(`${AppConstants.baseURL}/${AppConstants.StudentDeleteRelativePath}/${Id}`);
  console.log(Id);
  
  
  }

  GetStudentsName():Observable<any>
  {
    var response=this.http.get<any>(`${AppConstants.baseURL}/${AppConstants.GetStudentsNameRelativePath}`);
    console.log(response);
    return response;

  }
}



