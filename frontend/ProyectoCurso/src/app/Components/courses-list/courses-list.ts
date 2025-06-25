import { Component, inject } from '@angular/core';
import { CoursesService, Course } from '../../Services/courses.service';
import {MatCardModule} from '@angular/material/card';
import { catchError, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-courses-list',
  imports: [MatCardModule, HttpClientModule],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList{
  private service=inject(CoursesService);

  courses=toSignal(this.service
    .getCourses()
    .pipe(catchError(err=> {
      console.log(err);
      return of([])
    })),{initialValue: [] as Course[]});

}
