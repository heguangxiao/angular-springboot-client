import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {House} from '../class/House';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getHouseInfoById(id: number): Observable<House> {
    const url = `${this.apiUrl}/guest/house/${id}`;
    return this.http.get<House>(url);
  }
  getListHouse(): Observable<House[]> {
    const url = `${this.apiUrl}/guest/houses`;
    return this.http.get<House[]>(url);
  }
  rentHouse(house: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, house);
  }
}
