import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/shared/services/auth-guard.service";
import { SharedModule } from "src/app/shared/shared.module";
import { CheckOutComponent } from "./components/check-out/check-out.component";
import { MyOrdersComponent } from "./components/my-orders/my-orders.component";
import { OrderSuccessComponent } from "./components/order-success/order-success.component";
import { ProductFilterComponent } from "./components/products/product-filter/product-filter.component";
import { ProductsComponent } from "./components/products/products.component";
import { ShoppingCartSummaryComponent } from "./components/shopping-cart-summary/shopping-cart-summary.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { ShippingFormComponent } from "./components/shipping-form/shipping-form.component";
import { MyOrdersDetailComponent } from "./components/my-orders/my-orders-detail/my-orders-detail.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "shopping-cart", component: ShoppingCartComponent },
      {
        path: "check-out",
        component: CheckOutComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "order-success/:id",
        component: OrderSuccessComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "my/orders",
        component: MyOrdersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "my/orders/:id",
        component: MyOrdersDetailComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
  declarations: [
    CheckOutComponent,
    ProductsComponent,
    ProductFilterComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    MyOrdersComponent,
    MyOrdersDetailComponent,
    OrderSuccessComponent,
  ],
})
export class ShoppingModule {}
