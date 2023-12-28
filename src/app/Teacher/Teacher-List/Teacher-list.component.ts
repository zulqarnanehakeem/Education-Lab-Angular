import { Component } from '@angular/core';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Teacher } from 'src/app/Models/Teacher';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Teacher-list',
  templateUrl: './Teacher-list.component.html',
  styleUrls: ['./Teacher-list.component.css']
})
export class TeacherListComponent {
 teachers?:Teacher[]; 
authToken:string='';
 constructor(private teacherservice:TeacherService,private router:Router,private route:ActivatedRoute){}

 navigateToCreateForm() {
  this.router.navigate(['/Teacher-Create'])
};

 ngOnInit():void
 {
  // this.authToken = this.route.snapshot?.state?.token || '';
  //   console.log(this.authToken);
this.RetriveTecher();
 }

 RetriveTecher():void
 {
  this.teacherservice.get()
  .subscribe({
    next:(data)=>{
      this.teachers=data;
      console.log(data);
    },
    error:(e)=> console.error(e)
  });
 }

Delete(event:any,Id:number)
{
  if(confirm('Are you sure you want to delete?'))
  {
    event.target.InnerText="Deleting...";

  this.teacherservice.DeleteTeacher(Id).subscribe
  (
    (res:any)=>
    {
      this.RetriveTecher();
      alert('Deleted');
    }
  )
  }
  
}
}

