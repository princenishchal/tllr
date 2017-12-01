import { Component, Input, ViewChild, ElementRef, Renderer2, NgZone} from '@angular/core';
import { NavController, NavParams, AlertController, Platform, Events } from 'ionic-angular';

/**
 * import pages here 
 */
import {TransdetailChatPage} from './transdetail-chat/transdetail-chat';
import {SendLocationPage} from '../send-location/send-location'
import {SelectPhotosPage} from '../select-photos/select-photos';
import {Observable} from 'rxjs';


@Component({
  selector: 'page-transdetail',
  templateUrl: 'transdetail.html',
})
export class TransdetailPage {
	// the main transaction details object.
	transactionDetails:any = {
		photos:null,
		location:null,
		friends:[],
		chat:{}
	}
	chatPage = TransdetailChatPage;
	chatParams = {}; 
	@ViewChild('transDetailBlock') transDetailBlock:ElementRef;
	@ViewChild('transDetailTags') transDetailTags:ElementRef;
	@ViewChild('transDetailTagSpan') transDetailTagSpan:ElementRef;
	@ViewChild('transDetailNotes') transDetailNotes:ElementRef;
	@ViewChild('transDetailNotesSpan') transDetailNotesSpan:ElementRef;
	@ViewChild('chatsDetailBlock') chatsDetailBlock:ElementRef;
	@ViewChild('tagFriendsDivBlock') tagFriendsDivBlock:ElementRef;

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public renderer: Renderer2) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TransdetailPage');
	}

	// pushes the add photos page with a call back to do processing after the photos have been collected
	selectPhotos(){
		this.navCtrl.push(SelectPhotosPage,{
			callback:(photos)=>{
			
				//TODO: upload images and then show them in the images.
				

			}
		})
	}

	// fetches a location object and shows it in the transaction details page
	addLocation(){
		this.navCtrl.push(SendLocationPage,{
			callback:(location)=>{
				return new Promise((resolve,reject)=>{

					//TODO: uplaod the location and then add it to the local object
					console.log(location)
					this.transactionDetails.location = location;

				 resolve();
				})
			}
		})
	}





}

