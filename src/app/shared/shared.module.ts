import { OrderService } from "src/app/shared/services/order.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DataTablesModule } from "angular-datatables";
import { ProductCardComponent } from "../shared/components/product-card/product-card.component";
import { ProductQuantityComponent } from "../shared/components/product-quantity/product-quantity.component";
import { AuthGuard } from "../shared/services/auth-guard.service";
import { AuthService } from "../shared/services/auth.service";
import { CategoryService } from "../shared/services/category.service";
import { ProductService } from "../shared/services/product.service";
import { ShoppingCartService } from "../shared/services/shopping-cart.service";
import { UserService } from "../shared/services/user.service";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ProductCardComponent, ProductQuantityComponent],
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    //CustomFormsModule,
    DataTablesModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
  ],
})
export class SharedModule {}
