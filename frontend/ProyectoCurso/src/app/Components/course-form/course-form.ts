import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from '../../Services/courses.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css'
})
export class CourseForm {
private service = inject(CoursesService);


}
