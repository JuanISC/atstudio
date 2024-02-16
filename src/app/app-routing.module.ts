import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './modules/components/about-us/about-us.component';
import { HomeComponent } from './modules/components/home/home.component';
import { CourseComponent } from './modules/components/course/course.component';
import { CourseDetailComponent } from './modules/components/course-detail/course-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'course', component: CourseComponent },
  { path: 'services', component: AboutUsComponent },
  { path: 'blog', component: CourseDetailComponent },
  { path: 'contact', component: AboutUsComponent },

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})


export class AppRoutingModule {}
