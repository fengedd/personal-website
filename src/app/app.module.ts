import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { GlobalConfig } from './GlobalConfig';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { GithubprojectlistComponent } from './components/githubprojectlist/githubprojectlist.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResumeComponent } from './components/resume/resume.component';





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    GithubprojectlistComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule
  ],
  providers: [GlobalConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}

}
