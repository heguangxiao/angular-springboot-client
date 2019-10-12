import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getHouseInfoById(id: string): Observable<any> {
    return this.http.get(this.apiUrl + '/houses/' + id);
  }
}
