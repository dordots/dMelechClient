import { Injectable } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Subscriber } from 'rxjs/Subscriber';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ICoordinates } from '../../models/Coordinates';

/*
  Provides info about the location of the current device.
*/
@Injectable()
export class LocationTrackProvider {

  constructor(private geolocation: Geolocation) {

  }

  getCurrentLocation(): Promise<ICoordinates> {
    return this.geolocation.getCurrentPosition()
      .then(this.positionToLocation);
  }

  getCurrentLocationSub(): Observable<ICoordinates> {
    return this.geolocation.watchPosition({
      enableHighAccuracy: true
    }).pipe(map(this.positionToLocation));
  }

  private positionToLocation(pos: Geoposition): ICoordinates {
    
    let location: ICoordinates = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    }
    return location;
  }
}
