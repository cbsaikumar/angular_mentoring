import { ICourse } from './../../models/iCourse';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-course',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: ICourse;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  @Output() editEvent: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDelete(id: number){
    this.deleteEvent.emit(id);
  }

  onEdit(id: number){
    this.editEvent.emit(id);
  }
}
