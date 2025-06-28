import { Component, Inject, inject, Input } from '@angular/core';
import { Course, CoursesService } from '../../Services/courses.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {Router} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-course-form',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css'
})

export class CourseForm {
private service = inject(CoursesService);
private router=inject(Router)
@Input() data: any;

  constructor() {}
  submit() {
    let course= { }     
    console.log('Datos del curso desde course-form:', this.data);

    this.service.addCourse(course as Course).pipe(take(1)).subscribe({
      next:value => {
        this.router.navigate(['/dashboard']);

      },
      error: err => {
        console.error('Error al agregar el curso:', err);
      }
    });
  }

  ngOnChange() {
  }
}
