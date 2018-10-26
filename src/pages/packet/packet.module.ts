import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacketPage } from './packet';

@NgModule({
  declarations: [
    PacketPage,
  ],
  imports: [
    IonicPageModule.forChild(PacketPage),
  ],
})
export class PacketPageModule {}
