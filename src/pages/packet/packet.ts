import { Component } from "@angular/core";
import { App, IonicPage, NavController, NavParams } from "ionic-angular";
import { CustomizeItemPage } from "../customize-item/customize-item";

/**
 * Generated class for the PacketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-packet",
  templateUrl: "packet.html"
})
export class PacketPage {
  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PacketPage");
  }
  choosePacket() {
    this.app.getRootNav().push(CustomizeItemPage);
  }
}
