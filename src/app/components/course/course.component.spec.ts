import { ICourse } from './../../models/iCourse';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

const course: ICourse = {
  id: 10,
  title: 'Angular Global Mentoring Program',
  description: 'Angular is one of the most famous frameworks in the market used for developing single page applications.',
  duration: 120,
  creationDate: '12-12-2019'
}
describe('CourseComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  let testingComponent: CourseComponent;
  let testingFixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;

    testingFixture = TestBed.createComponent(CourseComponent);
    testingComponent = testingFixture.componentInstance;

    testingComponent.course = course;
  });

  it('should create', () => {
    testingFixture.detectChanges();
    expect(testingComponent).toBeTruthy();
  });

  //Using standalone approach
  it('should test input', () => {
    testingFixture.detectChanges();
    const title = testingFixture.debugElement.query(By.css('h2'))
    expect(title.nativeElement.textContent).toEqual('Angular Global Mentoring Program');
  });

  //Using Test Host testing approach
  it('should test input', () => {
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('h2'))
    expect(title.nativeElement.textContent).toEqual('Another Angular Global Mentoring Program');
  });

  it('clicking on delete button emits id', () => {
    fixture.detectChanges();
    const spyOnRemove = spyOn(testingComponent, 'onDelete');
    const removeEl = testingFixture.debugElement.query(By.css('.remove'));
    removeEl.triggerEventHandler('click', null);

    expect(spyOnRemove).toHaveBeenCalled();
  });
  
  it('clicking on delete button emits id', () => {
    let id: number;
    testingFixture.detectChanges();
    const removeEl = testingFixture.debugElement.query(By.css('.remove'));
    testingComponent.deleteEvent.subscribe(val => id=val);

    removeEl.triggerEventHandler('click', null);

    expect(id).toBe(10);
  });

  @Component({
    selector: `host-component`,
    template: `<app-course [course]=course></app-course>`
  })
  class TestHostComponent {
    public course: ICourse = {
      id: 12,
      title: 'Another Angular Global Mentoring Program',
      description: 'Angular is one of the most famous frameworks in the market used for developing single page applications.',
      duration: 120,
      creationDate: '12-12-2019'
    }
  }
});
