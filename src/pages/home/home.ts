import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LocationPickerPage} from '../location-picker/location-picker';
import { TransdetailPage } from '../transdetail/transdetail';
import {SelectPhotosPage} from '../select-photos/select-photos';
import {SendLocationPage} from '../send-location/send-location';
import {SelectContactsPage} from '../select-contacts/select-contacts';



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
  public selectContacts = SelectContactsPage;
 
  constructor(public navCtrl: NavController) {

  }

  

  
}
