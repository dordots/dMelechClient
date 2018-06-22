import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICoordinates } from '../../models/Coordinates';
import { IMapOptions } from '../../providers/map-manger/map-manger';

/**
 * Component that enables picking coordinates from a map.
 */
@Component({
  selector: 'coordinates-picker',
  templateUrl: 'coordinates-picker.html'
})
export class CoordinatesPickerComponent {

  @Input("centerCoords") centerCoords: ICoordinates;

  @Output("onMapClicked") onMapClicked = new EventEmitter();

  mapOptions: IMapOptions = {
    cursorCSS: 'crosshair'
  }

  constructor() {
  }

}
