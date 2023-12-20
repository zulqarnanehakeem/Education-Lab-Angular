import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListComponent } from './Teacher-list.component';

describe('StudentListComponent', () => {
  let component: TeacherListComponent;
  let fixture: ComponentFixture<TeacherListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherListComponent]
    });
    fixture = TestBed.createComponent(TeacherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
