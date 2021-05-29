import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Menu} from "../models/menu.model";

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  //variable object to store request header values
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  //variable object to store url value
  apiUrl = 'http://localhost:3000/menu';


  constructor(private http: HttpClient) {
    this.http = http;
  }

  //get menu resource
  get(): Observable<Menu[]>  {
    return this.http.get<Menu[]>(this.apiUrl);
  }

  // Create menu resource
  create(menu: Menu): Observable<any> {
    return this.http.post(this.apiUrl, menu)
  }

  // Update menu resource
  update(id: number, data: Menu): Observable<any> {
    return this.http.put(this.apiUrl+"/"+id, data, {headers: this.headers});
  }

  // addItems to menu resource
  addItem(id: number, data: Menu): Observable<any> {
    return this.http.put(this.apiUrl+"/"+id, data, {headers: this.headers});
  }

  // Delete
  delete(id: number): Observable<any> {
   // var API_URL = `${this.apiUrl}/delete-task/${id}`;
    return this.http.delete(this.apiUrl+"/"+id);
  }

}
