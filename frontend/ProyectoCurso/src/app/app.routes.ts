import { Routes } from '@angular/router';
import { CoursesList } from './Components/courses-list/courses-list';   
import { Dashboard } from './Components/dashboard/dashboard';

export const routes: Routes = [
    {path: '', component:CoursesList},
    {path: 'dashboard',component: Dashboard}, 
];
