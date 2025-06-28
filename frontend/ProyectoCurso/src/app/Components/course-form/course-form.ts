import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from '../../Services/courses.service';

@Component({
  selector: 'app-course-form',
  imports: [],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css'
})
export class CourseForm {
private service = inject(CoursesService);


}
