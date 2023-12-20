import { Component } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { Teacher } from 'src/app/Models/Teacher';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.css']
})
export class TeacherUpdateComponent {
 Tch:Teacher=new Teacher();
 TeacherId!:any;
 IsLoading:boolean=false;
 Errors:any=[]
 constructor(private route:ActivatedRoute,private teacherserice:TeacherService,private router:Router){}

  ngOnInit()
  {
    this.TeacherId=this.route.snapshot.paramMap.get('id');
    this.IsLoading=true;
    this.teacherserice.GetById(this.TeacherId).subscribe(res=>{
      console.log(res)
      this.Tch=res
      this.IsLoading=false;
  });
  }
  NavigaetToTeacherList()
  {
    this.router.navigate(['/teacher-list'])
  };
 

 
  





  onUpdate()
  {
    var Tch={
      FirstName:this.Tch.FirstName,
      LastName:this.Tch.LastName,
      Contact:this.Tch.Contact,
      Qualification:this.Tch.Qualification,
      Email:this.Tch.Email,
    };
    this.IsLoading=true;
    this.teacherserice.UpdateTeacher(Tch,this.TeacherId).subscribe({
      next:(res:any)=>{
        console.log(res);
      this.IsLoading=false;
      alert('Updated Successfully');
      },
      error:(err:any)=>{
        this.Errors=err.error.Errors;
        console.log(Tch);
      }
    });
  }

}
