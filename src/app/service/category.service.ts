import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../class/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    const url = `${this.apiUrl}/role/categories`;
    return this.httpClient.get<Category[]>(url);
  }
}
