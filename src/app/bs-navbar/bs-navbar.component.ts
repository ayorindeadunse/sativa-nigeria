import { AngularFireAuth } from "@angular/fire/auth";
import { Component } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"],
})
export class BsNavbarComponent {
  user: firebase.User;
  constructor(private afAuth: AngularFireAuth) {
    // authstate is an Observable which represents the authentication
    // state of the current user, so we can just subscribe to it.

    afAuth.authState.subscribe((user) => (this.user = user));
  }

  logout() {
    this.afAuth.signOut();
  }
}
