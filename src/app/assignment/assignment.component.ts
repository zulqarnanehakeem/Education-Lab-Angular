import { Component } from '@angular/core';
import { AssignmentService } from '../Services/assignment.service';
import { CoursesService } from '../Services/courses.service';
import { Assignment } from '../Models/Assignment';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  Assign:Assignment={};
  file!:File;
  DropDownCourseName!:any[];
  CourseId!:number;
  Data:any={
    StartTime:'',
    EndTime:'',
    Score:''
  }
  ngOnInit()
  {
    this.GetCoursesName();
  }

constructor(private assignservice:AssignmentService,private courseservice:CoursesService){}


GetCoursesName()
{
  this.courseservice.GetCoursesName().subscribe(
    res=>{
      this.DropDownCourseName=res;
      console.log(this.DropDownCourseName);
    },
    err=>{
      console.log(err);
    });
}


OnFileSelected(event: any) {
  this.file = event.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => 
  {
    this.Assign.Text = reader.result as string;
    this.Assign.Name = this.file.name;
    this.Assign.Type = this.file.type;
    console.log(this.Assign.Text);

  };

  reader.readAsDataURL(this.file);
}

OnSubmit()
{
  this.Assign.CourseId=this.CourseId;
  this.Assign.StartTime=this.Data.StartTime;
  this.Assign.EndTime=this.Data.EndTime;
  this.Assign.Score=this.Data.Score;
  console.log(this.Assign);
  this.assignservice.OnUpload(this.Assign)
.subscribe(
      res=>{
        console.log(res);
        alert("Uploaded Successfully!");
      },
      err=>{
        console.log(err);
      }
    );
 }
}

