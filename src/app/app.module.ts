import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentListComponent } from './Student/Student-list/student-list.component';
import { CreateComponent} from './Student/Student-create/create/create.component';
import { UpdateComponent } from './Student/Student-Update/update/update.component';
import { DetailComponent } from './Student/Student-detail/detail/detail.component';
import {TeacherListComponent} from './Teacher/Teacher-List/Teacher-list.component';
import { FormsModule } from '@angular/forms';
import { CreateTeacherComponent } from './Teacher/create-teacher/create-teacher.component';
import { TeacherUpdateComponent } from './Teacher/teacher-update/teacher-update.component';
import { CoursesListComponent } from './Courses/courses-list/courses-list.component';
import { CreateCourseComponent } from './Courses/create-course/create-course.component';
import { UpdateCourseComponent } from './Courses/update-course/update-course.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './Designs/sidenav/sidenav.component';
import { HomeComponent } from './Designs/home/home.component';
import { DashBoardComponent } from './Designs/dash-board/dash-board.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { CreateEnrollmentComponent } from './enrollment/create-enrollment/create-enrollment.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEnrollmentComponent } from './enrollment/update-enrollment/update-enrollment.component';





const routes: Routes = [
  { path: 'Create', component: CreateComponent },
  { path: 'Detail', component: DetailComponent },
  { path: 'student-list', component: StudentListComponent },
  { path:'teacher-list', component:   TeacherListComponent},
  {path:'Teacher-Create', component: CreateTeacherComponent},
  { path:'students/:id/Edit', component:UpdateComponent},
  {path:'teachers/:id/Edit' ,component:TeacherUpdateComponent},
  {path:'Courses-list',component:CoursesListComponent},
  {path:'Create-Course',component:CreateCourseComponent},
  {path:'Course/:Id/Edit', component:UpdateCourseComponent},
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'DashBoard', component:DashBoardComponent},
  {path:'Header', component:HeaderComponent},
  {path:'SideNave', component:SidenavComponent},
  {path:'Enrollment', component:EnrollmentComponent},
  {path:'CreateEnrollment', component:CreateEnrollmentComponent},
  {path:'UpdateEnrollment/:id/Edit', component:UpdateEnrollmentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateComponent,
    UpdateComponent,
    DetailComponent,
    TeacherListComponent,
    CreateTeacherComponent,
    TeacherUpdateComponent,
    CoursesListComponent,
    CreateCourseComponent,
    UpdateCourseComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashBoardComponent,
    EnrollmentComponent,
    CreateEnrollmentComponent,
    UpdateEnrollmentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
     MatButtonModule,
MatIconModule, 
MatSidenavModule,
 MatToolbarModule, 
BrowserModule,
 BrowserAnimationsModule,
 MatListModule,
 MatDividerModule,
 MatMenuModule,
 MatIconModule,
 NgMultiSelectDropDownModule.forRoot(),
 ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
 

})
export class AppModule { };



