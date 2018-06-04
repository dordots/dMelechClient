import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  objects: { location: google.maps.LatLngLiteral }[] = [];
  map_mode : boolean = true;

  constructor(public navCtrl: NavController) {

    this.objects = [
      { location: { lat: 31.776725, lng: 35.234514 } },
      { location: { lat: 31.775367, lng: 35.231167 } }
    ]

    this.map_mode = true;
  }
  toggle_view_options(){
    this.map_mode = !this.map_mode;
  }
}
