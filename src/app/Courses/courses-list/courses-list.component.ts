import { Component } from '@angular/core';
import { Courses } from 'src/app/Models/Courses';
import { CoursesService } from 'src/app/Services/courses.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent 
{
  courses?:Courses[];
  constructor(private courseservice:CoursesService,private route:Router){}

ngOnInit()

{
  this.RetriveCourses();

}

navigateToCreateCourse()
{
  this.route.navigate(['/Create-Course'])
};
  


  RetriveCourses():void
  {
    this.courseservice.GetAll().
    subscribe({
      next:(data)=>
      {
        this.courses=data;
        console.log(data);
      },
      error:e=>console.log(e)
  });

  }
  Delete(event:any,Id:any)
  {
    if(confirm('Do You really want to delete the record?'))
    {
      event.target.InnerText="Deleting....";
      this.courseservice.DeleteCourse(Id).subscribe
      ((res:any)=>{
        console.log(res);
        this.RetriveCourses();
      },
      (err:any)=>
      {
        console.log(err);
      }
      );
    }
  }

}
