import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AssignmentService} from './assignment.service';
import {HttpClientModule} from '@angular/common/http'

import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import {AngularWebStorageModule } from 'angular-web-storage';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { EditCardComponent } from './edit-card/edit-card.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CardMakerComponent } from './card-maker/card-maker.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    EditCardComponent,
    GalleryComponent,
    CardMakerComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule,BrowserAnimationsModule,AngularWebStorageModule,Ng2SearchPipeModule, ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  providers: [AssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
