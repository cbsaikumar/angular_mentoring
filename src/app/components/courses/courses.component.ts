import { ICourse } from '../../models/iCourse';
import { IUser } from '../../models/iUser';
import { Component, OnInit, OnChanges, OnDestroy, AfterContentChecked, AfterViewChecked, AfterContentInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnChanges, OnDestroy, AfterContentChecked, AfterViewChecked, AfterContentInit, DoCheck {

  private users: IUser[];
  private courses: ICourse[];
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit()');
    this.courses = [{
      id: 1,
      title: 'First Video Course',
      creationDate: new Date().toLocaleDateString(),
      duration: 100,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 2,
      title: 'Second Video Course',
      creationDate: new Date().toLocaleDateString(),
      duration: 100,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 3,
      title: 'Third Video Course',
      creationDate: new Date().toLocaleDateString(),
      duration: 100,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 4,
      title: 'Fourth Video Course',
      creationDate: new Date().toLocaleDateString(),
      duration: 100,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    }]
  }

  addCourse(){
    console.log('add course');
  }

  loadMore(){
    console.log('load more')
  }

  onDelete(id: string){
    console.log(id);
  }

  ngOnChanges(){
    console.log('ngOnChanges()');
  }

  ngDoCheck(){
    console.log('ngDoCheck()');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit()');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked()');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit()');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked()');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy()');
  }
}
