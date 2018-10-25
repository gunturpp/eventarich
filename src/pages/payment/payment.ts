import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InvoiceDetailPage } from '../invoice-detail/invoice-detail';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  isBank: boolean = false;  
  isCredit: boolean = false;  
  isGopay: boolean = false;
  isOvo: boolean = false;
  isIndomaret: boolean = false;

  bankChoosen :any = null;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  pay(){
    if(this.bankChoosen) this.navCtrl.push(InvoiceDetailPage);
    else{
      const alert = this.alertCtrl.create({
        title: 'Pilih Metode',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  toggleBank(){
    this.isBank = !this.isBank;

    // this.isBank = false;
    this.isCredit = false;
    this.isGopay = false;
    this.isOvo = false;
    this.isIndomaret = false;

    if(!this.isBank) this.bankChoosen = null;
  }

  toggleCredit(){
    this.isCredit = !this.isCredit;

    this.isBank = false;
    // this.isCredit = false;
    this.isGopay = false;
    this.isOvo = false;
    this.isIndomaret = false;

    if(!this.isCredit) this.bankChoosen = null;
  }

  toggleGopay(){
    this.isGopay = !this.isGopay;
    
    this.isBank = false;
    this.isCredit = false;
    // this.isGopay = false;
    this.isOvo = false;
    this.isIndomaret = false;

    if(!this.isGopay) this.bankChoosen = null;
  }

  toggleOvo(){
    this.isOvo = !this.isOvo;
    
    this.isBank = false;
    this.isCredit = false;
    this.isGopay = false;
    // this.isOvo = false;
    this.isIndomaret = false;

    if(!this.isOvo) this.bankChoosen = null;
  }

  toggleIndomaret(){
    this.isIndomaret = !this.isIndomaret;
    
    this.isBank = false;
    this.isCredit = false;
    this.isGopay = false;
    this.isOvo = false;
    // this.isIndomaret = false;

    if(!this.isIndomaret) this.bankChoosen = null;
  }

}
