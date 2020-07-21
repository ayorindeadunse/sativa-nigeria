import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  /* getCategories() {
    return this.db.list("/categories").snapshotChanges();
  } */

  getCategories() {
    return this.db
      .list("/categories", (query) => query.orderByChild("name"))
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
}
