import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams ,Slides} from 'ionic-angular';
import { Slide } from 'ionic-angular/components/slides/slide';

/**
 * Generated class for the ImagePreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-image-preview',
  templateUrl: 'image-preview.html',
})

export class ImagePreviewPage {
 images:any[];
 private startAt:number;

 @ViewChild('slider') slider :Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.images = navParams.data.images;
    this.startAt = navParams.data.startAt;

  }

  

}
