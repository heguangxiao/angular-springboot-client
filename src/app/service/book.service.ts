import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BookHouse} from '../class/bookHouse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  bookHouse(id: number, book: BookHouse): Observable<BookHouse> {
    return this.http.post<BookHouse>(this.apiUrl + '/book/' + id, book);
  }
  getBookHouseByUser(): Observable<any> {
    return this.http.get(this.apiUrl + '/book/user');
  }

  deleteBookHouse(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/book/' + id);
  }

  getBookHouseByOwner(data: string): Observable<any> {
    return this.http.get(this.apiUrl + '/owner' + data);
  }
}
