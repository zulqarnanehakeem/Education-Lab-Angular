import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/Student.service';
import { Student } from 'src/app/Models/Student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit
{

   
std:Student=new Student();
constructor(private studentservice:StudentService,private router:Router){}
ngOnInit(): void 
{
}


NavigateToList()
{ 
  this.router.navigate(['/student-list']);
}

onSubmit() {
  this.studentservice.createStudent(this.std)
    .subscribe({
      next: data => alert('Record Added Successfully'),
      error: error => console.log('error', error),
      complete: () => console.log('complete')
    });
    console.log(this.std);
}



}

/*
ObserveAddition():void
{
  /*this.studentservice.Post(this.student).subscribe({
   next:(any)=>{
    debugger;
    this.student=any;
    console.log(any);
   }

    },
    Error=>{
      console.log(Error);
    }
    
  );
*/



