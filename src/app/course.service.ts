import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getAllCourses(){
    return ["Angular",'React','Javascript'];
  }
}
