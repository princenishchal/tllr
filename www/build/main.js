webpackJsonp([0],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SelectContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectContactsPage = (function () {
    function SelectContactsPage(navCtrl, navParams, changeRef, domsanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.changeRef = changeRef;
        this.domsanitizer = domsanitizer;
        this.contacts = [];
        this.listNotEmpty = false;
        this.searchResults = [];
        this.page = 0;
        this.chunk = 30;
        this.search = null;
        this.isLoading = true;
        this.address = navParams.data; // just keep the data here
    }
    SelectContactsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SelectContactsPage');
        if (navigator.contactsPhoneNumbers)
            navigator.contactsPhoneNumbers.list(function (contacts) {
                _this.contacts = [];
                // sort in asc
                _this.allContacts = contacts.sort(function (a, b) { return a.displayName >= b.displayName ? 1 : -1; }).map(function (ac, i) {
                    return {
                        idx: i,
                        id: ac.id,
                        picture: ac.thumbnail ? _this.domsanitizer.bypassSecurityTrustUrl(ac.thumbnail) : null,
                        phone: ac.phoneNumbers[0].normalizedNumber,
                        name: ac.displayName,
                        selected: false
                    };
                });
                _this.allContacts.slice(_this.page * _this.chunk, (_this.page + 1) * _this.chunk).map(function (contact, i) {
                    _this.contacts.push({
                        idx: contact.idx,
                        idy: i,
                        id: contact.id,
                        picture: contact.thumbnail ? _this.domsanitizer.bypassSecurityTrustUrl(contact.thumbnail) : null,
                        phone: contact.phone,
                        name: contact.name,
                        selected: contact.selected
                    });
                });
                _this.page += 1;
                _this.isLoading = false;
                _this.changeRef.detectChanges();
                _this.changeRef.detectChanges();
            }, function (error) {
                console.error(error);
            });
    };
    SelectContactsPage.prototype.selectContact = function (idx, idy) {
        var _this = this;
        this.allContacts[idx].selected = true;
        if (idy && this.contacts[idy])
            this.contacts[idy].selected = true;
        else {
            this.contacts.map(function (c, i) {
                if (c.idx == idx)
                    _this.contacts[i].selected = true;
            });
        }
        this.isListEmpty();
        this.changeRef.detectChanges();
    };
    SelectContactsPage.prototype.removeContact = function (idx, idy) {
        var _this = this;
        this.allContacts[idx].selected = false;
        if (idy && this.contacts[idy])
            this.contacts[idy].selected = false;
        else {
            this.contacts.map(function (c, i) {
                if (c.idx == idx)
                    _this.contacts[i].selected = false;
            });
        }
        this.isListEmpty();
        this.changeRef.detectChanges();
    };
    SelectContactsPage.prototype.isListEmpty = function () {
        this.listNotEmpty = this.contacts.filter(function (c) { return c.selected; }).length ? true : false;
    };
    SelectContactsPage.prototype.confirm = function () {
        // do something with the selected contacts and address
        var dataToSubmit = {
            selectedContacts: this.contacts.filter(function (c) { return c.selected == true; }),
            selectedAddress: this.address
        };
        console.log(dataToSubmit);
        this.navCtrl.popToRoot();
    };
    SelectContactsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.allContacts.slice(this.page * this.chunk, (this.page + 1) * this.chunk).map(function (contact, i) {
            _this.contacts.push({
                idx: contact.idx,
                idy: i,
                id: contact.id,
                picture: contact.thumbnail ? _this.domsanitizer.bypassSecurityTrustUrl(contact.thumbnail) : null,
                phone: contact.phone,
                name: contact.name,
                selected: contact.selected
            });
        });
        infiniteScroll.complete();
        this.page += 1;
        this.changeRef.detectChanges();
    };
    SelectContactsPage.prototype.searchEmployee = function (name) {
        this.searchResults = name ? this.allContacts.filter(function (c) { return c.name.indexOf(name) > -1; }) || [] : [];
    };
    SelectContactsPage.prototype.addFromSearch = function (contact) {
        this.searchResults = [];
        this.search = null;
        // mark as selected in all contacts 
        this.selectContact(contact.idx, contact.idy || null);
    };
    SelectContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select-contacts',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\pages\select-contacts\select-contacts.html"*/'<!--\n\n  Generated ng-template for the SelectContactsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <div class="custom-navbar">\n\n        <div class="flex-row">\n\n          <button class="back" navPop>\n\n            <</button>\n\n              <h4 class="title">invite employees</h4>\n\n        </div>\n\n       \n\n      </div>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="flex-center">\n\n    <img src="assets/imgs/emoji_hi.png" class="title-image"/>\n\n  </div>\n\n\n\n  <div class="flex-center">\n\n    <input class="searchbar" [(ngModel)]="search" placeholder="search employees" (input)="searchEmployee(search)" />\n\n    <ul class="search-results" *ngIf="searchResults.length!=0">\n\n      <li *ngFor="let item of searchResults" (tap)="addFromSearch(item)" >{{item.name}}</li>\n\n    </ul>\n\n  </div>\n\n\n\n  <div class="selected-employees">\n\n    <h6>selected employees</h6>\n\n    <p class="no-selection" *ngIf="!listNotEmpty">you haven’t selected anyone yet</p>\n\n\n\n    <span  *ngFor="let contact of allContacts">\n\n    <div class="contact-card" *ngIf="contact.selected">\n\n        <avatar  [img]="contact.picture" [userName]="contact.name" ></avatar>\n\n\n\n        <div class="info">\n\n          <h4>{{contact.name}}</h4>\n\n          <p>{{contact.phone}}</p>\n\n        </div>\n\n        \n\n        <div class="controls">\n\n            <button  class="delete" (click)="removeContact(contact.idx,contact.idy)">Delete</button>\n\n        </div>\n\n    </div>\n\n  </span> \n\n    \n\n  </div>\n\n\n\n  <div class="existing-employees">\n\n      <h6>Employees on Teller</h6>\n\n\n\n      <!-- dummy contact card \n\n\n\n      <div class="contact-card" >\n\n          <img class="avatar" src="https://placeholdit.co//i/26x26?">\n\n\n\n          <div class="info">\n\n            <h4>aman gupta</h4>\n\n            <p>9717748633</p>\n\n          </div>\n\n          \n\n          <div class="controls">\n\n            <button  class="add">Add</button>\n\n            \n\n          </div>\n\n      </div>\n\n   dummy card ends -->\n\n      <span  *ngFor="let contact of contacts">\n\n      <div class="contact-card" *ngIf="!contact.selected" >\n\n          <avatar  [img]="contact.picture" [userName]="contact.name" ></avatar>\n\n          <div class="info">\n\n            <h4>{{contact.name}}</h4>\n\n            <p>{{contact.phone}}</p>\n\n          </div>\n\n          \n\n          <div class="controls">\n\n            <button  class="add" (click)="selectContact(contact.idx,contact.idy)">Add</button>\n\n            \n\n          </div>\n\n      </div>\n\n    </span>\n\n\n\n    \n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n  </div>\n\n\n\n  <div class="continue-button" *ngIf="listNotEmpty">\n\n      <button class="continue" (click)="confirm()">continue</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\pages\select-contacts\select-contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SelectContactsPage);
    return SelectContactsPage;
}());

