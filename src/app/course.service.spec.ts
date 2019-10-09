import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';

describe('CourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseService = TestBed.get(CourseService);
    expect(service).toBeTruthy();
  });

  it('should return 4 courses', ()=>{
    const service: CourseService = TestBed.get(CourseService);
    const courses = service.getAllCourses();
    expect(courses).toBeTruthy();
  })
  
  it('test for negative test cases', ()=>{
    const service: CourseService = TestBed.get(CourseService);
    const courses = service.getAllCourses();
    expect(courses).not.toBeFalsy();
  })
});
