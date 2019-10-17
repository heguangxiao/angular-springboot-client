import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtResponse} from '../class/JwtResponse';
import {Image} from '../class/image';
import {House} from '../class/House';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  listImage: Observable<Image[]>;
  image: Image;

  addImage(id, imageUrl) {
    return this.http.post<any>(`${this.baseUrl}/role/image/${id}/add`, {imageUrl} );
  }

  getImageListHouse(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/role/image/${id}`);
  }

  getImageFirst(id: number) {
    this.listImage = this.getImageListHouse(id);
  }
}
