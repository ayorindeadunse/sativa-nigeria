import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { map } from "rxjs/internal/operators/map";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  getAll() {
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
