import { ICoordinates } from "./../../models/Coordinates";
import { Injectable } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation";

/*
  Provides info about the location of the current device.
*/
@Injectable()
export class LocationTrackProvider {
  constructor(public geolocation: Geolocation) {}

  getCurrentCoordinates(): Promise<ICoordinates> {
    return this.geolocation.getCurrentPosition().then(position => {
      let coordinates: ICoordinates = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      return coordinates;
    });
  }
}
