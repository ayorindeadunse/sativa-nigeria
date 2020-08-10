import { ShoppingModule } from "./shopping/shopping.module";
import { AdminModule } from "./admin/admin.module";
//import { ShoppingCartService } from "./shared/services/shopping-cart.service";
//import { ProductService } from "./shared/services/product.service";
//import { CategoryService } from "./shared/services/category.service";
//import { AdminAuthGuard } from "./admin/services/admin-auth-guard.service";
//import { UserService } from "./shared/services/user.service";
//import { AuthGuard } from "./shared/services/auth-guard.service";
//import { AuthService } from "./shared/services/auth.service";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import { environment } from "./../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from "@angular/fire";
//import { AngularFireAuthModule } from "@angular/fire/auth";
//import { AngularFireDatabaseModule } from "@angular/fire/database";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { CoreModule } from "./core/core.module";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./shopping/components/products/products.component";
//import { ShoppingCartComponent } from "src/app/shopping/components/shopping-cart/shopping-cart.component";
//import { CheckOutComponent } from "./check-out/check-out.component";
//import { OrderSuccessComponent } from "./order-success/order-success.component";
//import { MyOrdersComponent } from "./my-orders/my-orders.component";
//import { AdminProductsComponent } from "src/app/admin/components/admin-products/admin-products.component";
//import { AdminOrdersComponent } from "src/app/admin/components/admin-orders/admin-orders.component";
//import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
//import { ProductFormComponent } from "src/app/admin/components/product-form/product-form.component";
//import { FormsModule } from "@angular/forms";
//import { DataTablesModule } from "angular-datatables";
//import { ProductFilterComponent } from "src/app/shopping/components/products/product-filter/product-filter.component";
//import { ProductCardComponent } from "./product-card/product-card.component";
//import { ProductQuantityComponent } from "./shared/components/product-quantity/product-quantity.component";
import { SharedModule } from "src/app/shared/shared.module";
//import { ShoppingCartSummaryComponent } from "./shopping/components/shopping-cart-summary/shopping-cart-summary.component";
//import { AdminOrderDetailsComponent } from "src/app/admin/components/admin-orders/admin-order-details/admin-order-details.component";
@NgModule({
  declarations: [
    AppComponent,
    //BsNavbarComponent,
    //HomeComponent,
    //ProductsComponent,
    //ShoppingCartComponent,
    //CheckOutComponent,
    //OrderSuccessComponent,
    //MyOrdersComponent,
    //AdminProductsComponent,
    //AdminOrdersComponent,
    //LoginComponent,
    //ProductFormComponent,
    //ProductFilterComponent,
    //ProductCardComponent,
    //ProductQuantityComponent,
    //ShoppingCartSummaryComponent,
    //AdminOrderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    CoreModule,
    ShoppingModule,
    //DataTablesModule,
    // DataTablesModule.forRoot(),
    //FormsModule,
    //AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFireAuthModule,
    //AngularFireDatabaseModule,

    RouterModule.forRoot([
      { path: "", component: ProductsComponent },
      { path: "login", component: LoginComponent },

      { path: "**", component: HomeComponent },
    ]),
  ],
  // RouterModule.forRoot([
  //  { path: "", component: ProductsComponent },
  //{ path: "products", component: ProductsComponent },
  // { path: "shopping-cart", component: ShoppingCartComponent },
  // { path: "login", component: LoginComponent },
  /* {
        path: "check-out",
        component: CheckOutComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "order-success",
        component: OrderSuccessComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "admin/products/new",
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: "admin/products/:id",
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: "admin/products",
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: "admin/orders",
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      {
        path: "my/orders",
        component: MyOrdersComponent,
        canActivate: [AuthGuard],
      },*/
  //  ]),
  //NgbModule,
  //],
  providers: [
    //AuthService,
    // AuthGuard,
    //UserService,
    //AdminAuthGuard,
    //CategoryService,
    //ProductService,
    //ShoppingCartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
