import { FilterPipe } from './../../shared/pipes/filter.pipe';
import { ICourse } from '../../models/iCourse';
import { IUser } from '../../models/iUser';
import { Component, OnInit, OnChanges, OnDestroy, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [FilterPipe]
})
export class CoursesComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit {

  private users: IUser[];
  private noCoursesText: string;
  private courses: ICourse[];
  constructor(private filterPipe: FilterPipe) { }

  ngOnInit() {
    console.log('ngOnInit()');
    this.noCoursesText = 'no data. feel free to add new course.'
    this.courses = this.defaultCourses;
  }

  addCourse(){
    console.log('add course');
  }

  onSearch(searchKey){
    if(searchKey === ''){
      return this.courses = this.defaultCourses;
    }
    this.courses = this.filterPipe.transform(this.defaultCourses, 'title', searchKey);
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

  ngAfterContentInit(){
    console.log('ngAfterContentInit()');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit()');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy()');
  }

  get defaultCourses(): Array<ICourse>{
    return [{
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
    }]
  }
}