//# sourceMappingURL=select-contacts.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngui_map__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_places_auto_complete_places_auto_complete__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SendLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendLocationPage = (function () {
    function SendLocationPage(platform, navCtrl, navParams, changeDetector, render, geo) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.changeDetector = changeDetector;
        this.render = render;
        this.geo = geo;
        this.address = {};
        this.center = "";
        this.canContinue = false;
        this.selectedPlace = null;
        // register the callback 
        this.callback = navParams.data.callback;
        platform.ready().then(function () {
            geo.getCurrentPosition().then(function (loc) {
                console.log("user location", loc);
                _this.center = {
                    lat: loc.coords.latitude,
                    lng: loc.coords.longitude
                };
            })
                .catch(function (err) {
                _this.err = err;
            });
        });
    }
    SendLocationPage.prototype.placeChanged = function (place) {
        if (place.description) {
            this.center = place.description;
            this.address = place.description;
            this.selectedPlace = place;
            this.canContinue = true;
        }
        else {
            this.center = "";
            this.address = "";
            this.selectedPlace = null;
            this.canContinue = false;
        }
        this.changeDetector.detectChanges();
    };
    SendLocationPage.prototype.ngAfterViewInit = function () {
        this.render.invokeElementMethod(this.searchBar.input.nativeElement, 'focus', []);
    };
    SendLocationPage.prototype.confirm = function () {
        var _this = this;
        // send back the current 
        this.callback(this.selectedPlace)
            .then(function () {
            _this.navCtrl.pop();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchBar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__components_places_auto_complete_places_auto_complete__["a" /* PlacesAutoCompleteComponent */])
    ], SendLocationPage.prototype, "searchBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__ngui_map__["b" /* NguiMapComponent */])
    ], SendLocationPage.prototype, "map", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('marker'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__ngui_map__["a" /* CustomMarker */])
    ], SendLocationPage.prototype, "marker", void 0);
    SendLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-send-location',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\pages\send-location\send-location.html"*/'<!--\n\n  Generated template for the SendLocationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <div class="custom-navbar">\n\n    <div class="flex-row">\n\n      <button class="back" navPop>\n\n        <</button>\n\n        <div class="search-bar" placeholder="Enter location name or address">\n\n          \n\n          <places-auto-complete [center]="center" (placeChanged)="placeChanged($event)" #searchBar ></places-auto-complete>\n\n        </div>\n\n    </div>\n\n    \n\n  </div>\n\n{{err|json}}\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ngui-map [center]="center" [fullscreenControl]="false" [disableDefaultUI]="true" #map>\n\n        <custom-marker [position]="center" #marker>\n\n          <div>\n\n            <img src="assets/imgs/map_marker.png" width="30px;" height="50px;" />\n\n            <b>{{center}}</b>\n\n           \n\n          </div>\n\n        </custom-marker>\n\n      </ngui-map>\n\n    \n\n    \n\n      <div class="continue-button" *ngIf="canContinue">\n\n        <button class="continue" (click)="confirm()">Done</button>\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\pages\send-location\send-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], SendLocationPage);
    return SendLocationPage;
}());

//# sourceMappingURL=send-location.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPhotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SelectPhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectPhotosPage = (function () {
    function SelectPhotosPage(navCtrl, navParams, photoLibrary, changeRef, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photoLibrary = photoLibrary;
        this.changeRef = changeRef;
        this.sanitizer = sanitizer;
        this.images = [];
        this.gallaryImages = null;
        this.page = 0;
        this.chunk = 30;
        this.isLoading = true;
        this.callback = this.navParams.data.callback;
        /**
      * TODO : remove this after testing
      */
        /* this.images = new Array(100).fill({
           creationDate:Date.now(),
           thumbnailURL: "https://placeholdit.co//i/71x76?&bg=9b9b9b"
         }).map((img,index,arr)=>{
           img.index = index;
           return img
         }) */
        this.listNotEmpty = false;
        var opts = {};
        opts.thumbnailHeight = 76;
        opts.thumbnailWidth = 71;
        opts.includeAlbumData = true;
        this.photoLibrary.requestAuthorization().then(function () {
            _this.photoLibrary.getLibrary(opts).subscribe({
                next: function (library) {
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
                    _this.gallaryImages = library.sort(function (a, b) {
                        return new Date(a.creationDate) >= new Date(b.creationDate) ? -1 : 1;
                    });
                    _this.gallaryImages.slice(_this.page * _this.chunk, (_this.page + 1) * _this.chunk).map(function (img) {
                        var imjObj = {
                            thumbnailURL: _this.sanitizer.bypassSecurityTrustUrl(img.thumbnailURL),
                            photoUrl: _this.sanitizer.bypassSecurityTrustUrl(img.photoURL),
                            fileName: img.fileName,
                            id: img.id,
                            creationDate: img.creationDate,
                            index: _this.images.length,
                            selected: false
                        };
                        // sanitize the urls before pushing 
                        _this.images.push(imjObj);
                    });
                    console.log(_this.images);
                    _this.page += 1;
                    _this.isLoading = false;
                    _this.changeRef.detectChanges();
                },
                error: function (err) { console.log('could not get photos'); },
                complete: function () { console.log('done getting photos'); }
            });
        })
            .catch(function (err) { return console.log('permissions weren\'t granted'); });
    }
    SelectPhotosPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.gallaryImages.slice(this.page * this.chunk, (this.page + 1) * this.chunk).map(function (img) {
            var imjObj = {
                thumbnailURL: _this.sanitizer.bypassSecurityTrustUrl(img.thumbnailURL),
                fileName: img.fileName,
                id: img.id,
                creationDate: img.creationDate,
                index: _this.images.length
            };
            // sanitize the urls before pushing 
            _this.images.push(imjObj);
        });
        infiniteScroll.complete();
        this.page += 1;
        this.changeRef.detectChanges();
    };
    SelectPhotosPage.prototype.shouldAddStamp = function (img) {
        if (this.images.length >= 2 && img.index != 0)
            return !this.sameDay(img.creationDate, this.images[img.index - 1].creationDate);
        else
            return true;
    };
    SelectPhotosPage.prototype.select = function (index) {
        this.images[index].selected = true;
        this.checkListEmpty();
        this.changeRef.detectChanges();
    };
    SelectPhotosPage.prototype.unselect = function (index) {
        this.images[index].selected = false;
        this.checkListEmpty();
        this.changeRef.detectChanges();
    };
    // get actual iamges
    SelectPhotosPage.prototype.getPhotos = function () {
        var _this = this;
        var selectedPhotos = this.images.filter(function (i) { return i.selected; });
        // fetch photos from the ionic native 
        Promise.all(selectedPhotos.map(function (sp) {
            return _this.photoLibrary.getPhoto(sp.id);
        })).then(function (photos) {
            // send back selected photos with local urls 
            var imagestoReurn = selectedPhotos.map(function (sp, i) {
                return {
                    src: sp.photoUrl,
                    blob: photos[i]
                };
            });
            console.log("photso fetched", imagestoReurn);
            _this.callback(imagestoReurn).then(function () {
                _this.navCtrl.pop();
            });
        });
    };
    SelectPhotosPage.prototype.checkListEmpty = function () {
        this.listNotEmpty = this.images.filter(function (i) { return i.selected; }).length ? true : false;
    };
    SelectPhotosPage.prototype.sameDay = function (date1, date2) {
        var d1 = new Date(date1);
        var d2 = new Date(date2);
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    };
    SelectPhotosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectPhotosPage');
    };
    SelectPhotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select-photos',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\pages\select-photos\select-photos.html"*/'<!--\n\n  Generated template for the SelectPhotosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n  <div class="custom-navbar">\n\n    <div class="flex-row">\n\n      <button class="back" navPop>\n\n        <</button>\n\n          <h4 class="title">Add photos</h4>\n\n    </div>\n\n    \n\n  </div>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n  <div class="vertical-align" *ngIf="isLoading">\n\n    <div class="center-align">\n\n    <ion-spinner></ion-spinner>\n\n    </div>\n\n  </div>\n\n\n\n  <ion-list *ngFor="let img of images; let i = index">\n\n        \n\n        <h6 class="date-stamp" *ngIf="shouldAddStamp(img,i)">\n\n\n\n        {{ img.creationDate |  amParse:\'DD/MM/YYYY\' | amDateFormat:\'LL\'}}\n\n      </h6>\n\n      <br *ngIf="shouldAddStamp(img,i)">\n\n    \n\n      <div class="thumbnail">\n\n        <div class="overlay" *ngIf="img.selected"  (tap)="unselect(img.index)">\n\n            <img class="check-mark" src="assets/imgs/icn_check_mark_white.png"/>\n\n        </div>\n\n      <img class="image" [src]="img.thumbnailURL" (tap)="select(img.index)"/>\n\n      </div>  \n\n    \n\n    </ion-list>  \n\n\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n    <div class="continue-button" *ngIf="listNotEmpty">\n\n      <button class="continue" (tap)="getPhotos()">Done</button>\n\n  </div>\n\n \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\pages\select-photos\select-photos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__["a" /* PhotoLibrary */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SelectPhotosPage);
    return SelectPhotosPage;
}());

