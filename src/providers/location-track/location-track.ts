import { Injectable } from "@angular/core";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { ICoordinates } from "../../models/Coordinates";

/*
  Tracking the location of the current device.
*/
@Injectable()
export class LocationTrackProvider {
  constructor(private geolocation: Geolocation) {}

  getCurrentCoordinates(): Promise<ICoordinates> {
    return this.geolocation
      .getCurrentPosition()
      .then(this.positionToCoordinates);
  }

  getCurrentCoordinatesSub(): Observable<ICoordinates> {
    return this.geolocation
      .watchPosition({
        enableHighAccuracy: true
      })
      .pipe(map(this.positionToCoordinates));
  }

  private positionToCoordinates(pos: Geoposition): ICoordinates {
    let coords: ICoordinates = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    };
    return coords;
  }
}
