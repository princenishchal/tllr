import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LocationPickerPage} from '../location-picker/location-picker'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public params = {}
  public pushPage = LocationPickerPage; // the page to be pushed 

 
  constructor(public navCtrl: NavController) {

  }

  

  
}
