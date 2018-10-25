import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-invoice-detail',
  templateUrl: 'invoice-detail.html',
})
export class InvoiceDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceDetailPage');
  }

  done(){
    this.navCtrl.setRoot(TabsPage);
  }

}