//# sourceMappingURL=select-photos.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 218;

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_picker_location_picker__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transdetail_transdetail__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_photos_select_photos__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__send_location_send_location__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_contacts_select_contacts__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.params = {};
        this.pushPage = __WEBPACK_IMPORTED_MODULE_2__location_picker_location_picker__["a" /* LocationPickerPage */]; // the page to be pushed 
        this.pushTransPage = __WEBPACK_IMPORTED_MODULE_3__transdetail_transdetail__["a" /* TransdetailPage */];
        this.photosPage = __WEBPACK_IMPORTED_MODULE_4__select_photos_select_photos__["a" /* SelectPhotosPage */];
        this.sendLocation = __WEBPACK_IMPORTED_MODULE_5__send_location_send_location__["a" /* SendLocationPage */];
        this.selectContacts = __WEBPACK_IMPORTED_MODULE_6__select_contacts_select_contacts__["a" /* SelectContactsPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <button ion-button [navPush]="pushPage" [navParams]="params">select location</button>\n\n	<br><br>\n\n  <button ion-button [navPush]="pushTransPage" [navParams]="params">Transaction Detail Page</button>\n\n\n\n\n\n  <button ion-button [navPush]="selectContacts" [navParams]="params">select contacts</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_contacts_select_contacts__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LocationPickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationPickerPage = (function () {
    function LocationPickerPage(navCtrl, navParams, ref) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.address = {};
        this.center = "RR Nagar, Bengaluru, Karnataka, India";
        this.canContinue = false;
    }
    LocationPickerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPickerPage');
    };
    // recenters the map to the location selected from auto complete 
    LocationPickerPage.prototype.placeChanged = function (place) {
        if (place && place.geometry) {
            this.center = place.geometry.location;
            for (var i = 0; i < place.address_components.length; i++) {
                var addressType = place.address_components[i].types[0];
                this.address[addressType] = place.address_components[i].long_name;
            }
            this.address.name = place.name;
            this.address.formatted_address = place.formatted_address;
            this.canContinue = true;
        }
        else {
            this.center = {};
            this.address = {};
            this.canContinue = false;
        }
        this.ref.detectChanges();
    };
    LocationPickerPage.prototype.checkIfnotEmpty = function (event) {
        if (!event.target.value) {
            this.canContinue = false;
        }
    };
    // push in the contacts select page
    LocationPickerPage.prototype.confirm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__select_contacts_select_contacts__["a" /* SelectContactsPage */], this.address);
    };
    LocationPickerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-location-picker',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\pages\location-picker\location-picker.html"*/'<!--\n\n  Generated template for the LocationPickerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <div class="custom-navbar">\n\n    <div class="flex-row">\n\n      <button class="back" navPop>\n\n        <</button>\n\n          <h4 class="title">Pick a location</h4>\n\n    </div>\n\n    <h6 class="subtitle"> tell us where your business is located</h6>\n\n  </div>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ngui-map [center]="center" [fullscreenControl]="false" [disableDefaultUI]="true">\n\n    <custom-marker [position]="center">\n\n      <div>\n\n        <b>{{address.name}}</b>\n\n        <img src="assets/imgs/map_marker.png" width="30px;" height="50px;" />\n\n      </div>\n\n    </custom-marker>\n\n  </ngui-map>\n\n\n\n  <!-- address search bar -->\n\n  <div class="address-search-box">\n\n    <input type="text" places-auto-complete (place_changed)="placeChanged($event)" (input)="checkIfnotEmpty($event)" [types]="[\'geocode\']" placeholder="Enter business location"\n\n    />\n\n  </div>\n\n\n\n  <div class="continue-button" *ngIf="canContinue">\n\n    <button class="continue" (click)="confirm()">continue</button>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\pages\location-picker\location-picker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], LocationPickerPage);
    return LocationPickerPage;
}());

//# sourceMappingURL=location-picker.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_places_photo_search_places_photo_search__ = __webpack_require__(870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transdetail_chat_transdetail_chat__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__send_location_send_location__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_photos_select_photos__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_preview_image_preview__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * import pages here
 */




