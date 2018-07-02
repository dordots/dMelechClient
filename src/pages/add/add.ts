import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * add new synagogue/ lesson / mikve
 */

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  private daysInWeek : any;
  private keys : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.daysInWeek  =  { 'א': "light", 'ב': "light",'ג': "light",'ד': "light",'ה': "light",'ו': "light",'ז': "light",}
    this.keys = Object.keys(this.daysInWeek);
  }


  toggleDay(key : string) {
    this.daysInWeek[key]= (this.daysInWeek[key] == "light") ? "primary" : "light" ;
  }


}