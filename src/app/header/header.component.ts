import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() toggleSidebarForMe:EventEmitter<any>=new EventEmitter();

isLogin: boolean = false;
constructor(private router:Router,private location:Location){}
ngOnInit(){
let token = localStorage.getItem("authToken");
if(token){
this.isLogin=true;
}
}
LogOut()
{
  localStorage.clear();
 this.router.navigate(['/Login']);
  //.then(() => {
  //   // Reload the page after navigation
  //   window.location.reload();
  // });
  
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    // Reload the page after navigation
    window.location.reload();
  });
  
}

toggleSidebar()
{
  this.toggleSidebarForMe.emit();

}


  
}


