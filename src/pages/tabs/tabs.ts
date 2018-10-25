import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { UploadeventPage } from '../uploadevent/uploadevent';
import { NavParams } from 'ionic-angular';
import { CreateeventPage } from '../createevent/createevent';
import { EventSearchPage } from '../event-search/event-search';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  indexSelected:any = 0;

  tab1Root = HomePage;
  tab2Root = EventSearchPage;
  tab3Root = UploadeventPage;
  tab4Root = CreateeventPage;
  tab5Root = ProfilePage;

  constructor(public navParams: NavParams) {
    
    this.indexSelected = this.navParams.data;
    console.log(this.indexSelected);
    
  }

  getSelectedIndex(){
    return this.indexSelected
  }
}
