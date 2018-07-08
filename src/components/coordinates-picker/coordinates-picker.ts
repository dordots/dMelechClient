import { ViewController } from 'ionic-angular';
import { IMapItem } from './../../interfaces/MapItem';
import { ICoordinates } from './../../models/Coordinates';
import { Component } from '@angular/core';
import { IMapOptions, MapManagerProvider } from '../../providers/map-manger/map-manger';

/**
 * Component that enables picking coordinates from a map.
 */
@Component({
  selector: 'coordinates-picker',
  templateUrl: 'coordinates-picker.html'
})
export class CoordinatesPickerComponent {
  selctedLocation: any;
  showResultList: boolean;
  locationsResult: any = [];

  centerCoords: ICoordinates = null;
  selectedCoords: IMapItem = {
    coordinates: null
  };
  mapOptions: IMapOptions = {
    cursorCSS: 'crosshair'
  }

  constructor(private viewCtrl: ViewController, private mapManager: MapManagerProvider) {

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

  searchLocation(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.mapManager.searchPlace(val, (result: any) => {
        if (result && result.length) {
          this.locationsResult = result;
          this.showResultList = true;
        }
        else {
          this.showResultList = false;
        }
      });
    } else {

      this.showResultList = false;
    }
  }

  setLocation(location: any) {
    this.mapManager.setLocation(location);
    this.showResultList = false;
  }
}
