import { AuthService } from "./../auth.service";
import { Component } from "@angular/core";
import * as firebase from "firebase";
import { AppUser } from "../models/app-user";
import { Router } from "@angular/router";

@Component({
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"],
})
export class BsNavbarComponent {
  appUser: AppUser;
  // make variable an Observable by using dollar sign
  constructor(private router: Router, private auth: AuthService) {
    // authstate is an Observable which represents the authentication
    // state of the current user, so we can just subscribe to it.
    // unwrap Observable in our template using the async pipe.
    // this pipe will automatically unsubscribe from the Observable
    // when the component is destroyed.
    auth.appUser$.subscribe((appUser) => {
      this.appUser = appUser;
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(["/"]);
  }
}
