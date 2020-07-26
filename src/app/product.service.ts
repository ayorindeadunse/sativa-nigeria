import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product) {
    return this.db.list("/products/").push(product);
  }

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

  // get product by id
  get(productId) {
    //
    return this.db.object("/products/" + productId).valueChanges();
  }

  update(productID, product) {
    return this.db.object("/products/" + productID).update(product);
  }

  // delete
  delete(productId) {
    return this.db.object("/products/" + productId).remove();
  }
}
