import { Component } from '@angular/core';

/**
 * Generated class for the SearchFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-form',
  templateUrl: 'search-form.html'
})
export class SearchFormComponent {

  text: string;

  constructor() {
    console.log('Hello SearchFormComponent Component');
    this.text = 'Hello World';
  }

}
