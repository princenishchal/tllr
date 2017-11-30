import { Component, ViewChild, ChangeDetectorRef, Renderer} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation,Geoposition, } from '@ionic-native/geolocation';
import { NguiMapComponent, CustomMarker} from '@ngui/map';
import {PlacesAutoCompleteComponent} from '../../components/places-auto-complete/places-auto-complete'
/**
 * Generated class for the SendLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-send-location',
  templateUrl: 'send-location.html',
})
export class SendLocationPage {

    /** view vars used by ngui-maps */
    autocomplete: any;
    address: any = {};
    center: any = "";
    code: string;
    canContinue = false;
    private selectedPlace:any =null;
    @ViewChild('searchBar') searchBar:PlacesAutoCompleteComponent;
    @ViewChild('map') map :NguiMapComponent;
    @ViewChild('marker') marker:CustomMarker

  constructor(public navCtrl: NavController, public navParams: NavParams ,private geoLocaction: Geolocation, private changeDetector:ChangeDetectorRef, private render:Renderer) {

    
    this.geoLocaction.getCurrentPosition().then((loc:Geoposition)=>{
      console.log("user location",loc)
      this.center = {
        lat:loc.coords.latitude,
        lng: loc.coords.longitude
      }

      

      
    })

  }


  placeChanged(place) {
   if(place.description){
     this.center = place.description;
     this.address = place.description;
     this.selectedPlace = place;
     this.canContinue = true;
   }
    else{
      this.center = ""
      this.address = "";
      this.selectedPlace = null;
      this.canContinue = false;
    }

    this.changeDetector.detectChanges();
  }

  
  ngAfterViewInit(){
   this.render.invokeElementMethod(this.searchBar.input.nativeElement,'focus',[])
  }

  confirm(){
    // send baack the current locaiton.
  }

}
