import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController, NavParams } from 'ionic-angular';
declare var cordova: any;
import { PhotoLibrary, LibraryItem, GetLibraryOptions,   } from '@ionic-native/photo-library';
import { Observable,Subject } from 'rxjs';

/**
 * Generated class for the SelectPhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-photos',
  templateUrl: 'select-photos.html',
})
export class SelectPhotosPage {
  images = [];
  private gallaryImages = null;
  private pauser:Subject<boolean>; // used for pausing the library sequesnce
  private infiniteScrollHandle:any; 
  private page = 1 ;
  private chunk = 30;
  constructor(public navCtrl: NavController, public navParams: NavParams, private photoLibrary: PhotoLibrary, private changeRef: ChangeDetectorRef, private sanitizer: DomSanitizer) {

    this.pauser = new Subject();
    
  
    let opts: GetLibraryOptions = {};
    opts.thumbnailHeight =76;
    opts.thumbnailWidth = 71;
    opts.includeAlbumData = true;

    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary(opts).subscribe({
        next: library => {

         

          /* library.forEach(function(libraryItem) {
             console.log(libraryItem.id);          // ID of the photo
             console.log(libraryItem.photoURL);    // Cross-platform access to photo
             console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
             console.log(libraryItem.fileName);
             console.log(libraryItem.width);
             console.log(libraryItem.height);
             console.log(libraryItem.creationDate);
             console.log(libraryItem.latitude);
             console.log(libraryItem.longitude);
             console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
           });*/






           this.gallaryImages = library.sort(
            (a: LibraryItem, b: LibraryItem) => {
              return new Date(a.creationDate) >= new Date(b.creationDate) ? -1 : 1;
            }
          );

          this.gallaryImages.slice(this.page-1,this.page*this.chunk).map(img => {
            
                        let imjObj = {
                          thumbnailURL: this.sanitizer.bypassSecurityTrustUrl(img.thumbnailURL),
                          fileName: img.fileName,
                          id: img.id,
                          creationDate: img.creationDate,
                          index: this.images.length
                        }
                        // sanitize the urls before pushing 
            
                        this.images.push(imjObj);
            
                      })

        
                      this.page+= 1;

                      this.changeRef.detectChanges();

        },
        error: err => { console.log('could not get photos'); },
        complete: () => { console.log('done getting photos'); }
      });
    })
      .catch(err => console.log('permissions weren\'t granted'));


  }

  doInfinite(infiniteScroll) {
    this.gallaryImages.slice(this.page-1,this.page*this.chunk).map(img => {
      
                  let imjObj = {
                    thumbnailURL: this.sanitizer.bypassSecurityTrustUrl(img.thumbnailURL),
                    fileName: img.fileName,
                    id: img.id,
                    creationDate: img.creationDate,
                    index: this.images.length
                  }
                  // sanitize the urls before pushing 
      
                  this.images.push(imjObj);
      
                })

                infiniteScroll.complete();
                this.page +=1;

                this.changeRef.detectChanges();
  }

  shouldAddStamp(img) {

    if (this.images.length >= 2 && img.index != 0)
      return !this.sameDay(img.creationDate, this.images[img.index - 1].creationDate);
    else
      return true;



  }



  private sameDay(date1, date2) {

    let d1 = new Date(date1);
    let d2 = new Date(date2);

    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPhotosPage');
  }

}