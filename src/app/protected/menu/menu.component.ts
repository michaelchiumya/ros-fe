import { Component, OnInit } from '@angular/core';
import {Menu} from "../../models/menu.model";
import {MenuService} from "../../services/menu.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

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
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //subscribe to the observer returned from get() assign menus to response of the observable
    this.menuService.get().subscribe(
      res => {
        this.menus = res;
      },
      error => {
        this.error = error;
      }
    );
  }

  editItem(id: number){

  }
  remove(id: number){
    this.menuService.delete(id).subscribe(
      res => {
        this.deleteInfo = res;
      },
      error => {
        this.error = error;
      }

    );
    console.log("clicked.."+id);
  }

  refresh(){
    this.ngOnInit();
  }

}
