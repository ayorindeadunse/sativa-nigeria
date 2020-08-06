import { ShoppingCartService } from "./../shopping-cart.service";
import { Component, Input } from "@angular/core";
import { Product } from "../models/Product";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"],
})
export class ProductCardComponent {
  @Input("product") product: Product;
  @Input("show-actions") showActions = true;
  constructor(private cartService: ShoppingCartService) {}

  addToCart(product: Product) {
    // Get shopping cart ID from local storage.
    let cartId = localStorage.getItem("cartId");
    // if there's no shopping cart Id, we'll create one. Therefore, we connect to firebase to get the data. Create
    // a shopping cart service for interaction with firebase.
    if (!cartId) {
      this.cartService.create().then((result) => {
        localStorage.setItem("cartId", result.key);

        // Add product to cart
      });
    } else {
      // Add product to shopping cart.
    }
  }
}
