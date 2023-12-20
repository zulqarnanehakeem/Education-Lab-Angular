import { Component } from '@angular/core';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';
import { EnrollmentUpdateViewModel } from 'src/app/Models/Enrollment';
@Component({
  selector: 'app-update-enrollment',
  templateUrl: './update-enrollment.component.html',
  styleUrls: ['./update-enrollment.component.css']
})


export class UpdateEnrollmentComponent 
{
  Enroll: EnrollmentUpdateViewModel=new EnrollmentUpdateViewModel();
  EnrollmentId!:any;
  DropDownCourseName:any;
  Student!: {
    firstName: string;
    lastName: string;
  };
  Errors!:any[];


constructor(private enrollmentservice:EnrollmentService,private activeRouter:ActivatedRoute,private courseservice:CoursesService){}

  ngOnInit()
{
this.EnrollmentId=this.activeRouter.snapshot.paramMap.get('id');

  this.enrollmentservice.GetEnrollemntWithId(this.EnrollmentId).subscribe(
    res=>{
      this.Enroll=res;
      this.Enroll.FullName = `${this.Enroll.Student?.FirstName} ${this.Enroll.Student?.LastName}`;
       this.Enroll.CourseName=this.Enroll.Course?.CourseName;
      this.Enroll.Session=this.Enroll.Session;
      this.Enroll.CourseId=this.Enroll.Course?.Id;
      this.Enroll.StudentId=this.Enroll.StudentId;
      console.log(this.Enroll);
    });

    this.courseservice.GetCoursesName().subscribe
    (res=>{
    this.DropDownCourseName=res;
    console.log(res);
    });
    
}

OnUpdate()
{
  if(confirm("Do you Really want to Update!"))
  {
  var up={
    StduentId:this.Enroll.StudentId,
    CourseId:this.Enroll.CourseId,
  };

  console.log(up);
  this.enrollmentservice.UpdateEnrollment(up,this.EnrollmentId).subscribe({
    next:(res:any)=>{
      console.log(res);
      alert("Updated Successfully!");

    
    },
    error:(err:any)=>{
      this.Errors=err.error.Errors;
      alert("Sorry record already exist!");
    }
  });
}
}

}
