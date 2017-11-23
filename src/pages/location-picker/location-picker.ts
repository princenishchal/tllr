import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SelectContactsPage} from '../select-contacts/select-contacts'


/**
 * Generated class for the LocationPickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-location-picker',
  templateUrl: 'location-picker.html',
})
export class LocationPickerPage {

   /** view vars used by ngui-maps */
   autocomplete: any;
   address: any = {};
   center: any = "RR Nagar, Bengaluru, Karnataka, India";
   code: string;
   canContinue = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ref: ChangeDetectorRef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPickerPage');
  }

  // recenters the map to the location selected from auto complete 
  placeChanged(place) {
    if(place && place.geometry){
    this.center = place.geometry.location;
    for (let i = 0; i < place.address_components.length; i++) {
      let addressType = place.address_components[i].types[0];
      this.address[addressType] = place.address_components[i].long_name;
    }

    this.address.name = place.name;
    this.address.formatted_address = place.formatted_address;
    this.canContinue = true;
    }
    else{
      this.center = {};
      this.address = {};
      this.canContinue = false;
    }

    this.ref.detectChanges();
  }

  checkIfnotEmpty(event){
    if(!event.target.value){
      this.canContinue = false;
    }
  }

  // push in the contacts select page
  confirm(){
    this.navCtrl.push(SelectContactsPage,this.address);
  }

}
