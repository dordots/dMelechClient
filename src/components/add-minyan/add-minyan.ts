import { Component } from '@angular/core';
import { IonicModule, ViewController } from 'ionic-angular';

@Component({
  selector: 'add-minyan',
  templateUrl: 'add-minyan.html'
})

export class AddMinyanComponent {

  private daysInWeek : any;
  private keys : any;
  private viewCtrl:ViewController;

  constructor(public _viewCtrl: ViewController ) {
    this.daysInWeek  =  { 'א': "light", 'ב': "light",'ג': "light",'ד': "light",'ה': "light",'ו': "light",'ז': "light",}
    this.keys = Object.keys(this.daysInWeek);
    this.viewCtrl = _viewCtrl;
  }

  toggleDay(key : string) {
    this.daysInWeek[key]= (this.daysInWeek[key] == "light") ? "primary" : "light" ;
  }

  add() {
    this.viewCtrl.dismiss();
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
