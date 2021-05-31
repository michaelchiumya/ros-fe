import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Menu} from "../models/menu.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  //variable object to store request header values
  private headers = new HttpHeaders().set('Content-Typep ', 'application/json');
  //variable object to store url value
  private apiUrl = 'https://rosbe.herokuapp.com/api/v1/';


  constructor(private http: HttpClient) {
    this.http = http;
  }

  //get all menu resources
  getAll(): Observable<Menu[]>  {
    return this.http.get<Menu[]>(this.apiUrl + "menus");
  }

  //get all menu resources
  get(id: number | undefined): Observable<any>  {
    return this.http.get<any>(this.apiUrl + "menu/" + id);
  }

  // Create menu resource
  create(menu: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}menu`, menu);
  }

  // Update menu resource
  update(id: number, data: Menu): Observable<any> {
    return this.http.put<any>(this.apiUrl+"menu/"+id, data, {headers: this.headers});
  }

  // Delete
  delete(id: number): Observable<any> {
   // var API_URL = `${this.apiUrl}/delete-task/${id}`;
    return this.http.delete(this.apiUrl+"menu/"+id);
  }

}
