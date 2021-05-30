import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  //variable object to store url value
  private apiUrl = 'https://rosbe.herokuapp.com/api/v1/';

  constructor(
    private http :HttpClient,

  ) { }

  // Create menu resource
  create(menu: any): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}item`, menu).pipe(map((data: any)=>{return data}));
  }

}
