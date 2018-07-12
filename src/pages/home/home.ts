import { ErrorHandlerProvider } from "./../../providers/error-handler/error-handler";
import { LocationTrackProvider } from "./../../providers/location-track/location-track";
import { Component } from "@angular/core";
import { NavController, ActionSheetController, NavParams } from "ionic-angular";
import { ILocation } from "../../models/Location";
import { ICoordinates } from "../../models/Coordinates";
import { LoggingProvider } from "../../providers/logging/logging"
import { SearchPage } from "../search/search";
import { AddPage } from "../add/add";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  mapMode: boolean = true;
  locations: ILocation[] = [];
  centerCoords: ICoordinates;  
  activeTab: string;
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public locationTrack: LocationTrackProvider,
    private errorHandler: ErrorHandlerProvider,
    private logging : LoggingProvider,
    public actionSheetCtrl: ActionSheetController
  ) {
    this.activeTab = 'map';

    const navigationData = this.navParams.data;

    if (navigationData.locations) {
      this.locations = navigationData.locations;
    }
    
    if (navigationData.centerCoords) {
      this.centerCoords = navigationData.centerCoords;
    }
    else {
      this.getCurrentCoordinates();
    }
  }

  handleStartSearch() {
    this.navCtrl.push(SearchPage, {}, {
      animation: 'transition',
      animate: true,
      duration: 500,
      direction: 'forward'
    })
  }

  toggleToMap() {
    this.activeTab = 'map';
    this.logging.info({
      'screen': "Home",
      'action': "map view clicked "
    });
  }

  toggleToList(){
    this.activeTab = 'list';
    this.logging.info({
      'screen': "Home",
      'action': "list view clicked"
    });
  }

  addNewContent() {
    this.navCtrl.push(AddPage, {}, {
      animation: 'transition',
      animate: true,
      duration: 500,
      direction: 'forward'
    })
  }

  onLocationClicked(location: ILocation) {
    this.actionSheetCtrl
      .create({
        title: location.name,
        buttons: [
          {
            text: "עדכון"
          },
          {
            text: "ניווט"
          }
        ]
      })
      .present();
  }

  getCurrentCoordinates() {
    this.locationTrack
      .getCurrentCoordinates()
      .then(coords => (this.centerCoords = coords))
      .catch(err => this.errorHandler.error(err));
  }
}
