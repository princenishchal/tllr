import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LocationPickerPage} from '../location-picker/location-picker';
import { TransdetailPage } from '../transdetail/transdetail';
import {SelectPhotosPage} from '../select-photos/select-photos';
import {SendLocationPage} from '../send-location/send-location';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public params = {}
  public pushPage = LocationPickerPage; // the page to be pushed 
  public pushTransPage = TransdetailPage;
  public photosPage = SelectPhotosPage;
  public sendLocation = SendLocationPage;
 
  constructor(public navCtrl: NavController) {

  }

  

  
}
