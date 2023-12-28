import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() toggleSidebarForMe:EventEmitter<any>=new EventEmitter();

constructor(){}
ngOnInit():void{}
toggleSidebar()
{
  this.toggleSidebarForMe.emit();

}


  
}


