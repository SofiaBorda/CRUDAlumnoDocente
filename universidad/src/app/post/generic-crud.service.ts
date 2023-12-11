import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericCrudService <T> {
  public apiURL = "http://localhost:8090/api"; 

  constructor(private httpClient: HttpClient) {}

  getAll(endpoint: string): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.apiURL}/${endpoint}`);
  }

  create(endpoint: string, item: T): Observable<T> {
    return this.httpClient.post<T>(`${this.apiURL}/${endpoint}`, item);
  }

  find(endpoint: string, id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.apiURL}/${endpoint}/${id}`);
  }

  update(endpoint: string, id: number, item: T): Observable<T> {
    return this.httpClient.put<T>(`${this.apiURL}/${endpoint}/${id}`, item);
  }

  delete(endpoint: string, id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiURL}/${endpoint}/${id}`);
  }
}