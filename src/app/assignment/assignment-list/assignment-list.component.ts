import { Component } from '@angular/core';
import { AssignmentService } from 'src/app/Services/assignment.service';
import { Assignment } from 'src/app/Models/Assignment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent {
Data:Assignment[]=[];
ngOnInit()
{
  this.RetriveAssignment();
}
constructor(private assignservice:AssignmentService,private router:Router){}


NaviagetToCreate()
{
this.router.navigate(['/Assignment']);
}
RetriveAssignment()
{
  this.assignservice.GetAssignment()
  .subscribe({
    next:(data)=>{
    this.Data=data;
    console.log(data);
    },
  error:(e)=>console.error(e)
    
  });
}

OnDelet(event:any,Id:any)
{
  if(confirm('Do You Really Want to Delete!'))
  {
    event.target.InnerText="Deleting......";
    this.assignservice.DeleteAssignment(Id).subscribe
      ((res:any)=>{
        console.log(res);
        this.RetriveAssignment();
      },
      (err:any)=>
      {
        console.log(err);
      }
      );
  }

}
}
