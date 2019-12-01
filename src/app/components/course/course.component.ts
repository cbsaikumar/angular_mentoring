import { ICourse } from './../../models/iCourse';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: ICourse;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDelete(id: number){
    this.deleteEvent.emit(id);
  }
}
