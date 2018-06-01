import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  objects: { location: google.maps.LatLngLiteral }[] = [];

  constructor(public navCtrl: NavController) {

    this.objects = [
      { location: { lat: 31.776725, lng: 35.234514 } },
      { location: { lat: 31.775367, lng: 35.231167 } }
    ]
  }
}
