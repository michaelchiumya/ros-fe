import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import {Menu} from "../models/menu.model";

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  apiUrl = 'http://localhost:3000/menu';


  constructor(private http: HttpClient) {
    this.http = http;
  }

  get(): Observable<Menu[]>  {
    return this.http.get<Menu[]>(this.apiUrl);
  }

  // Create
  create(data: Menu): Observable<any> {
    let API_URL = `${this.apiUrl}/create-task`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.error)
      )
  }

  // Update
  update(id: number, data: Menu): Observable<any> {
    let API_URL = `${this.apiUrl}/update-task/${id}`;
    return this.http.put(API_URL, data, {headers: this.headers}).pipe(
      catchError(this.error)
    )
  }

  // addItems
  addItem(id: number, data: Menu): Observable<any> {
    let API_URL = `${this.apiUrl}/update-task/${id}`;
    return this.http.put(API_URL, data, {headers: this.headers}).pipe(
      catchError(this.error)
    )
  }

  // Delete
  delete(id: number): Observable<any> {
    var API_URL = `${this.apiUrl}/delete-task/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.error)
    )
  }


  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
