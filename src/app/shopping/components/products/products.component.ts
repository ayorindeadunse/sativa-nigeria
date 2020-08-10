import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/shared/models/product";
import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";
import { ShoppingCartService } from "src/app/shared/services/shopping-cart.service";
import { ShoppingCart } from "src/app/shared/models/shopping-cart";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  products = [];
  filteredProducts: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    this.populateProduct();
  }

  private populateProduct() {
    this.productService
      .getAll()
      .switchMap((products) => {
        this.products = products;
        return this.route.queryParamMap;
      })
      .subscribe((params) => {
        this.category = params.get("category");
        this.applyFilter();
      });
  }

  private applyFilter() {
    this.filteredProducts = this.category
      ? this.products.filter((p) => p.category === this.category)
      : this.products;
  }
}
