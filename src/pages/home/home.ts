import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ILocation } from '../../models/Location';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  objects: { location: ILocation }[] = [];
  centerPosition: ILocation;

  constructor(public navCtrl: NavController) {

    this.centerPosition = { lat: 31.776725, lng: 35.234514 };
    this.objects = [
      { location: { lat: 31.776725, lng: 35.234514 } },
      { location: { lat: 31.775367, lng: 35.231167 } }
    ]
  }
}
