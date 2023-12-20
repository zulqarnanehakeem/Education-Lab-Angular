import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/Services/Student.service';
import { Router,Routes } from '@angular/router';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentListComponent {
 

  students?: Student[];

  constructor(private studentService: StudentService,private router:Router) { }
 

  

  ngOnInit(): void {
    this.retrieveStudents();
  }


  navigateToCreateForm() {
    this.router.navigate(['/Create'])
  };

  


retrieveStudents():void
{
this.studentService.get()
.subscribe({
  next:(data)=>{
  this.students=data;
  console.log(data);
  },
error:(e)=>console.error(e)
  
});
}

DeleteStudent(event:any,Id:number)
{
  if(confirm('Are you sure you want to delete?'))
  {
    event.target.InnerText="Deleting...";

    this.studentService.DeleteRecord(Id).subscribe(
      (res:any)=>
      {
        this.retrieveStudents();
        alert('Deleted!');
  });
  }
}
}
