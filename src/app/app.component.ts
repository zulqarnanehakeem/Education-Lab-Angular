
import { BreakpointObserver } from '@angular/cdk/layout';
import {Component,OnInit,ViewChild,} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StudentCrud';
  sideBarOpen=false;

ngOnInit(): void { }

sideBarToggler(){
  this.sideBarOpen=!this.sideBarOpen;
}


 
  }