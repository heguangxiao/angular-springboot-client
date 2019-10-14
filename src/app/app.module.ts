import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import {BasicAuthHtppInterceptorService} from './service/basic-auth-htpp-interceptor.service';
import {environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import {RegisterComponent} from './user/register/register.component';
import { ChangePassComponent } from './user/change-pass/change-pass.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { DropzoneDirective } from './directive/dropzone.directive';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FileSelectDirective} from 'ng2-file-upload';
import { UploadComponent } from './uploads/shared/upload/upload.component';
import * as firebase from 'firebase';
import { DetailsUploadComponent } from './uploads/shared/details-upload/details-upload.component';
import { ListUploadComponent } from './uploads/shared/list-upload/list-upload.component';
import { ShowUploadComponent } from './uploads/shared/show-upload/show-upload.component';
firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    EditUserComponent,
    HomeComponent,
    RegisterComponent,
    ChangePassComponent,
    DropzoneDirective,
    FileSelectDirective,
    UploadComponent,
    DetailsUploadComponent,
    ListUploadComponent,
    ShowUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
