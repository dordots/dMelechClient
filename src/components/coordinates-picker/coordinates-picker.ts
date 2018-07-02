import { LocationTrackProvider } from './../../providers/location-track/location-track';
import { ViewController } from 'ionic-angular';
import { IMapItem } from './../../interfaces/MapItem';
import { ICoordinates } from './../../models/Coordinates';
import { Component, Input } from '@angular/core';
import { IMapOptions } from '../../providers/map-manger/map-manger';
import { Validate as ValidateCoords } from '../../validators/Coordinates';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';

/**
 * Component that enables picking coordinates from a map.
 */
@Component({
  selector: 'coordinates-picker',
  templateUrl: 'coordinates-picker.html'
})
export class CoordinatesPickerComponent {

  centerCoords: ICoordinates;
  currentLocation: ICoordinates;
  
  selectedCoords: IMapItem = {
    coordinates: null
  };
  mapOptions: IMapOptions = {
    cursorCSS: 'crosshair'
  }

  constructor(private viewCtrl: ViewController,
              private locationTrack: LocationTrackProvider,
              private errorHandler: ErrorHandlerProvider) {
    const recievedCoords = this.viewCtrl.data.centerCoords
    if (ValidateCoords(recievedCoords)) {
      this.selectedCoords.coordinates = recievedCoords;
      this.centerCoords = recievedCoords;
    }
    else {
      this.moveToCurrentCoordinates();
    }
  }

  onCoordsSelect(selectedCoords: ICoordinates) {
    this.selectedCoords = {
      coordinates: selectedCoords
    };
  }

  onSubmit() {
    if (!this.selectedCoords.coordinates) {
      alert("לא נבחר מיקום");
      return;
    }
    this.viewCtrl.dismiss(this.selectedCoords.coordinates);
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

  moveToCurrentCoordinates() {
    this.locationTrack
      .getCurrentCoordinates()
      .then(coords => {
        this.currentLocation = coords;
        this.centerCoords = coords;
      })
      .catch(err => this.errorHandler.error(err));
  }

}
