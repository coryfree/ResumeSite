import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SchoolComponent } from './school/school.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SchoolComponent,
    WorkExperienceComponent,
    ContactInfoComponent,
    NavBarComponent,
    HobbiesComponent,
    WelcomePageComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
