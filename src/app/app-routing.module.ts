import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './employee/update-employee/update-employee.component';
import {EmployeeDetailsComponent} from './employee/employee-details/employee-details.component';
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


const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent, canActivate: [AuthGuardService] },
  { path: 'update/:id', component: UpdateEmployeeComponent, canActivate: [AuthGuardService] },
  { path: 'details/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'edit/:id', component: UpdateEmployeeComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'password', component: ChangePassComponent, canActivate: [AuthGuardService] },
  { path: 'editUser', component: EditUserComponent, canActivate: [AuthGuardService] },
  {path: 'houseDetail/:id', component: HouseDetailComponent, canActivate: [AuthGuardService]},
  {path: 'history', component: HistoryBookingComponent, canActivate: [AuthGuardService]},
  {path: 'listHouse', component: ListHouseUserComponent, canActivate: [AuthGuardService]},
  { path: 'upload', component: ShowUploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
