import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController, AlertController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { HomePage } from "../home/home";
import { NgForm } from "@angular/forms";
import { TabsPage } from "../tabs/tabs";
import { AuthProvider } from "../../providers/auth/auth";

@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
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
    public alertCtrl : AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }

  showPassword() {
    this.status = "text";
    this.lihat = false;
    console.log(this.status);
  }

  hidePassword() {
    this.status = "password";
    this.lihat = true;
    console.log(this.status);
  }

  masuk() {
    this.navCtrl.setRoot(LoginPage);
  }

  daftar(form: NgForm) {
    this.submitted = true;

    let loading = this.loadCtrl.create({
      content: "memuat.."
    });

    if (form.valid) {
      loading.present();
      setTimeout(() => {
        console.log(this.email, this.password);
        this.auth.register(this.email, this.password);
        loading.dismiss();
      }, 3000);
    }
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Berhasil membuat akun',
      subTitle: 'Login untuk masuk',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
