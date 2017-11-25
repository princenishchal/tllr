import { Component, Input, ViewChild, ElementRef, Renderer2, NgZone} from '@angular/core';
import { NavController, NavParams, AlertController, Platform, Events } from 'ionic-angular';
import {TransdetailChatPage} from './transdetail-chat/transdetail-chat';

@Component({
  selector: 'page-transdetail',
  templateUrl: 'transdetail.html',
})
export class TransdetailPage {
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



}

