import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../Route Configration/Constants';
import { Observable, catchError } from 'rxjs';
import { Enrollment, EnrollmentUpdateViewModel } from '../Models/Enrollment';
import { EnrollmentCreateModel } from '../Models/EnrollmentCreateModel';
import { EnrollmenUpdateViewModel } from '../Models/Enrollment';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private http:HttpClient) { }


  GetAllEnrollments():Observable<Enrollment[]>
  {
    var response=this.http.get<any>(`${AppConstants.baseURL}/${AppConstants.GetAllEnrollmentRelativePath}`);
    console.log(response);
    return response;
  }


   CreateEnrollement(createEnrollmentViewModel: EnrollmentCreateModel)
   {
    console.log("service: "+ JSON.stringify(createEnrollmentViewModel));
   return this.http.post(`${AppConstants.baseURL}/${AppConstants.PostEnrollemtsNameRelativePath}`,createEnrollmentViewModel)
   .pipe(
    catchError(
      err=>
      {
        
        throw err;
      }
      )
    );
   }

   GetEnrollemntWithId(Id:any):Observable<Enrollment>
   {
    return this.http.get<any>(`${AppConstants.baseURL}/${AppConstants.GetEnrollemtByIdRelativePath}/${Id}`)
    .pipe(
      catchError(
        data=>
        {
          console.log(data);
          throw data;
        }
        )
      );
   }



   UpdateEnrollment(Enroll:EnrollmentUpdateViewModel,Id:any)
   {
    console.log(Enroll);
    return this.http.put(`${AppConstants.baseURL}/${AppConstants.UpdateEnrollemtRelativePath}/${Id}`,Enroll)
    .pipe(
      catchError(
        err=>
        {
          console.log("in service",Enroll);
          console.log(err);
          throw err;
        }
        )
      );
   }



   DeleteEnrollment(Id:any)
   {
     return this.http.delete(`${AppConstants.baseURL}/${AppConstants.DeleteEnrollemtRelativePath}/${Id}`)
    .pipe(
      catchError(
        err=>
        {
          console.log(err);
          alert("Updated Successfully!");
          throw err;
        }
        )
    );
   }

  }

  


