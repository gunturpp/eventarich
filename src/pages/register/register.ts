import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  submitted = false;
  lihat = true;
  status = "password";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  showPassword(){
    this.status = "text";
    this.lihat = false;
    console.log(this.status);
  }

  hidePassword(){
    this.status = "password";
    this.lihat = true;
    console.log(this.status);
  }

  masuk(){
    this.navCtrl.setRoot(LoginPage);
  }

  daftar(form: NgForm) {
    
    this.submitted = true;

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    if(form.valid){
      
      loading.present();    

      setTimeout(() => { 
        this.navCtrl.setRoot(TabsPage)
        loading.dismiss();     
      }, 1000);
    }
  }

}
