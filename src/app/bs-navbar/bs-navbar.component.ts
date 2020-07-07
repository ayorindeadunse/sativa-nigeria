import { AuthService } from "./../auth.service";
import { Component } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"],
})
export class BsNavbarComponent {
  // make variable an Observable by using dollar sign
  constructor(public auth: AuthService) {
    // authstate is an Observable which represents the authentication
    // state of the current user, so we can just subscribe to it.
    // unwrap Observable in our template using the async pipe.
    // this pipe will automatically unsubscribe from the Observable
    // when the component is destroyed.
  }

  logout() {
    this.auth.logout();
  }
}
