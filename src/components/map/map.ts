import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as GoogleMaps from "google-maps"

/**
 * A map containing and managing component.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent implements AfterViewInit {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor() {
  }

  ngAfterViewInit(){
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
