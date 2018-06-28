import { ViewController } from 'ionic-angular';
import { IMapItem } from './../../interfaces/MapItem';
import { ICoordinates } from './../../models/Coordinates';
import { Component } from '@angular/core';
import { IMapOptions } from '../../providers/map-manger/map-manger';

/**
 * Component that enables picking coordinates from a map.
 */
@Component({
  selector: 'coordinates-picker',
  templateUrl: 'coordinates-picker.html'
})
export class CoordinatesPickerComponent {

  centerCoords: ICoordinates = null;
  selectedCoords: IMapItem = {
    coordinates: null
  };
  mapOptions: IMapOptions = {
    cursorCSS: 'crosshair'
  }

  constructor(private viewCtrl: ViewController) {

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

}
