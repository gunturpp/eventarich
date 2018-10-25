import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { EventPacketPage } from '../event-packet/event-packet';

@Component({
  selector: 'page-createevent',
  templateUrl: 'createevent.html',
})
export class CreateeventPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateeventPage');
  }

  submit(){
    this.app.getRootNav().push(EventPacketPage);
  }

}
