import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  /*create(product) {
    return this.db.list("/products").push(product);
  }*/

  create(product) {
    return this.db.list("/products/").push(product);
  }

  // Get all products
  /* getAll() {
    return this.db.list("/products");
  }*/

  getAll() {
    return this.db
      .list("/products", (query) => query.orderByChild("category"))
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => ({
            key: a.payload.key,
            ...(a.payload.val() as {}),
          }))
        )
      );
  }

  get(productId) {
    //
    return this.db.object("/products/" + productId).valueChanges();
  }
  // get product by id
}
