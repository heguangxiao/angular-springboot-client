import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ChangePassword} from '../class/changePass';
import {JwtResponse} from '../class/JwtResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = environment.apiUrl;
  private userInfoUrl = '/role/user/info';

  constructor(private tokenStorage: TokenStorageService,
              private httpClient: HttpClient
  ) {
  }

  authenticate(usernameOrEmail, password) {
       return this.httpClient.post<any>(this.baseUrl + '/auth/signin', {usernameOrEmail, password});
  }

  signUp(user, username, email, password) {
    return this.httpClient.post(this.baseUrl + '/auth/signup', {user, username, email, password});
  }

  updatePassword(info: ChangePassword): Observable<JwtResponse> {
    return this.httpClient.put<JwtResponse>(this.baseUrl + '/role/user/password', info);
  }

  getUserInfoForm(): Observable<any> {
    return this.httpClient.get(this.baseUrl + this.userInfoUrl);
  }

  updateUserInfo(info: FormData): Observable<JwtResponse> {
    return this.httpClient.put<JwtResponse>(this.baseUrl + this.userInfoUrl, info);
  }

  getUserById(id): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/role/user/' + id);
  }

  isUserLoggedIn() {
    const usernameOrEmail = this.tokenStorage.getUsername();
    return !(usernameOrEmail === null);
  }

  getUserLoggedIn() {
    const usernameOrEmail = this.tokenStorage.getUsername();
    return usernameOrEmail;
  }

  isAdminAndPmOrUser() {
    if (this.isUserLoggedIn()) {
      const role = this.tokenStorage.getAuthorities();
      if (role === 'ROLE_ADMIN' || role === 'ROLE_PM') {
        return true;
      } else {
        return false;
      }
    }
  }

  logOut() {
    this.tokenStorage.signOut();
  }
}
