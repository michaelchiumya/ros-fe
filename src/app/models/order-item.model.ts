import { CartItem } from 'ng-shopping-cart';

export class OrderItem extends CartItem {

  id: number | undefined;
  name: string | undefined;
  price: number | undefined;
  message: string | undefined;
  quantity: number | undefined;

  constructor(itemData: any) {
    super()
    this.id = itemData.id;
    this.name = itemData.name
    this.price = itemData.price
    this.message = itemData.message
    this.quantity = itemData.quantity
  }

  getId(): any {
  }

  getImage(): string {
    return "";
  }

  getName(): string {
    return "";
  }

  getPrice(): number {
    return 0;
  }

  getQuantity(): number {
    return 0;
  }

  setQuantity(quantity: number): void {
  }


  setMessage(orderMessage: string | undefined) {
    this.message = orderMessage;
  }
}
