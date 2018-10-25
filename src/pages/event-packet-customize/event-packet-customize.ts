import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-event-packet-customize',
  templateUrl: 'event-packet-customize.html',
})
export class EventPacketCustomizePage {
  
  finalPrice: any = 0;

  venuePrice:any = 0;
  soundPrice:any = 0;
  projectorPrice:any = 0;
  chairPrice:any = 0;
  tablePrice:any = 0;
  stagePrice:any = 0;

  venueChoosen:any;
  soundChoosen:any;
  projectorChoosen:any;
  chairChoosen:any;
  tableChoosen:any;
  stageChoosen:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.updateFinalPrice();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPacketCustomizePage');
  }

  pay(){
    this.navCtrl.push(PaymentPage);
  }

  venueUpdate(){
    switch(this.venueChoosen) { 
      case "GWW": { 
        this.venuePrice = 5000000;
        break; 
      } 
      case "Audit Mandiri": {
        this.venuePrice = 500000; 
        break; 
      } 
      case "Audit AHN": {
        this.venuePrice = 1000000; 
        break; 
      } 
      case "Hotel Duta Berlian": {
        this.venuePrice = 7000000; 
        break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
    } 

    this.updateFinalPrice();
  }

  soundUpdate(){
    switch(this.soundChoosen) { 
      case "A": { 
        this.soundPrice = 15000000;
        break; 
      } 
      case "B": {
        this.soundPrice = 10000000; 
        break; 
      } 
      case "C": {
        this.soundPrice = 5000000; 
        break; 
      } 
      case "-": {
        this.soundPrice = 0; 
        break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
    } 

    this.updateFinalPrice();
  }

  projectorUpdate(){
    switch(this.projectorChoosen) { 
      case "A": { 
        this.projectorPrice = 5000000;
        break; 
      } 
      case "B": {
        this.projectorPrice = 2500000; 
        break; 
      } 
      case "C": {
        this.projectorPrice = 500000; 
        break; 
      } 
      case "-": {
        this.projectorPrice = 0; 
        break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
    } 

    this.updateFinalPrice();
  }

  chairUpdate(){
    if(this.chairChoosen=="-") this.chairChoosen = 0;
    this.chairPrice = this.chairChoosen * 2500;
    this.updateFinalPrice();
  }
  
  tableUpdate(){
    if(this.tableChoosen=="-") this.tableChoosen = 0;
    this.tablePrice = this.tableChoosen * 25000;
    this.updateFinalPrice();
  }

  stageUpdate(){
    switch(this.stageChoosen) { 
      case "A": { 
        this.stagePrice = 50000000;
        break; 
      } 
      case "B": {
        this.stagePrice = 25000000; 
        break; 
      } 
      case "C": {
        this.stagePrice = 12500000; 
        break; 
      } 
      case "-": {
        this.stagePrice = 0; 
        break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
    } 

    this.updateFinalPrice();
  }
  
  updateFinalPrice(){
    this.toRp(this.venuePrice + this.soundPrice + this.projectorPrice + this.chairPrice + this.tablePrice + this.stagePrice);
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
