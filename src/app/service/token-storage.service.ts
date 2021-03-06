import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const AVATAR_LINK_KEY = 'AvatarLink';
const AVATAR_KEY = 'Avatar';
const IMAGES_KEY = 'Images';

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

  public saveAvatar(avatar: string) {
    window.localStorage.removeItem(AVATAR_KEY);
    window.localStorage.setItem(AVATAR_KEY, avatar);
  }

  public deleteAvatar() {
    window.localStorage.removeItem(AVATAR_KEY);
  }
  public getAvatar(): string {
    return window.localStorage.getItem(AVATAR_KEY);
  }

  public saveImages(images: string) {
    window.localStorage.setItem(IMAGES_KEY, images);
  }

  public deleteImages() {
    window.localStorage.removeItem(IMAGES_KEY);
  }
  public getImages(): string {
    return window.localStorage.getItem(AVATAR_KEY);
  }
}
