import { Component } from '@angular/core';
import { Courses } from 'src/app/Models/Courses';
import { TeacherService } from 'src/app/Services/teacher.service';
import { CoursesService } from 'src/app/Services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent {
  courseId!:any;
  DropDownData:any;
  Cs:Courses=new Courses();
  Errors:any[]=[];
  
ngOnInit()
{
  this.courseId=this.activeroute.snapshot.paramMap.get('Id');
  this.courseservice.GetCourseById(this.courseId).subscribe(
    res=>{
    console.log(res);
    this.Cs=res;
    });

  this.teacherservice.GetFkName().subscribe
  (
    res=>
    {
      console.log(res);
      this.DropDownData=res;
    });

}

constructor(private teacherservice:TeacherService,private courseservice:CoursesService,private activeroute:ActivatedRoute,private route:Router){}

NavigateToCourseList()
{
this.route.navigate(['/Courses-list'])
};


onUpdate()
{
  var up={
    CourseName:this.Cs.CourseName,
    Description:this.Cs.Description,
    TeacherId:this.Cs.TeacherId
  };
  this.courseservice.UpadteCourse(up,this.courseId).subscribe({
    next:(res:any)=>{
      alert('Updated Successfully!');
      console.log(res);

    
    },
    error:(err:any)=>{
      this.Errors=err.error.Errors;
      console.log(up);
    }
  });

}

}
