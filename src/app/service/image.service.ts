import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  addImage(id: number, value: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/image/add/${id}`, value);
  }

  getImageListHouse(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/image/${id}`);
  }
}