var TransdetailPage = (function () {
    function TransdetailPage(placesPhotoService, ref, navCtrl, navParams, alertCtrl, renderer) {
        this.placesPhotoService = placesPhotoService;
        this.ref = ref;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.renderer = renderer;
        // the main transaction details object.
        this.transactionDetails = {
            photos: null,
            location: {
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
            friends: [],
            chat: {}
        };
        this.chatPage = __WEBPACK_IMPORTED_MODULE_3__transdetail_chat_transdetail_chat__["a" /* TransdetailChatPage */];
        this.chatParams = {};
        // if the location is already set .. take out the reference and fetch photos 
        if (this.transactionDetails.location && this.transactionDetails.location.reference) {
            var placeReference = this.transactionDetails.location.reference;
            this.getLocationPhotos(placeReference);
        }
    }
    TransdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransdetailPage');
    };
    // pushes the add photos page with a call back to do processing after the photos have been collected
    TransdetailPage.prototype.selectPhotos = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__select_photos_select_photos__["a" /* SelectPhotosPage */], {
            callback: function (photos) {
                return new Promise(function (resolve, reject) {
                    var photostoUpload = photos.map(function (p) {
                        return p.blob;
                    });
                    _this.transactionDetails.photos = photos.map(function (p) {
                        return p.src;
                    });
                    //TODO: upload images and then show them in the images.
                    resolve();
                    _this.ref.detectChanges();
                });
            }
        });
    };
    // fetches a location object and shows it in the transaction details page
    TransdetailPage.prototype.addLocation = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__send_location_send_location__["a" /* SendLocationPage */], {
            callback: function (location) {
                return new Promise(function (resolve, reject) {
                    //TODO: uplaod the location and then add it to the local object
                    console.log(location);
                    _this.transactionDetails.location = location;
                    _this.getLocationPhotos(location.reference);
                    resolve();
                });
            }
        });
    };
    TransdetailPage.prototype.previewImages = function (images, startAt) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__image_preview_image_preview__["a" /* ImagePreviewPage */], {
            images: images,
            startAt: startAt,
            title: "chic-fill-a"
        });
    };
    TransdetailPage.prototype.getLocationPhotos = function (reference) {
        this.placesPhotoService
            .getPhotos(reference)
            .subscribe(function (photos) {
            // push these potos in to the location phots prop and also prep them for upload 
            console.log(photos);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('transDetailBlock'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], TransdetailPage.prototype, "transDetailBlock", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('transDetailTags'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], TransdetailPage.prototype, "transDetailTags", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('transDetailTagSpan'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
    ], TransdetailPage.prototype, "transDetailTagSpan", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('transDetailNotes'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
    ], TransdetailPage.prototype, "transDetailNotes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('transDetailNotesSpan'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
    ], TransdetailPage.prototype, "transDetailNotesSpan", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chatsDetailBlock'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object)
    ], TransdetailPage.prototype, "chatsDetailBlock", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tagFriendsDivBlock'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _g || Object)
    ], TransdetailPage.prototype, "tagFriendsDivBlock", void 0);
    TransdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transdetail',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\pages\transdetail\transdetail.html"*/'<ion-content style="text-align:center" no-bounce overflow-scroll="true">\n\n	<div #transDetailBlock class="transDetailBlock animated" id="transDetailBlock">\n\n		<div class="headerSection" (tap)="closeTransDetail()">\n\n			<div class="leftBackBtn">\n\n				<img src="assets/imgs/icn_back.png" class="back-icon">\n\n			</div>\n\n			<div class="rightOnHeader">Transaction Details</div>\n\n		</div>\n\n		<div class="mainTransViewDataBlock" id="mainTransViewDataBlock">\n\n			<div class="transactionDetails">\n\n				<!-- Summary Card -->\n\n				<div id="transDetailCard" class="transDetailCard">\n\n					<ion-card class="statsCard">\n\n						<div class="scTopLeft">\n\n							<img src="assets/imgs/shopping.png" class="search_buttons">\n\n						</div>\n\n						<div class="scTopRight">\n\n							<div class="scTopRightName">Audible</div>\n\n							<div class="scTopRightInfoTextLessOpacity">Citi Double Cash Card xxx - 8010</div>\n\n						</div>\n\n						<div class="scDivider"></div>\n\n						<br>\n\n						<div class="scAmountLabel">Fri\n\n							<br>\n\n							<div class="scAmountLabelSpan">Day</div>\n\n						</div>\n\n						<div class="scAmountLabel" style="margin-left:10px">24 Nov\n\n							<br>\n\n							<div class="scAmountLabelSpan">Date</div>\n\n						</div>\n\n						<div class="scAmountLabel" style="width:116px;text-align:right;color:#d0011b">($ 14.95)\n\n							<br>\n\n							<div class="scAmountLabelSpan" style="text-align:right">Spent</div>\n\n						</div>\n\n					</ion-card>\n\n				</div>\n\n				<!-- Additional Stuff Card -->\n\n				<div class="detailsCard">\n\n					<div class="verticalSpace"></div>\n\n					<div class="detailsCardHeader">\n\n						<div class="detailsCardHeaderLeftText">Additional stuff</div>\n\n						<div class="detailsCardHeaderButton">\n\n							<img class="detailsCardPlusBtn" src="assets/imgs/icn_expand.png" (tap)="showTransDetailContent()">\n\n						</div>\n\n						<div class="scDividerCards" style="margin-left:12px;"></div>\n\n					</div>\n\n					<div class="detailsCardContent" (tap)="showTransDetailContent()">\n\n						<div class="detailsCardTipText" id="transDetailsContent">Click to view additionald details from the bank</div>\n\n					</div>\n\n				</div>\n\n				<!-- Content Separator -->\n\n				<div class="transDetailSeparator">\n\n					<div class="linePiece"></div>\n\n					<div class="lineSeparatorText">Add more details & search better</div>\n\n					<div class="linePiece"></div>\n\n				</div>\n\n				<div class="cardsGap"></div>\n\n				<!-- Tag Friends Card -->\n\n				<div #tagFriendsDivBlock class="tagFriendsCard detailsCard" id="tagFriendsCard">\n\n					<div class="verticalSpace"></div>\n\n					<div class="detailsCardHeader">\n\n						<div class="detailsCardHeaderLeftText">Friends</div>\n\n						<div class="detailsCardHeaderButton">\n\n							<img class="detailsCardPlusBtn" id="tagFriendsBtn" src="assets/imgs/icn_chat.png" [navPush]="chatPage" [navParams]="chatParams">\n\n						</div>\n\n						<div class="scDividerCards" style="margin-left:12px;"></div>\n\n					</div>\n\n					<div class="detailsCardContent" id="tagFriendsContent" (tap)="tagFriendsContentClick($event)">\n\n						<div class="detailsCardTipText">Group expenses easily by tagging friends & family</div>\n\n					</div>\n\n				</div>\n\n				<!-- Category Card -->\n\n				<div class="reCategorizeCard detailsCard">\n\n					<div class="verticalSpace"></div>\n\n					<div class="detailsCardHeader">\n\n						<div class="detailsCardHeaderLeftText">Category\n\n							<!--  -> &nbsp;<span id="categoryValue"></span> -->\n\n						</div>\n\n						<!-- <div class="recategorizeHeaderButton"><img src="assets/imgs/btn_edit.png" (tap)="showReCategorizationView()"></div> -->\n\n						<div class="detailsCardHeaderButton">\n\n							<img class="detailsCardPlusBtn" src="assets/imgs/icn_add.png" (tap)="showReCategorizationView()">\n\n						</div>\n\n						<div class="scDividerCards" style="margin-left:12px;margin-top: 0px;"></div>\n\n					</div>\n\n					<div class="detailsCardContent">\n\n						<div class="detailsCardTipText">Category is wrong? Feel free to change it</div>\n\n					</div>\n\n				</div>\n\n				<!-- Business Expense Card -->\n\n				<div class="isBusinessExpenseCard detailsCard">\n\n					<div class="verticalSpace"></div>\n\n					<div class="detailsCardHeader">\n\n						<div class="detailsCardHeaderLeftText">Business Expense</div>\n\n						<div class="detailsCardHeaderButton">\n\n							<img class="detailsCardPlusBtn" id="bizExpenseBtn" src="assets/imgs/icn_add.png" (tap)="saveBizExpenseFlag()">\n\n						</div>\n\n						<div class="scDividerCards" style="margin-left:12px;"></div>\n\n					</div>\n\n					<div class="detailsCardContent">\n\n						<div class="detailsCardTipText" id="bizExpenseText">Just click “+” and easily search biz expenses</div>\n\n					</div>\n\n				</div>\n\n				<!-- Tags Card -->\n\n				<div class="tagsCard detailsCard">\n\n					<div class="verticalSpace"></div>\n\n					<div class="detailsCardHeader">\n\n						<div class="detailsCardHeaderLeftText">Tags</div>\n\n						<div class="scDividerCards" style="margin-left:12px;"></div>\n\n					</div>\n\n					<div class="detailsCardContent">\n\n						<div class="detailsCardTipText" (tap)="clickEditTransactionTags()">\n\n							<span #transDetailTagSpan id="transDetailTagSpan" class="detailsCardTipText">Type here, seperate with commas, search with tags</span>\n\n							<input #transDetailTags id="transDetailTags" type="text" class="detailsCardTagEditInput" style="display:none;" (keyup)="handleKeyUpForEditTags($event)"\n\n							 (blur)="userPrefsOnSaveTags()" />\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<!-- Reminder Card -->\n\n				<div class="reminderCard detailsCard">\n\n					<div class="verticalSpace"></div>\n\n					<div class="detailsCardHeader">\n\n						<div class="detailsCardHeaderLeftText">Reminder</div>\n\n						<div class="detailsCardHeaderButton">\n\n							<img class="detailsCardPlusBtn" id="remindTransBtn" src="assets/imgs/icn_add.png" (tap)="saveReminderFlag()">\n\n						</div>\n\n						<div class="scDividerCards" style="margin-left:12px;"></div>\n\n					</div>\n\n					<div class="detailsCardContent">\n\n						<div class="detailsCardTipText" id="remindTransText">Click “+” to remind you when this happens again</div>\n\n					</div>\n\n				</div>\n\n				<!-- Location Card -->\n\n				<div class="locationCard detailsCard">\n\n					<div class="verticalSpace"></div>\n\n					<div class="detailsCardHeader">\n\n						<div class="detailsCardHeaderLeftText">Location</div>\n\n						<div class="detailsCardHeaderButton">\n\n							<img class="detailsCardPlusBtn" *ngIf="!transactionDetails.location" src="assets/imgs/icn_add.png" (tap)="addLocation()">\n\n							<img class="detailsCardPlusBtn" *ngIf="transactionDetails.location" src="assets/imgs/icn_added.png">\n\n						</div>\n\n						<div class="scDividerCards" style="margin-left:12px;"></div>\n\n					</div>\n\n					<div class="detailsCardContent">\n\n						<div class="detailsCardTipText" *ngIf="!transactionDetails.location">Search easily with locations, add it now! </div>\n\n						<div class="detailsCardTipText" *ngIf="transactionDetails.location">\n\n							<div class="location-header">\n\n								<img class="detailsCardPlusBtn" src="assets/imgs/icn_location.png" />\n\n								<span>{{transactionDetails.location.description}}</span>\n\n							</div>\n\n							<ngui-map [draggable]="false" [center]="transactionDetails.location.description" [fullscreenControl]="false" [disableDefaultUI]="true" #map>\n\n								<custom-marker [position]="transactionDetails.location.description" #marker>\n\n									<div>\n\n										<img src="assets/imgs/map_marker.png" width="30px;" height="50px;" />\n\n										<b>{{transactionDetails.location.description}}</b>\n\n\n\n									</div>\n\n								</custom-marker>\n\n							</ngui-map>\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<!-- Photo Card -->\n\n				<div class="photoCard detailsCard">\n\n					<div class="verticalSpace"></div>\n\n					<div class="detailsCardHeader">\n\n						<div class="detailsCardHeaderLeftText">Photos</div>\n\n						<div class="detailsCardHeaderButton">\n\n							<img class="detailsCardPlusBtn" src="assets/imgs/icn_add.png" (tap)="selectPhotos()">\n\n						</div>\n\n						<div class="scDividerCards" style="margin-left:12px;">\n\n\n\n						</div>\n\n					</div>\n\n					<div class="detailsCardContent">\n\n						<div class="detailsCardTipText" *ngIf="!transactionDetails.photos">Add photos, bring back memories when you search</div>\n\n						<div class="detailsCardTipText" *ngIf="transactionDetails.photos">\n\n								<div class="photos-header">\n\n										<img class="detailsCardPlusBtn" src="assets/imgs/icn_photos.png" />\n\n										<span>{{transactionDetails.photos.length}} photos</span>\n\n									</div>\n\n							<!-- when just one image-->\n\n					\n\n							<div class="img-collection" *ngIf="transactionDetails.photos.length ==1">\n\n									<div class="photo-container" *ngFor="let photo of transactionDetails.photos">\n\n										<img [src]="photo" (tap)="previewImages(transactionDetails.photos,0)" />\n\n									\n\n									</div>\n\n								</div>\n\n							<!-- when less than three images -->\n\n					\n\n							<div class="img-collection" *ngIf="transactionDetails.photos.length >1 ; let i = index">\n\n								<div class="album">\n\n									<div class="first-img-container" (tap)="previewImages(transactionDetails.photos,0)">\n\n										<img [src]="transactionDetails.photos[0]" />\n\n									</div>\n\n									<div class="second-img-container">\n\n										<div class="img-1" (tap)="previewImages(transactionDetails.photos,1)">\n\n												<img [src]="transactionDetails.photos[1]" />\n\n										</div>\n\n										<div class="img-2" *ngIf="transactionDetails.photos.length >=3">\n\n												<div class="overlay" (tap)="previewImages(transactionDetails.photos,0)" *ngIf="transactionDetails.photos.length >3">\n\n														+{{transactionDetails.photos.length-3}}\n\n													</div>\n\n												<img [src]="transactionDetails.photos[2]" (tap)="previewImages(transactionDetails.photos,2)"/>\n\n												\n\n										</div>\n\n									</div>\n\n								</div>\n\n							</div>\n\n							\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<!-- Notes Card -->\n\n				<div class="notesCard detailsCard" style="height:205px" (tap)="clickEditNotes()">\n\n					<div class="verticalSpace" (tap)="clickEditNotes()"></div>\n\n					<div class="detailsCardHeader" (tap)="clickEditNotes()">\n\n						<div class="detailsCardHeaderLeftText" (tap)="clickEditNotes()">Notes</div>\n\n						<div class="scDividerCards" style="margin-left:12px;" (tap)="clickEditNotes()"></div>\n\n					</div>\n\n					<div class="detailsCardContent">\n\n						<div class="detailsCardTipText" (tap)="clickEditNotes()">\n\n							<span #transDetailNotesSpan id="transDetailNotesSpan" class="detailsCardTipText">Type here, seperate with commas, search with tags</span>\n\n							<textarea #transDetailNotes id="transDetailNotes" type="text" class="detailsCardNotesEditInput" style="display:none" (keyup)="handleKeyUpForEditNotes($event)"\n\n							 (blur)="saveNotes()"></textarea>\n\n						</div>\n\n					</div>\n\n				</div>\n\n				<div style="height:40px">&nbsp;</div>\n\n			</div>\n\n		</div>\n\n	</div>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\pages\transdetail\transdetail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__providers_places_photo_search_places_photo_search__["a" /* PlacesPhotoSearchProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_places_photo_search_places_photo_search__["a" /* PlacesPhotoSearchProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _o || Object])
    ], TransdetailPage);
    return TransdetailPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=transdetail.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransdetailChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__ = __webpack_require__(563);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TransdetailChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransdetailChatPage = (function () {
    function TransdetailChatPage(navCtrl, navParams, chatService) {
        // get the trans id 
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatService = chatService;
        this.chatName = "some random place";
        this.userDisplayName = "Aman gupta";
        this.currentUserID = 1; // this should come from a service or localstorage 
        this.message = '';
        // actual messages shown in the window.
        this.chatMessages = [];
        this.TransId = this.navParams.data.transactionID;
        // pre-populate the chat page with data received in navparams.
        var chatHistory = navParams.data.chatHistory;
        if (chatHistory && chatHistory.length) {
            chatHistory.map(function (chat) { return _this.onMessage(chat); });
        }
        // start listening for new chats 
        this.chatSubscription = chatService.newMessage.subscribe(function (message) {
            _this.onMessage(message);
        });
    }
    TransdetailChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionDetailsChatPage');
    };
    TransdetailChatPage.prototype.shouldAddStamp = function (message, index) {
        if (this.chatMessages.length >= 2 && index != 0)
            return !this.sameDay(message.time, this.chatMessages[index - 1].time);
        else
            return true;
    };
    TransdetailChatPage.prototype.sameDay = function (date1, date2) {
        var d1 = new Date(date1);
        var d2 = new Date(date2);
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    };
    // add the message in the chat window 
    TransdetailChatPage.prototype.onMessage = function (message) {
        // create a new chat message object 
        var chatMessageObj = {
            displayName: message.displayName,
            userID: message.userID,
            time: message.time,
            data: [{
                    payload: message.data,
                    messageType: message.messageType
                }]
        };
        console.log(chatMessageObj);
        switch (this.chatMessages.length != 0) {
            case false: {
                // push the existing chat message 
                this.chatMessages.push(chatMessageObj);
                break;
            }
            case true: {
                // if it's a message from the same user .. add it to the existing chat message obj
                switch (chatMessageObj.userID === this.chatMessages[this.chatMessages.length - 1].userID) {
                    case true: {
                        // push the message into an existing chat message
                        this.chatMessages[this.chatMessages.length - 1].data.push(chatMessageObj.data[0]);
                        break;
                    }
                    case false: {
                        this.chatMessages.push(chatMessageObj);
                    }
                }
            }
        }
        this.scrollToBottom();
    };
    TransdetailChatPage.prototype.sendMessage = function (message, type) {
        var chatMessageObj = {
            displayName: this.userDisplayName,
            userID: this.currentUserID,
            messageType: new RegExp(/^@|:$/).test(message.trim()) == true ? 'emoji-only' : 'text',
            data: message.trim(),
            transactionID: this.TransId,
            time: Date.now()
        };
        // send the message via the chat service :
        this.chatService.send(chatMessageObj);
        // clear the text area
        this.message = '';
        /**TODO: remove below code  */
        /** emulate other person talking  */
        var chatMessageObj2 = {
            displayName: "Akshay P",
            userID: 2,
            messageType: new RegExp(/^@|:$/).test(message.trim()) == true ? 'emoji-only' : 'text',
            data: message.trim(),
            transactionID: this.TransId,
            time: Date.now()
        };
        this.chatService.send(chatMessageObj2);
    };
    TransdetailChatPage.prototype.scrollToBottom = function () {
        var element = document.getElementById("myScrollLabel");
        setTimeout(function () { element.scrollIntoView(true); }, 100);
    };
    TransdetailChatPage.prototype.getDateStamp = function (date) {
        var d = new Date(date);
        return d;
    };
    TransdetailChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transdetail-chat',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\pages\transdetail\transdetail-chat\transdetail-chat.html"*/'<!--\n  Generated template for the TransactionDetailsChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n   \n      <div class="custom-navbar">\n        <div class="flex-row">\n          <button class="back" navPop>\n            <</button>\n              <h4 class="title">Chat @ {{chatName}}</h4>\n        </div>\n        \n      </div>\n    \n  \n  </ion-header>\n  \n  \n  <ion-content padding class="chat-window"  no-bounce overflow-scroll="true">\n\n   <div *ngFor="let chatMessage of chatMessages; let i = index">\n\n    <h6 class="date-stamp" *ngIf="shouldAddStamp(chatMessage,i)">\n      {{ getDateStamp(chatMessage.time)  |  amCalendar}} \n    </h6>\n\n    \n    <chat-message   [data]="chatMessage"></chat-message>\n\n    </div>\n\n\n<div id="myScrollLabel" style="height:10px">&nbsp;</div>\n\n\n\n    <div class="chat-bar-container">\n      <textarea [(ngModel)]="message" placeholder="Write your message .."></textarea>\n      <button class="send" (click)="sendMessage(message,\'text\')" [attr.disabled]="message.length? null: true"> \n         <img src="assets/imgs/send_on.png" *ngIf="message.length">\n         <img src="assets/imgs/send_off.png " *ngIf="!message.length">\n      </button>\n    </div>\n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\pages\transdetail\transdetail-chat\transdetail-chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]])
    ], TransdetailChatPage);
    return TransdetailChatPage;
}());

