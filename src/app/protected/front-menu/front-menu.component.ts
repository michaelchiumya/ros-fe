import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../services/item.service";
import {MenuService} from "../../services/menu.service";
import {Menu} from "../../models/menu.model";
import {OrderItem} from "../../models/order-item.model";
import {BaseCartItem, CartService} from "ng-shopping-cart";

@Component({
  selector: 'app-front-menu',
  templateUrl: './front-menu.component.html',
  styleUrls: ['./front-menu.component.css']
})
export class FrontMenuComponent implements OnInit {

  public items: any[] | undefined
  public menus: Menu[] | undefined
  public error: any
  public orderMessage: string | undefined

  constructor(
    private itemService: ItemService,
    private menuService: MenuService,
    private cartService: CartService<BaseCartItem>
  ) { }

  ngOnInit(): void {
    this.menuService.getAll().subscribe(
      res => { this.menus = res;  },
      error => { this.error = error; }

    )
  }

  displayItems(id: number) {
    this.itemService.getByMenu(id).subscribe(
      res => { this.items = res },
      error => { this.error = error}
    )
  }

  addToOrder(item: OrderItem){

// New item with some values set
    const orderItem = new BaseCartItem(item);

    this.cartService.addItem(orderItem)
    console.log( JSON.stringify( orderItem))
  }
}
