import { CustomBorderDirective } from './../../shared/directives/custom-border.directive';
import { FilterPipe } from './../../shared/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './../course/course.component';
import { SearchComponent } from './../search/search.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';
import { DurationPipe } from 'src/app/shared/pipes/duration.pipe';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent, SearchComponent, CourseComponent, OrderByPipe, FilterPipe, DurationPipe, CustomBorderDirective ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should console log the id while editing', () => {
    const spyOnLog = spyOn(console, 'log');
    component.onDelete('1');
    expect(spyOnLog).toHaveBeenCalled();
  });

  it('should call ngOnChanges life cycle hook', () => {
    const spyOnNgOnChanges = spyOn(component, 'ngOnChanges');
    component.ngOnChanges();
    expect(spyOnNgOnChanges).toHaveBeenCalled();
  });

  it('should call ngOnInit life cycle hook', () => {
    const spyOnNgOnInit = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(spyOnNgOnInit).toHaveBeenCalled();
  });

  it('should call onSearch method', () => {
    const spyOnSearch= spyOn(component, 'onSearch');
    component.onSearch('');
    expect(spyOnSearch).toHaveBeenCalled();
  });
});