//# sourceMappingURL=transdetail-chat.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesAutoCompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlacesAutoCompleteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PlacesAutoCompleteComponent = (function () {
    function PlacesAutoCompleteComponent() {
        var _this = this;
        this.autocompleteItems = [];
        this.autocomplete = {};
        this.Input = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        console.log('Hello PlacesAutoCompleteComponent Component');
        this.placeChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // add a debounce time to the input 
        this.Input
            .map(function (event) { return event.target.value; })
            .debounceTime(100)
            .distinctUntilChanged()
            .subscribe(function (val) {
            _this.updateSearch(val);
        });
    }
    PlacesAutoCompleteComponent.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    PlacesAutoCompleteComponent.prototype.updateSearch = function (event) {
        //console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        //console.log("Update Search", this.userLat, this.userLng);
        var config = {
            location: new google.maps.LatLng(this.center.lat, this.center.lng),
            radius: 1000,
            //componentRestrictions: { country: 'US' },
            //types:  ['geocode', 'establishment', 'regions', 'cities'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.autocomplete.query //componentRestrictions: { country: 'AR' } 
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            //console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            if (status == 'OK') {
                if (predictions) {
                    predictions.forEach(function (prediction) {
                        self.autocompleteItems.push(prediction);
                    });
                }
            }
        });
    };
    PlacesAutoCompleteComponent.prototype.chooseItem = function (item) {
        this.placeChanged.emit(item);
        this.autocomplete.query = item.description;
        this.autocompleteItems = [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('center'),
        __metadata("design:type", Object)
    ], PlacesAutoCompleteComponent.prototype, "center", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('placeChanged'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PlacesAutoCompleteComponent.prototype, "placeChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PlacesAutoCompleteComponent.prototype, "input", void 0);
    PlacesAutoCompleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'places-auto-complete',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\components\places-auto-complete\places-auto-complete.html"*/'<!-- Generated template for the PlacesAutoCompleteComponent component -->\n\n<input [(ngModel)]="autocomplete.query" (input)="Input.next($event)" placeholder="Enter location name or address" #input/>\n\n<ul>\n\n        <li *ngFor="let item of autocompleteItems" \n\n            (click)="chooseItem(item)">\n\n            {{ item.description }}\n\n        </li>\n\n</ul>\n\n    '/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\components\places-auto-complete\places-auto-complete.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PlacesAutoCompleteComponent);
    return PlacesAutoCompleteComponent;
}());

