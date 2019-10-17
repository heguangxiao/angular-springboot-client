import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  checkLogin: boolean;

  constructor(private loginService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.checkLogin = this.loginService.isUserLoggedIn();
  }

  newHouse() {
    this.router.navigate(['newhouse']);
  }

}
