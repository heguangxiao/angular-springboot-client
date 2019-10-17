import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

import {LoginComponent} from './user/login/login.component';
import {LogoutComponent} from './user/logout/logout.component';
import {AuthGuardService} from './service/auth-guard.service';
import {RegisterComponent} from './user/register/register.component';
import {ChangePassComponent} from './user/change-pass/change-pass.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {ShowUploadComponent} from './uploads/shared/show-upload/show-upload.component';
import {HouseDetailComponent} from './house/house-detail/house-detail.component';
import {HistoryBookingComponent} from './book/history-booking/history-booking.component';
import {ListHouseUserComponent} from './house/list-house-user/list-house-user.component';
import {HouseOwnerComponent} from './house-owner/house-owner.component';
import {NewHouseComponent} from './house-owner/new-house/new-house.component';
import {ChangeHouseStatusComponent} from './house-owner/change-house-status/change-house-status.component';
import {AddImageComponent} from './house-owner/add-image/add-image.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'employees', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'password', component: ChangePassComponent, canActivate: [AuthGuardService] },
  { path: 'editUser', component: EditUserComponent, canActivate: [AuthGuardService] },
  { path: 'houseDetail/:id', component: HouseDetailComponent},
  { path: 'bookDetail/:name', component: BookDetailComponent},
  { path: 'history', component: HistoryBookingComponent, canActivate: [AuthGuardService]},
  { path: 'listHouse', component: ListHouseUserComponent, canActivate: [AuthGuardService]},
  { path: 'upload', component: ShowUploadComponent},
  { path: 'houseOwner', component: HouseOwnerComponent, canActivate: [AuthGuardService] },
  { path: 'newhouse', component: NewHouseComponent, canActivate: [AuthGuardService] },
  { path: 'statushouse/:id', component: ChangeHouseStatusComponent, canActivate: [AuthGuardService] },
  { path: 'addImage/:id', component: AddImageComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
