import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController, App } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TabsPage } from '../tabs/tabs';
import { PacketPage } from '../packet/packet';

@Component({
  selector: 'page-uploadevent',
  templateUrl: 'uploadevent.html',
})
export class UploadeventPage {

  image:any;
  validPhoto= false;

  minDate:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public actionSheetCtrl : ActionSheetController,
    public app: App,
    private camera: Camera) {
      
    this.minDate = new Date().toISOString();
    this.minDate = this.minDate.substr(0, this.minDate.indexOf('T'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadeventPage');
  }

  upload(){
    this.app.getRootNav().push(PacketPage);
  }

  changePicture(){
    console.log("aw")
    let confirm = this.alertCtrl.create({
      title: 'Perbaharui gambar kegiatan?',
      message: 'anda dapat mengunggah ulang gambar',
      buttons: [
        {
          text: 'Batal',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Perharui',
          handler: () => {
            console.log('Agree clicked');
            this.updatePicture(); 
          }
        }
      ]
    });
      confirm.present();
  }



  updatePicture() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilihan',
      buttons: [
        {
          text: 'Ambil Gambar Baru',
          role: 'ambilGambar',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Pilih Dari Galleri',
          role: 'gallery',
          handler: () => {
            this.getPhotoFromGallery();
          }
        }
      ]
    });
    actionSheet.present();
  }

  async takePicture(){
    try {
      const options : CameraOptions = {
        quality: 50, //to reduce img size
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL, //to make it base64 image
        encodingType: this.camera.EncodingType.JPEG,
        mediaType:this.camera.MediaType.PICTURE,
        correctOrientation: true
      }

      const result =  await this.camera.getPicture(options);

      this.image = 'data:image/jpeg;base64,' + result;

      this.validPhoto=true;

    }
    catch (e) {
      console.error(e);
      alert("error");
    }

  }

  getPhotoFromGallery(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType     : this.camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 600,
        targetHeight: 600
    }).then((imageData) => {
      // this.base64Image = imageData;
      // this.uploadFoto();
      this.image = 'data:image/jpeg;base64,' + imageData;
      this.validPhoto=true;
      }, (err) => {
    });
  }

}
