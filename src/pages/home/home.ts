import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LocationPickerPage} from '../location-picker/location-picker';
import { TransdetailPage } from '../transdetail/transdetail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public params = {}
  public pushPage = LocationPickerPage; // the page to be pushed 
  public pushTransPage = TransdetailPage;
 
  constructor(public navCtrl: NavController) {

  }

  

  
}
