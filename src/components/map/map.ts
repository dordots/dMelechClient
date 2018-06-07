import { Component, ViewChild, ElementRef, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import * as GoogleMaps from "google-maps"
import GoogleMapsLoader from 'google-maps';
import { ILocation } from '../../models/Location';
import { ICoordinates } from '../../models/Coordinates';
import { ActionSheetController } from 'ionic-angular';

/**
 * A map containing and managing component.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent implements OnInit, OnChanges {

  @Input("objects") objects: { location: ILocation }[] = [];
  @Output() onCurrentPositionRequest = new EventEmitter();
  @Input("locations") locations: ILocation[] = [];
  @Input("centerPosition") centerPosition: ICoordinates;
  @ViewChild('map') mapElement: ElementRef;

  markers: google.maps.Marker[] = [];
  mapObject: google.maps.Map;
  googleMapsAPI: GoogleMaps.google;
  
  constructor(public actionSheetCtrl: ActionSheetController) {
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
    if (changes['locations'] && !changes['locations'].firstChange) {
      this.displayCurentObjects();
    }
    
    if (changes['centerPosition'] && changes['centerPosition'].currentValue) {
      this.goToPosition(this.centerPosition);
    }
  }

  goToPosition(pos: ICoordinates) {
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
      this.locations.forEach(location => {

      let marker = new google.maps.Marker({
        icon: `assets/imgs/${location.type}.png`,
        position: location.coordinates,
        map: this.mapObject
      });
      marker.addListener('click', () => {
        this.openLocationDisplay(location)
      })
      this.markers.push(marker);
    });
  });
  }

  openLocationDisplay = (location: ILocation) => {
    this.actionSheetCtrl.create({
      title: location.name,
      buttons: [
        {
          text: "עדכון"
        },
        {
          text: "ניווט"
        }
      ]
    }).present();
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
