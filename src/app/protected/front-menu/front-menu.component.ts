import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../services/item.service";
import {MenuService} from "../../services/menu.service";
import {Menu} from "../../models/menu.model";
import { MyCartItem } from "../../models/my-cart-item.model";
import { CartService} from "ng-shopping-cart";
import {MatDialog} from "@angular/material/dialog";
import {MyOrdersComponent} from "../my-orders/my-orders.component";

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
  message: any;

  constructor(
    private itemService: ItemService,
    private menuService: MenuService,
    private cartService: CartService<MyCartItem>,
    public dialog: MatDialog
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

  addToOrder(item: MyCartItem){
// New item with some values set
    const orderItem = new MyCartItem(item)
    let newId = Math.random() * 1000;
    orderItem.setId(item.id + newId)
    this.cartService.addItem(orderItem)
    console.log( JSON.stringify( orderItem))
  }

  openDialog() {
    const dialogRef = this.dialog.open(MyOrdersComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
