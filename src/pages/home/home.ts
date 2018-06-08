import { LocationTrackProvider } from './../../providers/location-track/location-track';
import { ISynagogue, IMikve, IYeshiva } from './../../models/Location';
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ILocation } from "../../models/Location";
import { ICoordinates } from "../../models/Coordinates";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})

export class HomePage {
  mapMode : boolean = true;
  locations: ILocation[] = [];
  centerCoordinates: ICoordinates;

  constructor(public navCtrl: NavController,
              public locationTrack: LocationTrackProvider) {

    // Temple mount fallback coordinates
    this.centerCoordinates = { lat: 31.776725, lng: 35.234514 };
    this.getCurrentCoordinates();

    this.locations = [
      {
        id: '213-asd',
        name: "הכותל המערבי",
        coordinates: { lat: 31.776725, lng: 35.234514 },
        type: 'synagogue'
      } as ISynagogue,
      {
        id: '213-asr',
        name: "בית כנסת החורבה",
        coordinates: { lat: 31.775367, lng: 35.231167 },
        type: 'synagogue'
      } as ISynagogue,
      {
        id: '213-asr',
        name: "קבר דוד המלך",
        coordinates: { lat: 31.771712, lng: 35.229415 },
        type: 'synagogue'
      } as ISynagogue,
      {
        id: '213-ast',
        name: "מקווה העיר העתיקה",
        coordinates: { lat: 31.776017, lng: 35.232270 },
        type: 'mikve'
      } as IMikve,
      {
        id: '213-asy',
        name: "ישיבת אש התורה",
        coordinates: { lat: 31.775806, lng: 35.233108 },
        type: 'yeshiva'
      } as IYeshiva,
      {
        id: '213-asy',
        name: "ישיבת נתיב אריה",
        coordinates: { lat: 31.776671, lng: 35.233195 },
        type: 'yeshiva'
      } as IYeshiva,
      {
        id: '213-asy',
        name: "ישיבת עטרת כוהנים",
        coordinates: { lat: 31.779687, lng: 35.232410 },
        type: 'yeshiva'
      } as IYeshiva
    ];
  }
  toggle_view_options(){
    this.mapMode = !this.mapMode;
  }

  getCurrentCoordinates() {

    this.locationTrack.getCurrentCoordinates()
      .then(coords => this.centerCoordinates = coords)
      .catch(err => console.log(`err: ${err}`));
  }
}
