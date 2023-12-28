import { Injectable } from '@angular/core';
import { Teacher } from '../Models/Teacher';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { AppConstants } from '../Route Configration/Constants';
import { ActivatedRoute } from '@angular/router';
import { AuthInterceptor } from '../Interceptor/authinterceptor';




@Injectable({
  providedIn: 'root'
})

export class TeacherService {

  TeacherName:any=[];
  ngOnInit(){}
  constructor(private http:HttpClient,private route:ActivatedRoute) 
  {

   }

   
   get():Observable<Teacher[]>
   {
    
    const apiResponse=this.http.get<Teacher[]>(`${AppConstants.baseURL}/${AppConstants.TeacherGetRelativePath}`);
    console.log(apiResponse);
    return apiResponse;
   }






   CreateTeacher(teacher:Teacher)
   {
    console.log(teacher);
    return this.http.post<any>(`${AppConstants.baseURL}/${AppConstants.TeacherCreateRelativePath}`,teacher)
    .pipe(
      catchError(error=>{
        console.error('Error in post request',error);
        throw error;
      })
      );
    }

    GetById(Id:any)
    {
      return this.http.get(`${AppConstants.baseURL}/${AppConstants.TeacherGetByIdRelativePath}/${Id}`)
      .pipe(
        catchError(error=>{
          console.log(Id);
          throw error;
        })
      );
    }

    UpdateTeacher(teacher:Teacher,Id:any)
    {
      const url = `${AppConstants.baseURL}/${AppConstants.TeacherUpdateRelativePath}/${Id}`;
      return this.http.put(url, teacher, { headers: { 'Content-Type': 'application/json' } })
      .pipe(
        catchError(Error=>
          {
            console.log(teacher);
            throw Error;

          })
      );
    }
    DeleteTeacher(Id:number)
    {
     return this.http.delete(`${AppConstants.baseURL}/${AppConstants.TeacherDeleteRelativePath}/${Id}`)
      .pipe
      (
        catchError(err=>
          {
            console.log(Id);
            throw err;
          })
      );
    }

    GetFkName():Observable<any[]>
    {
      var response=this.http.get<any[]>(`${AppConstants.baseURL}/${AppConstants.TeacherNamesGetRelativePath}`);
      console.log(response);
      return response;

    }

   }

