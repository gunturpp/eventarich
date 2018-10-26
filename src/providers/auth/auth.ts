import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { HomePage } from "../../pages/home/home";

@Injectable()
export class AuthProvider {
  constructor() {
    console.log("Hello AuthProvider Provider");
  }
  
  // login to firebase
  emailLogin(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(success => {
        localStorage.setItem("currentUser", firebase.auth().currentUser.uid);
      })
      .catch(error => {
      });
  }
  // register new account to firebase
  register(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(success => {
       alert("Berhasil membuat akun. Silahkan login!");
      })
      .catch(error => {
        alert(error.message);
      });
  }
}
