import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { inject } from '@angular/core';
import { CoursesService, Course } from '../../Services/courses.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CourseForm } from '../course-form/course-form';
import { FormPopup } from '../form-popup/form-popup';

@Component({
  selector: 'app-dashboard',
  imports: [MatButtonModule, MatTableModule, MatPaginatorModule, MatDialogModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
private service = inject(CoursesService);
readonly dialog = inject(MatDialog);

courses = toSignal(
  this.service.getCourses().pipe(
    catchError(err => {
      console.log(err);
      return of([]);
    })
  ),
  { initialValue: [] as Course[] }
);
displayedColumns = ['name', 'description','level','duration', 'price','actions'];

 deleteCourse(id: number) {
  this.service.deleteCourse(id).subscribe({
    error: (err) => {
      console.log('Error eliminando curso:', err);
    }
  });
}

updateCourse(id: number) {
  this.dialog.open(FormPopup, {
    data: { id: id, action: 'update' },
  }).afterClosed().subscribe((result: string) => {
    if (result) {
      console.log('Curso actualizado:', result);
    } else {
      console.log('Actualización cancelada');
    }
  }) 
}

addCourse(){
  this.dialog.open(FormPopup, {
    data: {action: 'addCourse' },
  }).afterClosed().subscribe((result: string) => {
    if (result) {
      console.log('Curso agregado:', result);
    } else {
      console.log('Adición de curso cancelada');
    }
     })  }

}
