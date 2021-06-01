import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../services/item.service";
import {MenuService} from "../../services/menu.service";
import {Menu} from "../../models/menu.model";

@Component({
  selector: 'app-front-menu',
  templateUrl: './front-menu.component.html',
  styleUrls: ['./front-menu.component.css']
})
export class FrontMenuComponent implements OnInit {

  public items: any[] | undefined
  public menus: Menu[] | undefined
  public error: any

  constructor(
    private itemService: ItemService,
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.getAll().subscribe(

      res => {
        this.menus = res;
      },
      error => {
        this.error = error;
      }

    )
  }

  displayItems(id: number) {
    this.itemService.getByMenu(id).subscribe(

      res => {
        this.items = res;
      },
      error => {
        this.error = error;
      }

    )
  }
}
