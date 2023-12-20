import { Component ,OnInit} from '@angular/core';
import { Courses } from 'src/app/Models/Courses';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  DropDownData:any;
  SelectedOption:string="";
  Cs:Courses=new Courses();


  constructor(private teacher:TeacherService,private courseservice:CoursesService,private route:Router){}
  ngOnInit()
  {
    this.teacher.GetFkName().subscribe(
      res=>{
        console.log(res);
        this.DropDownData=res;
      });

  }
  navigateToCourseList()
  {
    this.route.navigate(['/Courses-list'])
  };
  onCreate()
  {
    this.courseservice.CreateCourse(this.Cs)
    .subscribe({
      next:data=>{console.log(data);
      alert('Record has been Added Successfully!')}
      ,
      error: error => console.log('error', error),
    });    

  }

/*DropDown()
{
  this.teacher.GetFkName().subscribe(
    res=>{
      console.log(res);
      this.DropDownData=res;
    });
}
*/
}

