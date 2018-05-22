import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {DropdownModule} from "ngx-dropdown";
import { ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { CustomFormService } from './home/custom-form.service';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CustomFormComponent } from './home/custom-form/custom-form.component';
import { ApplicantFormComponent } from './home/applicant-form/applicant-form.component';
import { ViewFormsComponent } from './home/view-forms/view-forms.component';
import { ApplicantListComponent } from './home/applicant-list/applicant-list.component';

import { KeysPipe } from './home/JsonKeys.pipe';

const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard],children: [
    { path: 'createform', component: CustomFormComponent, canActivate:[AuthGuard]},
    { path: 'viewforms', component: ViewFormsComponent, canActivate:[AuthGuard]},
    { path: 'applicants', component: ApplicantListComponent, canActivate:[AuthGuard]},
    { path: 'form', component: ApplicantFormComponent, canActivate:[AuthGuard]}
]},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    SignupComponent,
    CustomFormComponent,
    KeysPipe,
    ApplicantFormComponent,
    ViewFormsComponent,
    ApplicantListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuard, CustomFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
