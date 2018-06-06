import { Component } from '@angular/core';

/**
 * Generated class for the ListViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-view',
  templateUrl: 'list-view.html'
})
export class ListViewComponent {

  text: string;

  constructor() {
    console.log('Hello ListViewComponent Component');
    this.text = 'Hello World';
  }

}
