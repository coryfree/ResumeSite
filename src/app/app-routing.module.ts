import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { SchoolComponent } from './school/school.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: 'about-me', component: AboutMeComponent
  }, {
    path: 'school', component: SchoolComponent
  }, {
    path: 'work-experience', component: WorkExperienceComponent
  }, {
    path: 'contact-info', component: ContactInfoComponent
  }, {
    path: 'hobbies', component: HobbiesComponent
  }, {
    path: 'welcome-page', component: WelcomePageComponent
  }, {
    path: '', redirectTo: 'welcome-page', pathMatch: 'full'
  }, {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
