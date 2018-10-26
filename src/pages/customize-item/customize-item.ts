import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the CustomizeItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customize-item',
  templateUrl: 'customize-item.html',
})
export class CustomizeItemPage {

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomizeItemPage');
  }
  next() {
    this.app.getRootNav().push(PaymentPage);
  }

}
