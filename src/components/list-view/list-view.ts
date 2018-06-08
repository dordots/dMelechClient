import { Component } from '@angular/core';
import { IonicModule } from 'ionic-angular';

enum TfilaType {
  MORNING = 'שחרית',
  AFTERNOOT = 'מנחה',
  EVENING = 'ערבית'
};

@Component({
  selector: 'list-view',
  templateUrl: 'list-view.html'
})

export class ListViewComponent {
  SynagogueList: any;

  constructor() {
    var oneDay = 86400000; 
    let dateOfMinyan = new Date('December 17, 1995 03:24:00');
    let dateTimeNow = new Date('June 08, 2018 03:24:00');

    let diffDays = Math.round(Math.abs((dateOfMinyan.getTime() - dateTimeNow.getTime())/(oneDay)));
    
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
