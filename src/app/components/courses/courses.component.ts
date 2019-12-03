import { CoursesService } from './../../shared/services/courses.service';
import { FilterPipe } from './../../shared/pipes/filter.pipe';
import { ICourse } from '../../models/iCourse';
import { IUser } from '../../models/iUser';
import { Component, OnInit, OnChanges, OnDestroy, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [FilterPipe]
})
export class CoursesComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit {

  public users: IUser[];
  public noCoursesText: string;
  public courses: ICourse[];
  constructor(private filterPipe: FilterPipe, private coursesService: CoursesService, private router: Router) { }

  ngOnInit() {
    console.log('ngOnInit()');
    this.noCoursesText = 'no data. feel free to add new course.'
    this.courses = this.coursesService.getList();
  }

  addCourse(){
    this.router.navigate(['courses', 'new']);
  }

  onSearch(searchKey){
    if(searchKey === ''){
      return this.courses = this.coursesService.getList();
    }
    this.courses = this.filterPipe.transform(this.coursesService.getList(), 'title', searchKey);
  }

  loadMore(){
    console.log('load more')
  }

  onDelete(id: number){
    if(confirm('Are you sure you want to delete the course?'))
      this.coursesService.removeItem(id);
  }

  onEdit(id: number){
    this.router.navigate(['courses', id])
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
}
