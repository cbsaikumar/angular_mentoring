import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CourseOrderByPipe } from '../../shared/pipes/course-order';
import { CoursesService } from '../../shared/services/courses/courses.service';
import { CourseFilterPipe } from '../../shared/pipes/course-filter';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { initialUserState } from 'src/app/store/state/user.state';
import { initialCoursesState } from 'src/app/store/state/courses.state';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [CourseListComponent, CourseOrderByPipe],
      providers: [
        {
          provide: CoursesService,
          useClass: CoursesService
        },
        CourseFilterPipe,
        provideMockStore({
          initialState: {
            user: initialUserState,
            courses: initialCoursesState
          }
        })
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to course details page while editing', inject(
    [Router],
    (router: Router) => {
      spyOn(router, 'navigateByUrl');
      component.onEditCourse(1);
      expect(router.navigateByUrl).toHaveBeenCalledWith('/courses/1');
    }
  ));
});