//# sourceMappingURL=places-auto-complete.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ImagePreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImagePreviewPage = (function () {
    function ImagePreviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = "";
        this.images = navParams.data.images;
        this.startAt = navParams.data.startAt;
        this.title = navParams.data.title;
        this.currentSlide = this.startAt + 1;
    }
    ImagePreviewPage.prototype.onSlideChange = function (val) {
        this.currentSlide = this.slider.getActiveIndex() + 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
    ], ImagePreviewPage.prototype, "slider", void 0);
    ImagePreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-image-preview',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\pages\image-preview\image-preview.html"*/'<!--\n\n  Generated template for the ImagePreviewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <div class="custom-navbar">\n\n    <div class="flex-row">\n\n      <button class="back" navPop>\n\n        <</button>\n\n          <h4 class="title">Photos @ {{title}}</h4>\n\n    </div>\n\n    \n\n  </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-slides #slider [initialSlide]="startAt" (ionSlideDidChange)="onSlideChange()">\n\n    <ion-slide *ngFor="let img of images">\n\n      <img [src]="img"/>\n\n    </ion-slide>\n\n  \n\n  </ion-slides>\n\n  <p class="pager">\n\n    <span>\n\n    {{currentSlide}}/{{this.images.length}}\n\n    </span> \n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\pages\image-preview\image-preview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ImagePreviewPage);
    return ImagePreviewPage;
}());

//# sourceMappingURL=image-preview.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(519);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_transdetail_transdetail__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_location_picker_location_picker__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_select_contacts_select_contacts__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngui_map__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_emojify__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_emojify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_emojify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_transdetail_transdetail_chat_transdetail_chat__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_transdetail_transdetail_chat_chat_message_chat_message__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_select_photos_select_photos__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_send_location_send_location__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_image_preview_image_preview__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_socket_io__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_moment__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_photo_library__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_components_module__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_places_photo_search_places_photo_search__ = __webpack_require__(870);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/** COPY THIS */













/** import the components module here */



