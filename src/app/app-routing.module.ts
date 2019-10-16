import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {LogoutComponent} from './user/logout/logout.component';
import {AuthGuardService} from './service/auth-guard.service';
import {RegisterComponent} from './user/register/register.component';
import {ChangePassComponent} from './user/change-pass/change-pass.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {HouseDetailComponent} from './house/house-detail/house-detail.component';
import {HistoryBookingComponent} from './book/history-booking/history-booking.component';
import {ListHouseUserComponent} from './house/list-house-user/list-house-user.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'password', component: ChangePassComponent, canActivate: [AuthGuardService] },
  { path: 'editUser', component: EditUserComponent, canActivate: [AuthGuardService] },
  {path: 'houseDetail/:id', component: HouseDetailComponent, canActivate: [AuthGuardService]},
  {path: 'history', component: HistoryBookingComponent, canActivate: [AuthGuardService]},
  {path: 'listHouse', component: ListHouseUserComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
