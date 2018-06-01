import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as GoogleMaps from "google-maps"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
    GoogleMaps.load(google => {
        
      let latLng = new google.maps.LatLng(31.778018, 35.235324);
  
      let mapOptions: google.maps.MapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true
      }
  
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  
    })
  }


}
