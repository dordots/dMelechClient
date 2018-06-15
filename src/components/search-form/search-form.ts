import { Component, Input } from '@angular/core';
import { ICoordinates } from '../../models/Coordinates';

/**
 * Creating search query by form and emits it on submit.
 */
@Component({
  selector: 'search-form',
  templateUrl: 'search-form.html'
})
export class SearchFormComponent {

  @Input("centerCoords") centerCoords: ICoordinates;

  constructor() {
  }

  onMapClicked(coords: ICoordinates) {
    
  }

}
