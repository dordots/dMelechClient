import { Component } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DatesToStringProvider } from '../../providers/dates-to-string/dates-to-string'

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

  constructor(public datesToString: DatesToStringProvider) {     
    let dateOfMinyan = new Date('June 8, 2018 03:24:00');

    this.SynagogueList = [{
      synagogueName: 'אוהל משה',
      soonMinyanType: TfilaType.EVENING,
      soonMinyanTime: '19:30',
      lastUpdatedTime: datesToString.getDatesString(dateOfMinyan),
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
