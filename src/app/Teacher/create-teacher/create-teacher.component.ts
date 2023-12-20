import { Component,OnInit} from '@angular/core';
import { Teacher } from 'src/app/Models/Teacher';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})

export class CreateTeacherComponent implements OnInit
{
  Tch:Teacher=new Teacher();
  constructor(private teacherservice:TeacherService,private router:Router){}
  ngOnInit(): void {}
  NavigaetToTeacherList()
  {
    this.router.navigate(['/teacher-list'])
  };

 
onSubmit()
{
  this.teacherservice.CreateTeacher(this.Tch)
  .subscribe({
    next:data=>  alert('Data Added Succefully'),
    error:error=>console.log('Error Failed to add',error),
    complete:()=>console.log('complete')
  });
}
}
