import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { CustomFormService } from './home/custom-form.service';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CreateFormComponent } from './home/create-form/create-form.component';
import { CreateTemplateComponent } from './home/create-template/create-template.component'
import { ApplicantFormComponent } from './home/applicant-form/applicant-form.component';
import { ViewFormsComponent } from './home/view-forms/view-forms.component';
import { ApplicantListComponent } from './home/applicant-list/applicant-list.component';
import { PreviewFormComponent } from './home/preview-form/preview-form.component';
import { ApplicantProfileComponent } from './home/applicant-profile/applicant-profile.component';

import { KeysPipe } from './home/Keys.pipe';
import { TimesPipe } from './home/Times.pipe';

const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard],children: [
    // { path: 'createform', component: CreateFormComponent, canActivate:[AuthGuard]},
    { path: 'forms', component: ViewFormsComponent, canActivate:[AuthGuard]},
    { path: 'applicants', component: ApplicantListComponent, canActivate:[AuthGuard]},
    { path: 'profile', component: ApplicantFormComponent, canActivate:[AuthGuard]},
    { path: 'ViewProfile/:id', component: ApplicantProfileComponent, canActivate:[AuthGuard]},
    { path: 'templates', component: CreateTemplateComponent, canActivate:[AuthGuard]}
]},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    SignupComponent,
    CreateFormComponent,
    ApplicantFormComponent,
    ViewFormsComponent,
    ApplicantListComponent,
    PreviewFormComponent,
    CreateTemplateComponent,
    ApplicantProfileComponent,
    KeysPipe,
    TimesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FilterPipeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuard, CustomFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
