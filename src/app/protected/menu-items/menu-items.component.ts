import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {ItemService} from "../../services/item.service";
import {Menu} from "../../models/menu.model";
import {combineLatest, Observable} from "rxjs";
import {ActivatedRoute, Data, ParamMap, Params, Router} from "@angular/router";


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

   menu?: any[];
   items?: any[];
   menuId?: any;
   error?: any;

  constructor(
    private menuService: MenuService,
    private itemService: ItemService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe(
      (params: ParamMap) => {

         this.menuId = params.get('id');

         this.itemService.getByMenu(this.menuId).subscribe(
          res => { this.items = res },
          error => { this.error = error }       )


  })
 console.log(this.items)

}
}
