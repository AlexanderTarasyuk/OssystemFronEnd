import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {
  private baseUrl = 'http://localhost:8081/coordinates';

  constructor(private http: HttpClient) { }

  getCoordinate(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCoordinate(coordinate: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, coordinate);
  }

  updateCoordinate(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCoordinate(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCoordinateList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
