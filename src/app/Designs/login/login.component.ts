import { Component } from '@angular/core';
import { LOgIn } from 'src/app/Models/LogIn';
import { LogInServiceService } from 'src/app/Services/log-in.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
import { NavigationExtras } from '@angular/router';
import { TeacherListComponent } from 'src/app/Teacher/Teacher-List/Teacher-list.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
log:LOgIn={};
Token:any=Token;

ngOnInit( )
{
  let token = localStorage.getItem("authToken");
  if(token){
    this.router.navigate(['./home']);
  }
}

constructor(private login:LogInServiceService,private router:Router){}
OnSubmit()
{
  this.login.LogIn(this.log).subscribe({
    next: (response: any) => {
      console.log("Retrived token: ", response.Token);
      this.Token = response.Token;
      localStorage.setItem('authToken', this.Token);
      console.log(this.Token);
      if (this.Token != null) {
        location.reload();
        this.router.navigate(['./home']);
      } 
      else
       {
        console.error('Token not received');
      }
    },
    error: (error: any) => {
      console.error('Login failed', error);
      alert("Invaild!");
    }
  });
}
}
