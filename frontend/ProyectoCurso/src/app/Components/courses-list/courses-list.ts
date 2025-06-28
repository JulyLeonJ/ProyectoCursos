import { Component, inject, signal } from '@angular/core';
import { CoursesService, Course } from '../../Services/courses.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-courses-list',
  imports: [MatCardModule],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})

export class CoursesList{
  private service=inject(CoursesService);
  courses=signal(<Course[]>[]);
    
  ngOnInit() {
    this.service.getCourses();
   }


}
