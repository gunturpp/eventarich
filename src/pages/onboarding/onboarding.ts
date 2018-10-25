import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingPage');
  }

  Lewati(){
    this.navCtrl.setRoot(HomePage);
  } 

  Masuk() {
    this.navCtrl.setRoot(LoginPage);
  }

  Daftar(){
    this.navCtrl.setRoot(RegisterPage);
  }

}
