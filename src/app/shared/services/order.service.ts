import { ShoppingCartService } from "./shopping-cart.service";
import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(
    private db: AngularFireDatabase,
    private shoppingCartService: ShoppingCartService
  ) {}

  // Get all orders
  getOrders() {
    return this.db
      .list("/orders")
      .snapshotChanges()
      .map((actions) => {
        return actions.map((action) => ({
          key: action.key,
          ...(action.payload.val() as {}),
        }));
      });
  }

  // Get a single order
  getSingleOrder(id) {
    return this.db.object("/orders/" + id).valueChanges();
  }

  // place order method
  async placeOrder(order) {
    let result = await this.db.list("/orders").push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  // Get orders by a user
  getOrdersByUser(userId: string) {
    return this.db
      .list("/orders", (ref) => ref.orderByChild("userId").equalTo(userId))
      .snapshotChanges()
      .map((actions) => {
        return actions.map((action) => ({
          key: action.key,
          ...(action.payload.val() as {}),
        }));
      });
  }
}
