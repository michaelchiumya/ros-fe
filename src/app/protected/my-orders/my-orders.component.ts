import { Component, OnInit } from '@angular/core';
import {BaseCartItem, CartService} from "ng-shopping-cart";


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  public items: BaseCartItem[] | undefined;

  constructor(
    private cartService: CartService<BaseCartItem>
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }


  clear() {
    this.cartService.clear()
  }

  addItemToOrder(id: any) {
    let item = this.cartService.getItem(id);
    let quantity = item.getQuantity();
    item.setQuantity(quantity++)
  }

  removeItemToOrder(id: any) {
    let item = this.cartService.getItem(id);
    let quantity = item.getQuantity();
    item.setQuantity(quantity--)
  }
}
