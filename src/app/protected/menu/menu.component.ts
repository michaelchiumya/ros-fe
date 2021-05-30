import { Component, OnInit } from '@angular/core';
import {Menu} from "../../models/menu.model";
import {MenuService} from "../../services/menu.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //variable to store list of menus
  menus: Menu[] | undefined
  error: any;
  deleteInfo: any;

  constructor(
    private menuService: MenuService

  ) { }

  ngOnInit(): void {
    //subscribe to the observer returned from get() assign menus to response of the observable
    this.menuService.getAll().subscribe(
      res => {
        this.menus = res;
      },
      error => {
        this.error = error;
      }
    );
  }

 //remove menu method
  remove(id: number){
    this.menuService.delete(id).subscribe(
      res => {
        this.deleteInfo = res;
      },
      error => {
        this.error = error;
      }

    );
    console.log("removed.."+id);
    this.refresh()
  }
  //on refresh reinitialise the component to get fresh data from API
  refresh(){  this.ngOnInit(); }


}
