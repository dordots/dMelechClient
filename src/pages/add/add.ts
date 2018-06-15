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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
