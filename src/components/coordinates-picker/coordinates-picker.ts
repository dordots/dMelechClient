import { Component } from '@angular/core';

/**
 * Generated class for the CoordinatesPickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'coordinates-picker',
  templateUrl: 'coordinates-picker.html'
})
export class CoordinatesPickerComponent {

  text: string;

  constructor() {
    console.log('Hello CoordinatesPickerComponent Component');
    this.text = 'Hello World';
  }

}
