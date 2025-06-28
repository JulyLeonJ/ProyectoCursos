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
    const coursesFound = this.service.getCourses();
    coursesFound.subscribe({
      next: (data) => {
        this.courses.set(data);
      },
      error: (error) => {
        console.error('Error al obtener los cursos:', error);
      }
    });
  }

  getLevelClass(level: string): string {
    switch (level) {
      case 'Básico':
        return 'basic-level';
      case 'Intermedio':
        return 'intermediate-level';
      case 'Avanzado':
        return 'advanced-level';
      default:
        return '';
    }
  }

}
