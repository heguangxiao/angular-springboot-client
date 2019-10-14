import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../class/house';
import {HouseStatus} from '../class/house-status';

@Injectable({
  providedIn: 'root'
})
export class HouseOwnerService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllHouseByUser(): Observable<House[]> {
    const url = `${this.apiUrl}/role/house`;
    return this.httpClient.get<House[]>(url);
  }

  newHouse(formData) {
    const url = `${this.apiUrl}/role/house`;
    return this.httpClient.post<any>(url, formData);
  }

  changeHouseStatus(id: number, status: HouseStatus) {
    const url = `${this.apiUrl}/role/house/${id}/${status}`;
    return this.httpClient.put(url, status);
  }

  getDetailHouse(id: number): Observable<House> {
    const url = `${this.apiUrl}/guest/house/${id}`;
    return this.httpClient.get<House>(url);
  }
}
