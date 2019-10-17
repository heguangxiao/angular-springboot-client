import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  isSignedUp = false;
  isSignUpFailed = false;
  username = '';
  password = '';
  rePassword = '';
  name = '';
  email = '';
  message = '';

  ngOnInit() {
  }

  onSubmit() {
    if (this.password === this.rePassword) {
      this.authService.signUp(this.name, this.username, this.email, this.password).subscribe(
        data => {
          this.isSignedUp = true;
          this.router.navigate(['login']);
        },
        error => {
          this.isSignUpFailed = true;
          this.message = error;
        }
      );
    } else {
      this.message = 'Confim password is failed';
    }
  }

}
