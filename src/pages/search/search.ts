import { HomePage } from "./../home/home";
import { IAdvancedQuery } from "./../../interfaces/SearchQueries";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ISynagogue, IYeshiva, IMikve } from "../../models/Location";
import { BackendApiProvider } from "../../providers/backend-api/backend-api";
import { ErrorHandlerProvider } from "../../providers/error-handler/error-handler";

/**
 * Search occurs in this page.
 */

@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {

  locations = [
    {
      id: "213-asd",
      name: "הכותל המערבי",
      coordinates: { lat: 31.776725, lng: 35.234514 },
      type: "synagogue"
    } as ISynagogue,
    {
      id: "213-asr",
      name: "בית כנסת החורבה",
      coordinates: { lat: 31.775367, lng: 35.231167 },
      type: "synagogue"
    } as ISynagogue,
    {
      id: "213-asr",
      name: "קבר דוד המלך",
      coordinates: { lat: 31.771712, lng: 35.229415 },
      type: "synagogue"
    } as ISynagogue,
    {
      id: "213-ast",
      name: "מקווה העיר העתיקה",
      coordinates: { lat: 31.776017, lng: 35.23227 },
      type: "mikve"
    } as IMikve,
    {
      id: "213-asy",
      name: "ישיבת אש התורה",
      coordinates: { lat: 31.775806, lng: 35.233108 },
      type: "yeshiva"
    } as IYeshiva,
    {
      id: "213-asy",
      name: "ישיבת נתיב אריה",
      coordinates: { lat: 31.776671, lng: 35.233195 },
      type: "yeshiva"
    } as IYeshiva,
    {
      id: "213-asy",
      name: "ישיבת עטרת כוהנים",
      coordinates: { lat: 31.779687, lng: 35.23241 },
      type: "yeshiva"
    } as IYeshiva
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public backendAPI: BackendApiProvider,
              private errorHandler: ErrorHandlerProvider) {}

    
  onSearchSubmit(searchQuery: IAdvancedQuery) {
    
    this.backendAPI.search(searchQuery).subscribe(
      foundLocations => {
        this.navCtrl.push(HomePage, { locations: this.locations, centerCoords: searchQuery.coordinates });
      },
      err => this.errorHandler.error(err)
    );

  }
}
