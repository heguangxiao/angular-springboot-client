import { Component, OnInit } from '@angular/core';
import {ChangePassword} from '../../class/changePass';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  form: any = {};
  errorMessage = '';
  isChangePasswordFailed = false;
  private updatePassWord: ChangePassword;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.updatePassWord = new ChangePassword(
      this.form.currentPassword,
      this.form.newPassword
    );
    this.authService.updatePassword(this.updatePassWord).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']);
        this.isChangePasswordFailed = false;
      },
      error => {
        console.log(error);
        this.isChangePasswordFailed = true;
        this.errorMessage = error.error.message;
      }
    );
  }

}
