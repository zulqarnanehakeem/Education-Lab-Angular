import { Component } from '@angular/core';
import { Registration } from 'src/app/Models/Registeration';
import { LogInServiceService } from 'src/app/Services/log-in.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
  register:Registration={};


  ngOnInit(){}
  constructor(private regservice:LogInServiceService,private router:Router){}

  Register()
  {
    console.log(this.register);
    this.regservice.Registration(this.register).subscribe(
      res=>{
        console.log(res);
        alert("Registerd Successfully");
        this.router.navigate(['/Login']);
        
      }
    );

  }



}
