import { Component } from '@angular/core';

/**
 * Generated class for the PlacesAutoCompleteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'places-auto-complete',
  templateUrl: 'places-auto-complete.html'
})
export class PlacesAutoCompleteComponent {

  text: string;

  constructor() {
    console.log('Hello PlacesAutoCompleteComponent Component');
    this.text = 'Hello World';
  }

}
