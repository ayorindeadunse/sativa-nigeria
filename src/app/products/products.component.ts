import { CategoryService } from "./../category.service";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../models/Product";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent {
  category: string;
  categories$;
  products = [];
  filteredProducts: Product[] = [];

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    categoryService: CategoryService
  ) {
    productService.getAll().subscribe((products) => {
      this.products = products;
      route.queryParamMap.subscribe((params) => {
        this.category = params.get("category");
        this.filteredProducts = this.category
          ? this.products.filter((p) => p.category === this.category)
          : this.products;
      });
    });
    this.categories$ = categoryService.getAll();
  }
  /*async ngOnInit() {
    // this.cart$ = await this.cartService.getCart();
    await this.populateProduct();
  }

  private populateProduct() {
    this.categories$ = this.categoryService.getAll();
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
  }*/
}
