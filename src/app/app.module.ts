import { HomeComponent } from "src/app/home/home.component";
import { LoginComponent } from "src/app/login/login.component";
import { ShoppingModule } from "./shopping/shopping.module";
import { AdminModule } from "./admin/admin.module";
import { RouterModule } from "@angular/router";
import { environment } from "./../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from "@angular/fire";
import { NgModule } from "@angular/core";
//import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { ProductsComponent } from "./shopping/components/products/products.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    CoreModule,
    ShoppingModule,

    AngularFireModule.initializeApp(environment.firebase),

    RouterModule.forRoot([
      { path: "", component: ProductsComponent },
      { path: "login", component: LoginComponent },

      { path: "**", component: HomeComponent },
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
