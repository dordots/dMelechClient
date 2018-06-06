import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

enum TfilaType {
  MORNING = 'שחרית',
  AFTERNOOT = 'מנחה',
  EVENING = 'ערבית'
};

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  SynagogueList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    this.SynagogueList = [{
      synagogueName: 'אוהל משה',
      soonMinyanType: TfilaType.EVENING,
      soonMinyanTime: '19:30',
      lastUpdatedTime: 'לפני 2 ימים',
      distanceString: '300 מטרים'
    },
    {
      synagogueName: 'בית יעקב',
      soonMinyanType: TfilaType.EVENING,
      soonMinyanTime: '19:20',
      lastUpdatedTime: 'לפני 2 ימים',
      distanceString: '403 מטרים'
    },
    {
      synagogueName: 'אוהל שרה',
      soonMinyanType: TfilaType.EVENING,
      soonMinyanTime: '19:24',
      lastUpdatedTime: 'לפני 8 ימים',
      distanceString: '200 מטרים'
    }];
   }
}
