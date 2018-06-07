import { ErrorHandlerProvider } from './../../providers/error-handler/error-handler';
import { LocationTrackProvider } from './../../providers/location-track/location-track';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ICoordinates } from '../../models/Coordinates';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  objects: { location: ICoordinates }[] = [];
  centerLocation: ICoordinates;

  constructor(public navCtrl: NavController,
              private locationTrack: LocationTrackProvider,
              private errorHandler: ErrorHandlerProvider) {

    this.centerLocation = { lat: 31.776725, lng: 35.234514 };
    
    this.locationTrack.getCurrentLocationSub().subscribe(loc => {
      this.centerLocation = loc;
    }, err => {
      this.errorHandler.error("חלה שגיאה במציאת המיקום הנוכחי.");
    })
    
    this.objects = [
      { location: { lat: 31.776725, lng: 35.234514 } },
      { location: { lat: 31.775367, lng: 35.231167 } }
    ]
  }
}
