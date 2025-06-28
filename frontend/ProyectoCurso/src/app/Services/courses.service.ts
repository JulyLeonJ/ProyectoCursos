import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, timeout } from 'rxjs';


export interface Course {
    id: number;
    name: string;
    description: string;
    duration: number; 
    level: string; 
    price: number; 
    
}

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private http:HttpClient=inject(HttpClient)
    private baseURL = 'http://localhost:8084/course'; 

    getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(this.baseURL)
        .pipe(
            timeout(5000), 
            catchError((error) => {
                console.error('Error obteniendo cursos:', error);
                throw new Error('Error en cursos'); 
            })
        );
    }

    getCourseById(id: number): Observable<Course> {
      return this.http.get<Course>(`${this.baseURL}/${id}`)
    .pipe(
        timeout(5000),
        catchError((error) => {
            console.error('Error obteniendo curso por ID:', error);
            throw new Error('No se pudo obtener el curso');
        }))}


updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.baseURL}/${course.id}`, course)
      .pipe(
        timeout(5000),
        catchError((error) => {
          console.error('Error actualizando curso:', error);
          throw new Error('No se pudo actualizar el curso');
        })
      );

}

deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`)
      .pipe(
        timeout(5000),
        catchError((error) => {
          console.error('Error eliminando curso:', error);
          throw new Error('No se pudo eliminar el curso');
        })
      );

}

addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.baseURL, course)
      .pipe(
        timeout(5000),
        catchError((error) => {
          console.error('Error agregando curso:', error);
          throw new Error('No se pudo agregar el curso');
        })
      );
} 
}