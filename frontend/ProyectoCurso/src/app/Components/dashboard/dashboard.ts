import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { inject } from '@angular/core';
import { CoursesService, Course } from '../../Services/courses.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [MatButtonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
private service = inject(CoursesService);

courses = toSignal(
  this.service.getCourses().pipe(
    catchError(err => {
      console.log(err);
      return of([]);
    })
  ),
  { initialValue: [] as Course[] }
);
displayedColumns = ['Nombre', 'Descripción','Nivel','Duración', 'Precio','Acciones'];

addCourse() {
  // Aquí puedes implementar la lógica para agregar un curso
  console.log('Agregar curso');
}}
