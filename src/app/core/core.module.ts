import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BsNavbarComponent } from "./components/bs-navbar/bs-navbar.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [SharedModule, RouterModule.forChild([])],
  declarations: [BsNavbarComponent],
  exports: [BsNavbarComponent],
})
export class CoreModule {}
