import { ICourse } from './../../models/iCourse';
import { CoursesService } from './../../shared/services/courses.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  addCourseForm: FormGroup;
  course: ICourse;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    this.addCourseForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      // date: ['', [Validators.required]],
      // duration: ['', [Validators.required]],
      authors: ['', [Validators.required]]
    });

    this.route.paramMap.subscribe(params => {
      const courseId = params.get('id');
      this.course = this.coursesService.getItemById(Number(courseId));
      if(this.course){
        this.populateFormDate(this.course)
      }
    })
  }

  cancel(){
    this.router.navigate(['/','courses'])
  }

  populateFormDate(course: ICourse){
    this.addCourseForm.patchValue({'title': course.title, 'description': course.description, 'authors': course.authors})
  }

}
