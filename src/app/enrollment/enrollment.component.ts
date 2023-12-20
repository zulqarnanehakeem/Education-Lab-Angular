import { Component } from '@angular/core';
import { EnrollmentService } from '../Services/enrollment.service';
import { Enrollment } from '../Models/Enrollment';
import { Router } from '@angular/router';
import { EnrollemntListViewModel } from '../Models/Enrollment';


@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent {

  
  enrollments?:EnrollemntListViewModel[];


  ngOnInit()
  {

    this.RetriveEnrollments();

  }


  constructor(private enrollmentservice:EnrollmentService,private router:Router){}



  NavigateToCreateForm()
  {
    this.router.navigate(['/CreateEnrollment']);
  }
  

  RetriveEnrollments()
  {
    this.enrollmentservice.GetAllEnrollments().subscribe({
      next:(data)=>{
      this.enrollments=data;
      console.log(data);
      },
    error:(e)=>console.error(e)
      
    });
}

Delete(event:any,Id:any)
{
  if(confirm('Do You really want to delete the record?'))
    {
      event.target.InnerText="Deleting....";
  this.enrollmentservice.DeleteEnrollment(Id).subscribe
  ((res:any)=>{
    console.log(res);
    this.RetriveEnrollments();
  },
  (err:any)=>
  {
    console.log(err);
  }
  );
}
}

}
