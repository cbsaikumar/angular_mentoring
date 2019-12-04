import { AuthGuard } from './shared/services/guards/auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SearchComponent } from './components/search/search.component';
import { CourseComponent } from './components/course/course.component';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { DurationComponent } from './components/duration/duration.component';
import { DateComponent } from './components/date/date.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'courses/:id', component: AddCourseComponent, canActivate: [AuthGuard]
  },
  {
    path: 'courses/new', component: AddCourseComponent, canActivate: [AuthGuard]
  },
  {
    path: 'notfound', component: NotFoundComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/notfound'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SearchComponent,
    CourseComponent,
    LoginComponent,
    AddCourseComponent,
    DurationComponent,
    DateComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
