import { ICourse } from './../../models/iCourse';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: ICourse;
  @Output() deleteEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDelete(id: string){
    // console.log(id);
    this.deleteEvent.emit(id);
  }
}
