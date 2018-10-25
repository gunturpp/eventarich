import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CreateeventPage } from '../pages/createevent/createevent';
import { TabsPage } from '../pages/tabs/tabs';
import { UploadeventPage } from '../pages/uploadevent/uploadevent';
import { EventdetailPage } from '../pages/eventdetail/eventdetail';
import { TicketbuyPage } from '../pages/ticketbuy/ticketbuy';
import { PaymentPage } from '../pages/payment/payment';
import { InvoiceDetailPage } from '../pages/invoice-detail/invoice-detail';
import { Autosize } from '../directives/autosize/autosize';
import { Camera } from '@ionic-native/camera';
import { EventPacketPage } from '../pages/event-packet/event-packet';
import { EventPacketCustomizePage } from '../pages/event-packet-customize/event-packet-customize';
import { EventSearchPage } from '../pages/event-search/event-search';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OnboardingPage,
    LoginPage,
    RegisterPage,
    CreateeventPage,
    UploadeventPage,
    EventdetailPage,
    TicketbuyPage,
    PaymentPage,
    InvoiceDetailPage,
    EventPacketPage,
    EventPacketCustomizePage,
    EventSearchPage,
    ProfilePage,

    TabsPage,

    
    Autosize
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OnboardingPage,
    LoginPage,
    RegisterPage,
    CreateeventPage,
    UploadeventPage,
    EventdetailPage,
    TicketbuyPage,
    PaymentPage,
    InvoiceDetailPage,
    EventPacketPage,
    EventPacketCustomizePage,
    EventSearchPage,
    ProfilePage,

    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StatusBar,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
