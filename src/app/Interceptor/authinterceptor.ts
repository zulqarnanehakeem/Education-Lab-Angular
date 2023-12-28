// auth-interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if(request.url.match("http://localhost:62588/api/Teacher"))
    {
    const authToken = localStorage.getItem('authToken');
    console.log('Token:', authToken);
    
    if (authToken) {
      const decodedToken = atob(authToken.split('.')[1]);
  console.log('Decoded Token:', JSON.parse(decodedToken));

      const modifiedRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${authToken}` },
      });
      console.log('Modified Request:', modifiedRequest);
      return next.handle(modifiedRequest);
    }
  }
  else
  {
    return next.handle(request);
  }

    // If no token is present, proceed with the original request
    return next.handle(request);
  }
}
