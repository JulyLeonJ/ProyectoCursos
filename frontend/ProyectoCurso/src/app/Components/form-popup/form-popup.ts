import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CourseForm } from '../course-form/course-form';
import { inject } from '@angular/core';
import { CoursesService } from '../../Services/courses.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'app-form-popup',
  imports: [MatDialogModule, MatButtonModule, CourseForm],
  templateUrl: './form-popup.html',
  styleUrl: './form-popup.css'
})
export class FormPopup {
private service = inject(CoursesService);
data = inject<any>(MAT_DIALOG_DATA);
formData = {};

curso = toSignal(
  this.service.getCourseById(1).pipe(
    catchError(err => {
      console.log(err);
      return of(null);
    })
  ),
);

ngOnInit() {
  console.log('Datos del curso:', this.data);
  if (this.data.action === 'update') {
    this.service.getCourseById(this.data.id).subscribe({
      next: (course) => {
        this.formData = course;
        console.log('Curso obtenido para actualización:', course);
      },
      error: (err) => {
        console.error('Error al obtener el curso:', err);
      }
    });
  }
}

submit(event: Event) {
  event.preventDefault();
  console.log('Datos del curso desde form-popup:', this.formData);
}


}
