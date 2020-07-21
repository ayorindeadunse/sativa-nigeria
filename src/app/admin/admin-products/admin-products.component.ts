import { ProductService } from "./../../product.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.css"],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  products: any[];
  //filteredProducts: any[];
  subscription: Subscription;

  constructor(public productService: ProductService) {
    // get all products from the server to be filtered by the client.
    this.subscription = this.productService
      .getAll()
      .subscribe((products) => (this.products = products));
    // title = "angulardatatables";
  }

  /*filter(query: string) {
    this.filteredProducts = query
      ? this.products.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        )
      : this.products;
  }*/
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 5,
      lengthMenu: [5, 10, 25],
      processing: true,
    };
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
