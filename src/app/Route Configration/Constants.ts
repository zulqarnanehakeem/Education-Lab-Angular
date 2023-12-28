export class AppConstants {
    public static get baseURL(): string { return "http://localhost:62588/api"; }
    //public static get GetStudentRelativePath(): string { return "/Student/GetAll"; }
   public static StudentGetRelativePath:string="Student/GetAll";
   public static StudentCreateRelativePath:string="Student//CreateStudent";
   public static StudentUpdateRelativePath:string="Student//Put";
   public static GetStudentByIdRelativePath:string="Student//GetStudentById";
   public static StudentDeleteRelativePath:string="Student//Delete";
   public static TeacherGetRelativePath:string="Teacher/GetAllTeacher";
   public static TeacherCreateRelativePath:string="Teacher//CreateTeacher";
   public static TeacherGetByIdRelativePath:string="Teacher//GetTeacherById";
   public static TeacherUpdateRelativePath:string="Teacher//Put"; 
   public static TeacherDeleteRelativePath:string="Teacher//Delete"; 
   public static CoursesGetAllRelativePath:string="Courses//GetAllCourses";
   public static TeacherNamesGetRelativePath:string="Teacher/GetTeachersNames";
   public static CourseCreateRelativePath:string="Courses//CreateCourse";
   public static CourseUpadteRelativePath:string="Courses//Put";
   public static GetCourseByIdRelativePath:string="Courses//GetCourseById";
   public static DeleteCourseIdRelativePath:string="Courses//Delete";
   public static GetAllEnrollmentRelativePath:string="Enrollment//GetAllEnrollments";
   public static GetStudentsNameRelativePath:string="Student//GetStudentsName";
   public static GetCoursesNameRelativePath:string="Courses//GetCourseName";
   public static PostEnrollemtsNameRelativePath:string="Enrollment//CreateEnrollment";
   public static GetEnrollemtByIdRelativePath:string="Enrollment//GetEnrollmentsById";
   public static UpdateEnrollemtRelativePath:string="Enrollment//Put";
   public static DeleteEnrollemtRelativePath:string="Enrollment//Delete";
   public static UploadFileRelativePath:string="Assignment//Post";
   public static GetFileRelativePath:string="Assignment//GetAllFile";
   public static DeleteFileRelativePath:string="Assignment//Delete";
   public static GetAssignmentIdsFileRelativePath:string="Assignment//GetAssignmentsIds";
   public static UploadAssignmentRelativePath:string="UploadAssignment//Upload";
   public static GetUploadAssignmentRelativePath:string="UploadAssignment//GetUploadedAssignment";
   public static LogInRelativePath:string="Auth//Login";
   public static RegisterInRelativePath:string="Auth//Register";
}