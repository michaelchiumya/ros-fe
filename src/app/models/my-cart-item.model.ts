import {CartItem} from 'ng-shopping-cart';

export class MyCartItem extends CartItem {


  id: number ;
  name: string ;
  price: number ;
  message: string ;
  quantity: number = 1; //starting point before similar item is added

  constructor(itemData: any) {
    super()
    this.id = itemData.id;
    this.name = itemData.name
    this.price = itemData.price
    this.message = itemData.message

  }

  setId(id :any){
    this.id = id
  }

  getId(): any {
    return this.id
  }

  getImage(): string {
    return "";
  }

  getName(): string {
    return <string>this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getQuantity(): number {
    return this.quantity;
  }
  setQuantity(quantity: number): void {
    this.quantity = this.quantity + quantity
  }

}
