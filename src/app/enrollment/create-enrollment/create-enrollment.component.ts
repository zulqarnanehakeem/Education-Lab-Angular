import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/Student.service';
import { StudentName } from 'src/app/Models/StudentName';
import { EnrollmenCreate, Enrollment } from 'src/app/Models/Enrollment';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { CoursesService } from 'src/app/Services/courses.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder } from '@angular/forms';
import { EnrollmentCreateModel } from 'src/app/Models/EnrollmentCreateModel';




@Component({
  selector: 'app-create-enrollment',
  templateUrl: './create-enrollment.component.html',
  styleUrls: ['./create-enrollment.component.css']
})


export class CreateEnrollmentComponent 
{
  DropDownData:any;
  EnrollmentPost:Array<EnrollmenCreate>=[];
  session:StudentName=new StudentName();
  dropdownList:any=[];
  dropdownsetting:IDropdownSettings={};
  selectedItems:any=[];
  enroll:EnrollmenCreate={
    StudentId:0,
    Session:''
  };
    
  createEnrollmentViewModel : EnrollmentCreateModel=new EnrollmentCreateModel();






  constructor(private studentservice:StudentService,private enrollmentservice:EnrollmentService,private courseservice:CoursesService,private fb: FormBuilder){}
  ngOnInit()
  {
   this.GetStudentNames();

   this.GetCoursesNames();
  
}

GetStudentNames():void
{

this.studentservice.GetStudentsName().subscribe
(res=>
{
  this.DropDownData=res;
  console.log(this.DropDownData);
});
}


GetCoursesNames():void
{
  
  this.courseservice.GetCoursesName().subscribe
  (res=>{
    this.dropdownList=res;
    console.log(res);
  });

  this.dropdownsetting = {
    idField: 'Id',
    textField: 'CourseName',
    defaultOpen: false,
};
  
}


onItemSelect(item: any) {
  const _enrolement: EnrollmenCreate = {
    StudentId: this.enroll.StudentId,
    CourseId: item.Id,
    Session: this.enroll.Session,
  };
  
    this.createEnrollmentViewModel.createEnrollmentViewModelChildren.push(_enrolement);
    console.log(_enrolement);

}


onItemDeselect(item:any)
{
  const IndextoFind=Number(item.Id);

  const Index=this.createEnrollmentViewModel.createEnrollmentViewModelChildren.findIndex(
    (_enrollment)=>(_enrollment.CourseId==IndextoFind)
  );
  if(Index!==-1)
  {
    this.createEnrollmentViewModel.createEnrollmentViewModelChildren.splice(Index,1);
  }
  console.log("Deselected Item:", item);
  console.log("Updated ViewModel:", this.createEnrollmentViewModel.createEnrollmentViewModelChildren);
}

onAllSelected(items:any[])
{
  
    items.forEach((item: any) => {
      const _enrollment: EnrollmenCreate = {
        StudentId: this.enroll.StudentId,
        CourseId: item.Id,
        Session: this.enroll.Session,
      };
      this.createEnrollmentViewModel.createEnrollmentViewModelChildren.push(_enrollment);
      console.log(_enrollment);
    
  });
}


onDeSelectAll(items: any[]) {
  console.log(items);

  this.createEnrollmentViewModel.createEnrollmentViewModelChildren=[];
 
  console.log("Updated ViewModel:", this.createEnrollmentViewModel.createEnrollmentViewModelChildren);
}





OnCreate()
 {

   console.log("in component: " + JSON.stringify(this.createEnrollmentViewModel))
   this.enrollmentservice.CreateEnrollement(this.createEnrollmentViewModel)
   .subscribe({
    next:data=>{console.log(data);
      alert("Record Created Successfully!");
    }
    ,
    error: error =>{
      alert("Sorry Invaild Insertion!");
    console.log('error', error)},
  });    

   
 }
}




