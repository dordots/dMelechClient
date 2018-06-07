import { Component, ViewChild, ElementRef, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import * as GoogleMaps from "google-maps"
import GoogleMapsLoader from 'google-maps';
import { ILocation } from '../../models/Location';

/**
 * A map containing and managing component.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent implements OnInit, OnChanges {

  @Input("objects") objects: { location: ILocation }[] = [];
  @Input("centerPosition") centerPosition: ILocation;
  @Output() onCurrentPositionRequest = new EventEmitter();
  @ViewChild('map') mapElement: ElementRef;

  markers: google.maps.Marker[] = [];
  mapObject: google.maps.Map;
  googleMapsAPI: GoogleMaps.google;
  
  constructor() {
    GoogleMapsLoader.KEY = 'AIzaSyBCptJVdxT9qytWXFkm4cVfXa6qdDWOncI';
  }

  getCurrentPosition() {
    this.onCurrentPositionRequest.emit();
  }

  ngOnInit(){
    this.loadMap(() => {
      this.displayCurentObjects();
      this.goToPosition(this.centerPosition);
    });
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes['objects'] && !changes['objects'].firstChange) {
      this.displayCurentObjects();
    }
    
    if (changes['centerPosition'] && changes['centerPosition'].currentValue) {
      this.goToPosition(this.centerPosition);
    }
  }

  goToPosition(pos: google.maps.LatLngLiteral) {
    if (this.mapObject) {
      this.mapObject.panTo(pos);
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
  
      let mapOptions: google.maps.MapOptions = {
        center: this.centerPosition,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true
      }

 
      this.mapObject = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      onMapLoadCallback();
    })
  }
}
