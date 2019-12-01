import { ICourse } from './../../models/iCourse';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Array<ICourse> = [{
    id: 1,
    title: 'First Video Course',
    creationDate: new Date('3/1/2019'),
    duration: 100,
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    isTopRated: true
  },
  {
    id: 2,
    title: 'Second Video Course',
    creationDate: new Date('3/17/2019'),
    duration: 100,
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    isTopRated: true
  },
  {
    id: 3,
    title: 'Third Video Course',
    creationDate: new Date('2/10/2020'),
    duration: 100,
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
  },
  {
    id: 4,
    title: 'Fourth Video Course',
    creationDate: new Date('11/9/2019'),
    duration: 100,
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
  },
  {
    id: 5,
    title: 'Fifth Video Course',
    creationDate: new Date('6/9/2019'),
    duration: 59,
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
  }];

  constructor() { }

  getList(): Array<ICourse>{
    return this.courses;
  }

  createCourse(course: ICourse){
    this.courses.push(course);
  }

  getItemById(id: number): ICourse{
    return this.courses.find((course: ICourse) => course.id === id);
  }

  updateItem(course: ICourse): boolean{
    const index = this.courses.findIndex((eCourse: ICourse) => eCourse.id === course.id);
    if(index > -1){
      this.courses[index] = course;
      return true;
    }
    return false;
  }

  removeItem(id: number): boolean{
    const index = this.courses.findIndex((course: ICourse) => course.id === id);
    if(index > -1){
      this.courses.splice(index, 1);
      return true;
    }
    return false;
  }
}
