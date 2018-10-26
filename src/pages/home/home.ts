import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { CreateeventPage } from '../createevent/createevent';
import { UploadeventPage } from '../uploadevent/uploadevent';
import { EventdetailPage } from '../eventdetail/eventdetail';
import { DataProvider } from "../../providers/data/data";
import * as firebase from "firebase";
import { AngularFireDatabase } from 'angularfire2/database';
import { LoginPage } from '../login/login';
import { AdminPage } from '../admin/admin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userDoc:any;
  currentUser: any;
  role: any;
  constructor(
    public navCtrl: NavController,
    public dataProvider: DataProvider,
    public afd: AngularFireDatabase,
    public app: App) {

  }
  ionViewDidLoad(){
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
    setTimeout(() => { 
      if(this.currentUser == null) {
        this.navCtrl.setRoot(LoginPage)
      } else {
        console.log("current user", this.currentUser)
      }
      this.createUserData();
    }, 1000);
      // create new profile for first time
      this.getUserById();
  }
  goToAdmin() {
    this.navCtrl.setRoot(AdminPage);
  }
  createUserData() {
    firebase.database().ref("/users/" + this.currentUser.uid).once("value")
      .then(account => {
        if (!account.val()) {
          let user = this.currentUser;
          this.afd.object("/users/" + user.uid)
            .set({
              userId: user.uid,
              name: "name",
              role: "vendor",
              displayName: null,
              phoneNumber: null,
              photoURL: null,
              createdAt: "1540533271000",
              emailVerified: false
            })
        }
      });
  }
  getUserById() {
    this.dataProvider.getUser(this.currentUser.uid).subscribe(user =>{
      this.currentUser = user;
      this.role = user.role;
    })
  }
  toCreate(){
    this.app.getRootNav().push(UploadeventPage);
  }

  openDetail(){
    this.app.getRootNav().push(EventdetailPage);
  }
}
