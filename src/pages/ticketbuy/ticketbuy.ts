import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-ticketbuy',
  templateUrl: 'ticketbuy.html',
})
export class TicketbuyPage {

  ticketQuantity:any = 1;
  price: any = 50000;

  finalPrice: any= 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toRp(this.price);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketbuyPage');
  }

  subTicket(){
    if(this.ticketQuantity>1) {
      this.ticketQuantity--;

      this.toRp(this.ticketQuantity * this.price);
    }     
  }
  
  addTicket(){
    if(this.ticketQuantity<100){
      this.ticketQuantity++;
    
      this.toRp(this.ticketQuantity * this.price);
    }
  }

  pay(){
    this.navCtrl.push(PaymentPage);
  }

  toRp(angka){
    var rev     = parseInt(angka, 10).toString().split('').reverse().join('');
    var rev2    = '';
    for(var i = 0; i < rev.length; i++){
        rev2  += rev[i];
        if((i + 1) % 3 === 0 && i !== (rev.length - 1)){
            rev2 += '.';
        }
    }
    this.finalPrice =  'Rp. ' + rev2.split('').reverse().join('') + ',00';
  }

}
