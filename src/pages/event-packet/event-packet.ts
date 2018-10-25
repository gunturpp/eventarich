import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventPacketCustomizePage } from '../event-packet-customize/event-packet-customize';

@Component({
  selector: 'page-event-packet',
  templateUrl: 'event-packet.html',
})
export class EventPacketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPacketPage');
  }

  toCustomize(){
    this.navCtrl.push(EventPacketCustomizePage);
  }

}
