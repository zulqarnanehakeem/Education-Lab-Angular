import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/Student.service';
import { Student} from 'src/app/Models/Student';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {


  studentId!:any;
  std:Student=new Student();
  isLoading:boolean=false;
  Errors:any=[];

  
  constructor(private route:ActivatedRoute,private studentservice:StudentService,private router:Router){}
  ngOnInit()
  {
    this.studentId=this.route.snapshot.paramMap.get('id');
    //alert(this.studentId);
    this.isLoading=true;
    this.studentservice.getStudentWithId(this.studentId).subscribe(res=>{
      console.log(res)
      this.std=res
      this.isLoading=false;
  });
  }

  NavigateToList()
  {
    this.router.navigate(['/student-list']);
  }
  


onUpdate()
{
  var std={
    FirstName:this.std.FirstName,
    LastName:this.std.LastName,
    RegestrationNo:this.std.RegestrationNo,
    FatherName:this.std.FatherName,
    Contact:this.std.Contact,
    Email:this.std.Email,
  };
  this.isLoading=true;

  this.studentservice.UpdateStudent(std,this.studentId).subscribe({
    next:(res:any)=>{
      console.log(res);
    this.isLoading=false;
    },
    error:(err:any)=>{
      this.Errors=err.error.Errors;
      console.log(std);
    }
  });

}

}
 