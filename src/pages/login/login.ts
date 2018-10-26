import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from "../../providers/auth/auth";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  submitted = false;
  lihat = true;
  status = "password";
  email: any;
  password: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthProvider,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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

  daftar(){
    this.navCtrl.setRoot(RegisterPage);
  }

  comingSoon() {
    const prompt = this.alertCtrl.create({
      title: 'Forgot Password',
      message: "Masukkan email untuk reset password",
      inputs: [
        {
          name: 'email',
          placeholder: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  masuk(form: NgForm) {
    
    this.submitted = true;

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    if(form.valid){
      
      loading.present();    

      setTimeout(() => { 
        this.auth.emailLogin(this.email,this.password)
        this.navCtrl.setRoot(HomePage)
        loading.dismiss();     
      }, 2000);
    }
  }

}
