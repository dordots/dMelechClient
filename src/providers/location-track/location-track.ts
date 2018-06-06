import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { ILocation } from '../../models/Location';

/*
  Provides info about the location of the current device.
*/
@Injectable()
export class LocationTrackProvider {

  constructor(public geolocation: Geolocation) {

  }

  getCurrentPosition(): Promise<ILocation> {
    return this.geolocation.getCurrentPosition().then(position => {
      let location: ILocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      return location;
    });
  }
}
