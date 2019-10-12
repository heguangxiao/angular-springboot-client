import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor(private token: TokenStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
    //   req = req.clone({
    //     setHeaders: {
    //       Authorization: sessionStorage.getItem('token')
    //     }
    //   });
    // }

    const token = this.token.getToken();
    if (token != null) {
      req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }

    return next.handle(req);

  }
}
