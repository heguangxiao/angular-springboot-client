import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const AVATAR_LINK_KEY = 'AvatarLink';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: string;
  constructor() { }

  signOut() {
    window.localStorage.clear();
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(usernameOrEmail: string) {
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY, usernameOrEmail);
  }

  public getUsername(): string {
    return localStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string) {
    window.localStorage.removeItem(AUTHORITIES_KEY);
    window.localStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string {
    this.roles = '';

    if (localStorage.getItem(TOKEN_KEY)) {
      this.roles = localStorage.getItem(AUTHORITIES_KEY);
    }
    return this.roles;
  }
  public saveAvatarLink(avatarLink: string) {
    window.localStorage.removeItem(AVATAR_LINK_KEY);
    window.localStorage.setItem(AVATAR_LINK_KEY, avatarLink);
  }
  public getAvatarLink(): string {
    return window.localStorage.getItem(AVATAR_LINK_KEY);
  }
}
