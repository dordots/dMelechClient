import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ILocation } from '../../models/Location';
import { ICoordinates } from '../../models/Coordinates';

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

  constructor() {
  }

}
