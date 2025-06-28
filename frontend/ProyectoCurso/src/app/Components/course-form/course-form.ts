import { Component, inject } from '@angular/core';
import { Course, CoursesService } from '../../Services/courses.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {Router} from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-course-form',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css'
})

export class CourseForm {
private service = inject(CoursesService);
private build=inject(FormBuilder);
private router=inject(Router)

form = this.build.group({
  name: ['', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(50),
    Validators.pattern(/^[a-zA-Z\s]+/)]],
    
  
  description: ['',[
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(200),
    Validators.pattern(/^[a-zA-Z0-9\s,.!?]+$/)]],
  
    duration: [0, [
      Validators.required,
      Validators.min(1),
      Validators.max(1000)]],
  
    level: ['', [
      Validators.required,]],
  
    price: [0, [
      Validators.required,
      Validators.min(0)]],
  });

  constructor() {}

  submit() {
    let name = this.form.controls.name.value!;
    let description = this.form.controls.description.value!;
    let duration = this.form.controls.duration.value!;
    let level = this.form.controls.level.value;
    let price = this.form.controls.price.value!;

    let course:Course = {
      id:0,
      name: name,
      description: description,
      duration: duration,
      level: level,
      price: price
  }

    this.service.addCourse(course).pipe(take(1)).subscribe({
      next:value => {
        this.router.navigate(['/dashboard']);

      },
      error: err => {
        console.error('Error al agregar el curso:', err);
      }
    });

  }
}
