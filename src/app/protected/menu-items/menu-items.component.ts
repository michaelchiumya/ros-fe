import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {ItemService} from "../../services/item.service";
import {Menu} from "../../models/menu.model";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

   menu?: Observable<any>;
   items?: any;
   menuId?: number;
   error?: any;


  constructor(
    private menuService: MenuService,
    private itemService: ItemService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.menuId = this.router.snapshot.params.id;
    this.menuService.get(this.menuId).subscribe(
      res => {
        this.menu = res;
      },
      error => {
        this.error = error;
      }
    );


  this.itemService.getAll().subscribe(
    res => {  this.items = res;  },
    error => { this.error = error;}
);
}


}
