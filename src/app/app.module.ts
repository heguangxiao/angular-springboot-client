import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HouseDetailComponent } from './house/house-detail/house-detail.component';
import { HistoryBookingComponent } from './book/history-booking/history-booking.component';
import { ListHouseUserComponent } from './house/list-house-user/list-house-user.component';
import { ListFilterPipePipe } from './list-filter-pipe.pipe';
import {AgmCoreModule} from '@agm/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    EditUserComponent,
    HomeComponent,
    RegisterComponent,
    ChangePassComponent,
    HouseDetailComponent,
    HistoryBookingComponent,
    ListHouseUserComponent,
    ListFilterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAW5i6eXNqVH2VceU6JAznJkMOzr33FE0c',
      libraries: ['places']
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
