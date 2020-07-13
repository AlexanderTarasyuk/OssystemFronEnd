import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FigureService {
  private baseUrl = 'http://localhost:8081/figures';

  constructor(private http: HttpClient) { }

  getFigure(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFigure(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateFigure(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFigure(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFiguresList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