/** COPY this config for socet io */
var config = { url: 'http://finterest.co:5500/', options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_location_picker_location_picker__["a" /* LocationPickerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_select_contacts_select_contacts__["a" /* SelectContactsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_transdetail_transdetail__["a" /* TransdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_transdetail_transdetail_chat_transdetail_chat__["a" /* TransdetailChatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_transdetail_transdetail_chat_chat_message_chat_message__["a" /* ChatMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_select_photos_select_photos__["a" /* SelectPhotosPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_send_location_send_location__["a" /* SendLocationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_image_preview_image_preview__["a" /* ImagePreviewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                /** place api key here */
                /** COPY THIS */
                __WEBPACK_IMPORTED_MODULE_21__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_18_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_10__ngui_map__["c" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?v=3&key=AIzaSyD9o5nDS5Okm1FqSXocY0rhGAoBxeb8-8k&libraries=places' }),
                __WEBPACK_IMPORTED_MODULE_11_angular2_emojify__["EmojifyModule"],
                __WEBPACK_IMPORTED_MODULE_17_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                /** COPY THIS */
                __WEBPACK_IMPORTED_MODULE_8__pages_location_picker_location_picker__["a" /* LocationPickerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_select_contacts_select_contacts__["a" /* SelectContactsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_transdetail_transdetail__["a" /* TransdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_transdetail_transdetail_chat_transdetail_chat__["a" /* TransdetailChatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_transdetail_transdetail_chat_chat_message_chat_message__["a" /* ChatMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_select_photos_select_photos__["a" /* SelectPhotosPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_send_location_send_location__["a" /* SendLocationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_image_preview_image_preview__["a" /* ImagePreviewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_photo_library__["a" /* PhotoLibrary */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_23__providers_places_photo_search_places_photo_search__["a" /* PlacesPhotoSearchProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n\n\n'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatServiceProvider = (function () {
    function ChatServiceProvider(socket) {
        var _this = this;
        this.socket = socket;
        console.log('Hello ChatServiceProvider Provider');
        this._newMessage = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.newMessage = this._newMessage.asObservable();
        this.socket.on('message', function (message) {
            _this._newMessage.next(message);
        });
    }
    ChatServiceProvider.prototype.send = function (message) {
        //TODO; do something with the message object
        this.socket.emit('message', message);
    };
    ChatServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"]])
    ], ChatServiceProvider);
    return ChatServiceProvider;
}());

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ChatMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ChatMessageComponent = (function () {
    function ChatMessageComponent() {
        // TODO: get this value from service
        this.currentUserID = '1';
        console.log('Hello ChatMessageComponent Component');
        this.text = "It's a :laughing:";
        this.emojiOnly = ":laughing:";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], ChatMessageComponent.prototype, "data", void 0);
    ChatMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chat-message',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\pages\transdetail\transdetail-chat\chat-message\chat-message.html"*/'<!-- Generated template for the ChatMessageComponent component -->\n<div class="chat-message-container" *ngIf="currentUserID != data.userID">\n\n  <!-- section for the messages from other users  -->\n\n  <avatar [img]="data.userImage" [userName]="data.displayName"></avatar>\n\n  <!-- chat messages of the user start here -->\n  <div class="messages-container">\n    <p class="user-name">{{data.displayName}}</p>\n\n    <div *ngFor="let message of data.data">\n      {{message.data | json}}\n      <p class="text-message" *ngIf="message.messageType == \'text\'">{{ message.payload | emojify }}</p>\n\n      <!-- emoji only -->\n\n      <p class="emoji-only" *ngIf="message.messageType == \'emoji-only\'">{{ message.payload | emojify }}</p>\n\n\n      <!-- location attachment -->\n      <div class="location-message" *ngIf="message.messageType == \'location\'">\n        <div class="location-container">\n          <ngui-map [center]="\'RR Nagar, Bengaluru, Karnataka, India\'" [fullscreenControl]="false" [disableDefaultUI]="true">\n            <custom-marker [position]="\'RR Nagar, Bengaluru, Karnataka, India\'">\n              <div>\n                <img src="assets/imgs/map_marker.png" width="30px;" height="50px;" />\n              </div>\n            </custom-marker>\n          </ngui-map>\n        </div>\n        <div class="location-display">\n          <h6>title</h6>\n          <p>address</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--section for app user message, needs to be put in ng-if -->\n\n\n\n\n<div class="chat-message-container self" *ngIf="currentUserID == data.userID">\n\n  <!-- this is just for creating an empty space for the flex to work correctly -->\n\n\n  <!-- chat messages of the user start here -->\n  <div class="messages-container">\n    \n  \n      <div *ngFor="let message of data.data">\n          <p class="text-message" *ngIf="message.messageType == \'text\'">{{ message.payload | emojify }}</p>\n          \n                <!-- emoji only -->\n          \n                <p class="emoji-only" *ngIf="message.messageType == \'emoji-only\'">{{ message.payload | emojify }}</p>\n  \n  \n        <!-- location attachment -->\n        <div class="location-message" *ngIf="message.messageType == \'location\'">\n          <div class="location-container">\n            <ngui-map [center]="\'RR Nagar, Bengaluru, Karnataka, India\'" [fullscreenControl]="false" [disableDefaultUI]="true">\n              <custom-marker [position]="\'RR Nagar, Bengaluru, Karnataka, India\'">\n                <div>\n                  <img src="assets/imgs/map_marker.png" width="30px;" height="50px;" />\n                </div>\n              </custom-marker>\n            </ngui-map>\n          </div>\n          <div class="location-display">\n            <h6>title</h6>\n            <p>address</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  <div class="delivery-status">\n    <ion-icon ios="ios-checkmark" md="md-checkmark"></ion-icon>\n  </div>\n</div>'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\pages\transdetail\transdetail-chat\chat-message\chat-message.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChatMessageComponent);
    return ChatMessageComponent;
}());

//# sourceMappingURL=chat-message.js.map

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 385,
	"./af.js": 385,
	"./ar": 386,
	"./ar-dz": 387,
	"./ar-dz.js": 387,
	"./ar-kw": 388,
	"./ar-kw.js": 388,
	"./ar-ly": 389,
	"./ar-ly.js": 389,
	"./ar-ma": 390,
	"./ar-ma.js": 390,
	"./ar-sa": 391,
	"./ar-sa.js": 391,
	"./ar-tn": 392,
	"./ar-tn.js": 392,
	"./ar.js": 386,
	"./az": 393,
	"./az.js": 393,
	"./be": 394,
	"./be.js": 394,
	"./bg": 395,
	"./bg.js": 395,
	"./bm": 396,
	"./bm.js": 396,
	"./bn": 397,
	"./bn.js": 397,
	"./bo": 398,
	"./bo.js": 398,
	"./br": 399,
	"./br.js": 399,
	"./bs": 400,
	"./bs.js": 400,
	"./ca": 401,
	"./ca.js": 401,
	"./cs": 402,
	"./cs.js": 402,
	"./cv": 403,
	"./cv.js": 403,
	"./cy": 404,
	"./cy.js": 404,
	"./da": 405,
	"./da.js": 405,
	"./de": 406,
	"./de-at": 407,
	"./de-at.js": 407,
	"./de-ch": 408,
	"./de-ch.js": 408,
	"./de.js": 406,
	"./dv": 409,
	"./dv.js": 409,
	"./el": 410,
	"./el.js": 410,
	"./en-au": 411,
	"./en-au.js": 411,
	"./en-ca": 412,
	"./en-ca.js": 412,
	"./en-gb": 413,
	"./en-gb.js": 413,
	"./en-ie": 414,
	"./en-ie.js": 414,
	"./en-nz": 415,
	"./en-nz.js": 415,
	"./eo": 416,
	"./eo.js": 416,
	"./es": 417,
	"./es-do": 418,
	"./es-do.js": 418,
	"./es-us": 419,
	"./es-us.js": 419,
	"./es.js": 417,
	"./et": 420,
	"./et.js": 420,
	"./eu": 421,
	"./eu.js": 421,
	"./fa": 422,
	"./fa.js": 422,
	"./fi": 423,
	"./fi.js": 423,
	"./fo": 424,
	"./fo.js": 424,
	"./fr": 425,
	"./fr-ca": 426,
	"./fr-ca.js": 426,
	"./fr-ch": 427,
	"./fr-ch.js": 427,
	"./fr.js": 425,
	"./fy": 428,
	"./fy.js": 428,
	"./gd": 429,
	"./gd.js": 429,
	"./gl": 430,
	"./gl.js": 430,
	"./gom-latn": 431,
	"./gom-latn.js": 431,
	"./gu": 432,
	"./gu.js": 432,
	"./he": 433,
	"./he.js": 433,
	"./hi": 434,
	"./hi.js": 434,
	"./hr": 435,
	"./hr.js": 435,
	"./hu": 436,
	"./hu.js": 436,
	"./hy-am": 437,
	"./hy-am.js": 437,
	"./id": 438,
	"./id.js": 438,
	"./is": 439,
	"./is.js": 439,
	"./it": 440,
	"./it.js": 440,
	"./ja": 441,
	"./ja.js": 441,
	"./jv": 442,
	"./jv.js": 442,
	"./ka": 443,
	"./ka.js": 443,
	"./kk": 444,
	"./kk.js": 444,
	"./km": 445,
	"./km.js": 445,
	"./kn": 446,
	"./kn.js": 446,
	"./ko": 447,
	"./ko.js": 447,
	"./ky": 448,
	"./ky.js": 448,
	"./lb": 449,
	"./lb.js": 449,
	"./lo": 450,
	"./lo.js": 450,
	"./lt": 451,
	"./lt.js": 451,
	"./lv": 452,
	"./lv.js": 452,
	"./me": 453,
	"./me.js": 453,
	"./mi": 454,
	"./mi.js": 454,
	"./mk": 455,
	"./mk.js": 455,
	"./ml": 456,
	"./ml.js": 456,
	"./mr": 457,
	"./mr.js": 457,
	"./ms": 458,
	"./ms-my": 459,
	"./ms-my.js": 459,
	"./ms.js": 458,
	"./my": 460,
	"./my.js": 460,
	"./nb": 461,
	"./nb.js": 461,
	"./ne": 462,
	"./ne.js": 462,
	"./nl": 463,
	"./nl-be": 464,
	"./nl-be.js": 464,
	"./nl.js": 463,
	"./nn": 465,
	"./nn.js": 465,
	"./pa-in": 466,
	"./pa-in.js": 466,
	"./pl": 467,
	"./pl.js": 467,
	"./pt": 468,
	"./pt-br": 469,
	"./pt-br.js": 469,
	"./pt.js": 468,
	"./ro": 470,
	"./ro.js": 470,
	"./ru": 471,
	"./ru.js": 471,
	"./sd": 472,
	"./sd.js": 472,
	"./se": 473,
	"./se.js": 473,
	"./si": 474,
	"./si.js": 474,
	"./sk": 475,
	"./sk.js": 475,
	"./sl": 476,
	"./sl.js": 476,
	"./sq": 477,
	"./sq.js": 477,
	"./sr": 478,
	"./sr-cyrl": 479,
	"./sr-cyrl.js": 479,
	"./sr.js": 478,
	"./ss": 480,
	"./ss.js": 480,
	"./sv": 481,
	"./sv.js": 481,
	"./sw": 482,
	"./sw.js": 482,
	"./ta": 483,
	"./ta.js": 483,
	"./te": 484,
	"./te.js": 484,
	"./tet": 485,
	"./tet.js": 485,
	"./th": 486,
	"./th.js": 486,
	"./tl-ph": 487,
	"./tl-ph.js": 487,
	"./tlh": 488,
	"./tlh.js": 488,
	"./tr": 489,
	"./tr.js": 489,
	"./tzl": 490,
	"./tzl.js": 490,
	"./tzm": 491,
	"./tzm-latn": 492,
	"./tzm-latn.js": 492,
	"./tzm.js": 491,
	"./uk": 493,
	"./uk.js": 493,
	"./ur": 494,
	"./ur.js": 494,
	"./uz": 495,
	"./uz-latn": 496,
	"./uz-latn.js": 496,
	"./uz.js": 495,
	"./vi": 497,
	"./vi.js": 497,
	"./x-pseudo": 498,
	"./x-pseudo.js": 498,
	"./yo": 499,
	"./yo.js": 499,
	"./zh-cn": 500,
	"./zh-cn.js": 500,
	"./zh-hk": 501,
	"./zh-hk.js": 501,
	"./zh-tw": 502,
	"./zh-tw.js": 502
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 865;

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avatar_avatar__ = __webpack_require__(869);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__places_auto_complete_places_auto_complete__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__avatar_avatar__["a" /* AvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__places_auto_complete_places_auto_complete__["a" /* PlacesAutoCompleteComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__avatar_avatar__["a" /* AvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__places_auto_complete_places_auto_complete__["a" /* PlacesAutoCompleteComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AvatarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AvatarComponent = (function () {
    function AvatarComponent() {
        console.log('Hello AvatarComponent Component');
    }
    Object.defineProperty(AvatarComponent.prototype, "getInitials", {
        set: function (val) {
            try {
                if (!val || val == "" || val == " ") {
                    this.initials = "?";
                    return;
                }
                ;
                var tmp = val.split(' ');
                switch (tmp.length) {
                    case 1: {
                        this.initials = tmp[0].length > 1 ? tmp[0].split('')[0].toUpperCase() + tmp[0].split('')[1].toUpperCase() : tmp[0].split('')[0].toUpperCase();
                        break;
                    }
                    case 2: {
                        // make sure the second character is not a special character
                        this.initials = new RegExp(/[a-zA-Z]/).test(tmp[1].split('1')[0]) ? tmp[0].split('')[0].toUpperCase() + tmp[1].split('')[0].toUpperCase() : tmp[0].split('')[0].toUpperCase() + tmp[0].split('')[1].toUpperCase();
                        break;
                    }
                    case 0: {
                        this.initials = "?";
                        break;
                    }
                    default: {
                        // make sure the second character is not a special character
                        this.initials = new RegExp(/[a-zA-Z]/).test(tmp[1].split('1')[0]) ? tmp[0].split('')[0].toUpperCase() + tmp[1].split('')[0].toUpperCase() : tmp[0].split('')[0].toUpperCase() + tmp[0].split('')[1].toUpperCase();
                        break;
                    }
                }
            }
            catch (e) {
                this.initials = "?";
                console.log('error with initials :', val);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('img'),
        __metadata("design:type", Object)
    ], AvatarComponent.prototype, "img", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('userName'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AvatarComponent.prototype, "getInitials", null);
    AvatarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'avatar',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\components\avatar\avatar.html"*/'<!-- Generated template for the AvatarComponent component -->\n\n<div class="avatar" *ngIf="!img">\n  {{initials}}\n</div>\n<img class="avatar" [attr.src]="img" *ngIf="img" />\n\n'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\components\avatar\avatar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AvatarComponent);
    return AvatarComponent;
}());

//# sourceMappingURL=avatar.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPhotoSearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PlacesPhotoSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PlacesPhotoSearchProvider = (function () {
    function PlacesPhotoSearchProvider(http) {
        this.http = http;
        this.apiKey = 'AIzaSyD9o5nDS5Okm1FqSXocY0rhGAoBxeb8-8k';
        console.log('Hello PlacesPhotoSearchProvider Provider');
    }
    PlacesPhotoSearchProvider.prototype.getPhotos = function (photoReference) {
        // let url =`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${this.apiKey}`;
        // TODO: remove after testing 
        var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyD9o5nDS5Okm1FqSXocY0rhGAoBxeb8-8k0";
        return this.http.get(url).map(function (res) { return res; });
    };
    PlacesPhotoSearchProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], PlacesPhotoSearchProvider);
    return PlacesPhotoSearchProvider;
    var _a;
}());

//# sourceMappingURL=places-photo-search.js.map

/***/ })

},[514]);
//# sourceMappingURL=main.js.map