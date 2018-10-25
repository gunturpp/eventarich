import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TicketbuyPage } from '../ticketbuy/ticketbuy';

@Component({
  selector: 'page-eventdetail',
  templateUrl: 'eventdetail.html',
})
export class EventdetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventdetailPage');
  }

  order(){
    this.navCtrl.push(TicketbuyPage);
  }

}
