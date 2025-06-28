import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CourseForm } from '../course-form/course-form';
import { inject } from '../../../../node_modules/@angular/core/index';
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

curso = toSignal(
  
  this.service.getCourseById(id).pipe(
    catchError(err => {
      console.log(err);
      return of(null);
    })
  ),
);



}
