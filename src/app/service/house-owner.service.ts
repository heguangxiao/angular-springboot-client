import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HouseStatus} from '../class/house-status';
import {HouseOwner} from '../class/house-owner';

@Injectable({
  providedIn: 'root'
})
export class HouseOwnerService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllHouseByUser(): Observable<HouseOwner[]> {
    const url = `${this.apiUrl}/role/house`;
    return this.httpClient.get<HouseOwner[]>(url);
  }

  newHouse(formData) {
    const url = `${this.apiUrl}/role/house`;
    return this.httpClient.post<any>(url, formData);
  }

  changeHouseStatus(id: number, status: HouseStatus) {
    const formData = new FormData();
    formData.append('status', status);
    const url = `${this.apiUrl}/role/house/${id}/${status}`;
    return this.httpClient.put(url, formData);
  }

  getDetailHouse(id: number): Observable<HouseOwner> {
    const url = `${this.apiUrl}/guest/house/${id}`;
    return this.httpClient.get<HouseOwner>(url);
  }

  deleteHouse(id: number) {
    const url = `${this.apiUrl}/role/house/${id}`;
    return this.httpClient.delete(url);
  }

}
