import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  //variable object to store url value (remote:'https://rosbe.herokuapp.com/api/v1/')
  private apiUrl = 'http://127.0.0.1:8080/api/v1/';

  constructor(
    private http :HttpClient
  ) { }

  // Create menu resource
  create(item: any): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}item`, item, {}).pipe(map((data: any)=>{return data}));
  }

  //get all item resources
  getAll(): Observable<any[]>  {
    return this.http.get<any[]>(this.apiUrl + "items");
  }

}
