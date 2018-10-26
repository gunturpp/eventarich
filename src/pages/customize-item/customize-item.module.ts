import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomizeItemPage } from './customize-item';

@NgModule({
  declarations: [
    CustomizeItemPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomizeItemPage),
  ],
})
export class CustomizeItemPageModule {}
