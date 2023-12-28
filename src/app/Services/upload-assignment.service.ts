import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadAssignment } from '../Models/UploadAssignment';
import { AppConstants } from '../Route Configration/Constants';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadAssignmentService {

  constructor(private http:HttpClient) { }




  GetUploadedAssignment():Observable<UploadAssignment[]>
  {
    const response=this.http.get<UploadAssignment[]>(`${AppConstants.baseURL}/${AppConstants.GetUploadAssignmentRelativePath}`)
    .pipe(
      catchError(err=>{
        console.log(err);
        throw err;
      }
    ));
    console.log(response);
    return response;
    
  }




  UploadAssignment(upload:UploadAssignment)
   {
     console.log(upload);
    return this.http.post(`${AppConstants.baseURL}/${AppConstants.UploadAssignmentRelativePath}`,upload)
   .pipe(catchError(err=>{
       console.log(err);
      throw err;
     }));
  }
}
