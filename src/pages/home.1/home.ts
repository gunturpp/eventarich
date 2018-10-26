import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { CreateeventPage } from '../createevent/createevent';
import { UploadeventPage } from '../uploadevent/uploadevent';
import { EventdetailPage } from '../eventdetail/eventdetail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public app: App) {

  }

  toCreate(){
    this.app.getRootNav().push(UploadeventPage);
  }

  openDetail(){
    this.app.getRootNav().push(EventdetailPage);
  }
}
