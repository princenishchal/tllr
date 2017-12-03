import { Component, Input, ViewChild, ElementRef, Renderer2, NgZone, ChangeDetectorRef} from '@angular/core';
import { NavController, NavParams, AlertController, Platform, Events } from 'ionic-angular';
import {PlacesPhotoSearchProvider} from '../../providers/places-photo-search/places-photo-search';
/**
 * import pages here 
 */
import {TransdetailChatPage} from './transdetail-chat/transdetail-chat';
import {SendLocationPage} from '../send-location/send-location'
import {SelectPhotosPage} from '../select-photos/select-photos';
import {ImagePreviewPage} from '../image-preview/image-preview';
import {Observable} from 'rxjs';


@Component({
  selector: 'page-transdetail',
  templateUrl: 'transdetail.html',
})
export class TransdetailPage {
	// the main transaction details object.
	transactionDetails:any = {
		photos:null,
		location:{
			"description": "Chick-fil-A, 196th Street Southwest, Lynnwood, WA, United States",
			"id": "1a14c3873fbad242b3b455336780fe84287b3713",
			"matched_substrings": [
				{
					"length": 11,
					"offset": 0
				}
			],
			"place_id": "ChIJT6u4r28FkFQRD_LqShyfOvo",
			"reference": "CoQBeQAAACcgF6SyVSDK1_WRa4s2FV6_i9u6NGBh7zALkB7MEtVbXy8HLyKuRRt4BSG4m2EWPnJchT2kentxJm8bD2Vf_wqoYHz0_Ie0QbppG2VX7Uk9I8I4p6lEW5QQloZogoesa73PdkZ4RlfgHJQkG8Un7yvwc9kgU_XF-iVCbERjDBOGEhAqx6tc89vnbT3yDw1dO2RiGhT6YnEvdlpJr8zJJMlHZECmegSPZg",
			"structured_formatting": {
				"main_text": "Chick-fil-A",
				"main_text_matched_substrings": [
					{
						"length": 11,
						"offset": 0
					}
				],
				"secondary_text": "196th Street Southwest, Lynnwood, WA, United States"
			},
			"terms": [
				{
					"offset": 0,
					"value": "Chick-fil-A"
				},
				{
					"offset": 13,
					"value": "196th Street Southwest"
				},
				{
					"offset": 37,
					"value": "Lynnwood"
				},
				{
					"offset": 47,
					"value": "WA"
				},
				{
					"offset": 51,
					"value": "United States"
				}
			],
			"types": [
				"establishment"
			]
		},
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

	constructor(private placesPhotoService: PlacesPhotoSearchProvider ,private ref:ChangeDetectorRef,   public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public renderer: Renderer2) {

	 // if the location is already set .. take out the reference and fetch photos 
		if(this.transactionDetails.location && this.transactionDetails.location.reference){
			let placeReference = this.transactionDetails.location.reference;
			this.getLocationPhotos(placeReference);
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TransdetailPage');
	}

	// pushes the add photos page with a call back to do processing after the photos have been collected
	selectPhotos(){
		this.navCtrl.push(SelectPhotosPage,{
			callback:(photos)=>{
				
				return new Promise((resolve,reject)=>{

			
				let photostoUpload = photos.map(p=>{
					return p.blob
				});


				this.transactionDetails.photos = photos.map(p=> {
					return	p.src
				});
				//TODO: upload images and then show them in the images.
				
				resolve();
				this.ref.detectChanges();
			})
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
					this.getLocationPhotos(location.reference);
				 resolve();
				})
			}
		})
	}


	previewImages(images,startAt){
		this.navCtrl.push(ImagePreviewPage,{
			images:images,
			startAt:startAt,
			title:"chic-fill-a"
		})
	}


	private getLocationPhotos(reference){
		this.placesPhotoService
		.getPhotos(reference)
		.subscribe((photos)=>{

			// push these potos in to the location phots prop and also prep them for upload 
			console.log(photos);
		})
	}


}

