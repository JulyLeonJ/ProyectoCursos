import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CourseForm } from '../course-form/course-form';
@Component({
  selector: 'app-form-popup',
  imports: [MatDialogModule, MatButtonModule, CourseForm],
  templateUrl: './form-popup.html',
  styleUrl: './form-popup.css'
})
export class FormPopup {

}
