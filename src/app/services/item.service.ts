import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  //variable object to store url value (remote:'https://rosbe.herokuapp.com/api/v1/')
  private apiUrl = 'https://rosbe.herokuapp.com/api/v1/';

  constructor(
    private http :HttpClient
  ) { }

  // Create menu resource
  create(item: any): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}menu-item`, item, {}).pipe(map((data: any)=>{return data}));
  }

  //get all item resources
  getAll(): Observable<any[]>  {
    return this.http.get<any[]>(this.apiUrl + "items");
  }

  //get all item resources
  getByMenu(id :number): Observable<any[]>  {
    return this.http.get<any[]>(this.apiUrl + "menu/" + id + "/items");
  }
}
