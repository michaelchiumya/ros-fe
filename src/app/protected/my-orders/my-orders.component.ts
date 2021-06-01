import { Component, OnInit } from '@angular/core';
import {BaseCartItem, CartService} from "ng-shopping-cart";
import { OrderService} from "../../services/order.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  public items: BaseCartItem[] | undefined;

  constructor(
    private cartService: CartService<BaseCartItem>,
    private orderService: OrderService

  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }


  clear() {
   console.log( this.cartService.getItems());
    this.cartService.clear()
  }

  makeOrder(){
  this.orderService.create(this.items)
    //window.print();
  }

  addItemToOrder(id: any) { }

  removeItemToOrder(id: any) {  }
}
