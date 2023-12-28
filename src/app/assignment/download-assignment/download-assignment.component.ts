import { Component } from '@angular/core';
import { AssignmentService } from 'src/app/Services/assignment.service';
import { Assignment } from 'src/app/Models/Assignment';
import { UploadAssignment } from 'src/app/Models/UploadAssignment';
import { UploadAssignmentService } from 'src/app/Services/upload-assignment.service';
@Component({
  selector: 'app-download-assignment',
  templateUrl: './download-assignment.component.html',
  styleUrls: ['./download-assignment.component.css']
})
export class DownloadAssignmentComponent {
AssignId:number=0;
Upload:UploadAssignment={};
file!:File;
Assign:Assignment[]=[];
Ids:any[]=[];
Text!:any;
FileName!:string;
UploadFiletext!:string;
UploadedData:UploadAssignment[]=[];



  ngOnInit()
  {
this.RetriveAssignment();
this.RetriveUploadedAssignment();
this.GetAssignId();
  }

  constructor(private assignservice:AssignmentService,private uploadassign:UploadAssignmentService){}


GetAssignId()
{
  this.assignservice.GetAssignmentsIds().subscribe(res=>{
    this.Ids=res;
    console.log(res);
  });
}



RetriveUploadedAssignment()
{
  this.uploadassign.GetUploadedAssignment().subscribe(res=>
    {
      console.log(res);
      this.UploadedData=res;
    },err=>{
      console.log(err);
    });
}



OnUploadAssignment(event:any)
{
  this.file=event.target.files[0];
  const reader=new FileReader();
  reader.onloadend=()=>{
    this.FileName=this.file.name;
    this.UploadFiletext=reader.result as string;
console.log(this.UploadFiletext);
  };
  reader.readAsDataURL(this.file);
}



UploadAssignment()
{
  this.Upload.AssignmentId=this.AssignId;
  this.Upload.Name=this.FileName;
  this.Upload.Text=this.UploadFiletext;
  console.log(this.Upload);
  if(confirm("Do you Really Want to upload this File?"
  ))
  {
   this.uploadassign.UploadAssignment(this.Upload).subscribe(res=>{
    console.log(res);
    alert("File Uploaded");
    this.RetriveUploadedAssignment();
   },err=>{
     console.log(err);
   });

}
}




  RetriveAssignment()
  {
    this.assignservice.GetAssignment()
    .subscribe({
      next:(data)=>{
      this.Assign=data;
      console.log(data);
      },
    error:(e)=>console.error(e)
      
    });
  }
  DownloadUploadedFile(Data:any,Name:any)
  {
    let base64String = Data;
    this.DownloadUploadedAssignmentFile(base64String,Name);
  }

  DownloadUploadedAssignmentFile(base64String:any,filename:any) 
  {
    const source =base64String;
    const link = document.createElement("a");
    link.href = source;
    link.click();
  
  }
  
  
  DownloadWordFile(Data:any)
  {
    let base64String = Data;
    this.DownloadFile(base64String,"sample");
  }

  DownloadFile(base64String:any,filename:any) {
    const source =base64String;
    const link = document.createElement("a");
    link.href = source;
    link.click();
  
  }
  
}
