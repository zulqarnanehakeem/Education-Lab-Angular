import { Injectable } from '@angular/core';
import { AppConstants } from '../Route Configration/Constants';
import { LOgIn } from '../Models/LogIn';
import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../Models/Registeration';
@Injectable({
  providedIn: 'root'
})
export class LogInServiceService {

Key:string='';
  constructor(private htpp:HttpClient) { }

  LogIn(log:LOgIn):Observable<any>
  {
    var response=this.htpp.post(`${AppConstants.baseURL}/${AppConstants.LogInRelativePath}`,log);
    console.log(response);
    return response;
  }


  Registration(reg:Registration)
  {
   return this.htpp.post(`${AppConstants.baseURL}/${AppConstants.RegisterInRelativePath}`,reg)
    .pipe(catchError(err=>{
      console.log(err);
      throw err;
    }));
  }
}
