import { Component, ViewChild, ElementRef, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as GoogleMaps from "google-maps"
import GoogleMapsLoader from 'google-maps';

/**
 * A map containing and managing component.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent implements OnInit, OnChanges {

  @Input("objects") objects: { location: google.maps.LatLngLiteral }[] = [];
  @ViewChild('map') mapElement: ElementRef;

  markers: google.maps.Marker[] = [];
  mapObject: google.maps.Map;
  googleMapsAPI: GoogleMaps.google;
  
  constructor() {
    GoogleMapsLoader.KEY = 'AIzaSyBCptJVdxT9qytWXFkm4cVfXa6qdDWOncI';
  }

  ngOnInit(){
    this.loadMap(() => this.displayCurentObjects());
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes['objects'] && !changes['objects'].firstChange) {
      this.displayCurentObjects();
    }
  }

  displayCurentObjects() {
    this.removeAllMarkers();
    this.setMarkersForObjects();
  }

  setMarkersForObjects() {
    GoogleMaps.load(google => {
      this.objects.forEach(object => {

      let marker = new google.maps.Marker({
        position: object.location,
        map: this.mapObject
      });
      
      this.markers.push(marker);
    });
  });
  }

  removeAllMarkers() {
    this.setMapOnAllMarkers(null);
    this.markers = [];
  }

  setMapOnAllMarkers(map: google.maps.Map) {
    this.markers.forEach(marker => {
      marker.setMap(this.mapObject);
    })
  }
 
  loadMap(onMapLoadCallback: Function){
    GoogleMaps.load(google => {
      let latLng = new google.maps.LatLng(31.778018, 35.235324);
  
      let mapOptions: google.maps.MapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true,
        key: '32dsfsad'
      }

 
      this.mapObject = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      onMapLoadCallback();
    })
  }
}
