import { Injectable } from '@angular/core';
import { Assignment } from '../Models/Assignment';
import { AppConstants } from '../Route Configration/Constants';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) {}



GetAssignment():Observable<Assignment[]>
{
  const response= this.http.get<Assignment[]>(`${AppConstants.baseURL}/${AppConstants.GetFileRelativePath}`);
    return response;
}



  OnUpload(assignment:Assignment)
  {
    console.log(assignment);
  return this.http.post(`${AppConstants.baseURL}/${AppConstants.UploadFileRelativePath}`,assignment,{ responseType: 'text' })
     .pipe
     (
       catchError(
         err=>{
           console.log(err);
           console.log(assignment);
           throw err;
         }
         )
         );
  }


  GetAssignmentsIds():Observable<number[]>
  {
    const response=this.http.get<number[]>(`${AppConstants.baseURL}/${AppConstants.GetAssignmentIdsFileRelativePath}`);
    console.log(response);
    return response;
  }


  DeleteAssignment(Id:any)
  {
    return this.http.delete(`${AppConstants.baseURL}/${AppConstants.DeleteFileRelativePath}/${Id}`)
    .pipe(catchError(err=>{
      console.log(err);
      throw err;
    }));
  }

}
