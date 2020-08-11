import { LoginComponent } from "src/app/core/components/login/login.component";
import { HomeComponent } from "src/app/core/components/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BsNavbarComponent } from "./components/bs-navbar/bs-navbar.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [SharedModule, RouterModule.forChild([])],
  declarations: [BsNavbarComponent, HomeComponent, LoginComponent],
  exports: [BsNavbarComponent],
})
export class CoreModule {}
