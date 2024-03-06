import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListItem } from '../interfaces/listItem.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000/users';

  getData(): Observable<IListItem[]> {
    return this.http.get<IListItem[]>(this.url);
  }
}
