import { Component } from '@angular/core';
import { NavController, NavParams, DateTime } from 'ionic-angular';
import { Time } from '@angular/common';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  synagogueName: string;
  soonMinyanTime: string;
  soonMinyanType: string;
  lastUpdatedTime: string;
  distance: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let TfilaTime = new Date('June 05, 2018 19:24:00');
  
    this.synagogueName = 'אוהל משה';
    this.soonMinyanTime = TfilaTime.getHours() + ':' +TfilaTime.getMinutes();
    this.soonMinyanType = 'ערבית';
    this.lastUpdatedTime = 'לפני 2 ימים';
    this.distance = '300 מטרים';
   }
}
