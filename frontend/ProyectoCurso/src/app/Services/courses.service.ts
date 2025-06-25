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
}

