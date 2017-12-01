webpackJsonp([0],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngui_map__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_places_auto_complete_places_auto_complete__ = __webpack_require__(379);
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
            selector: 'page-send-location',template:/*ion-inline-start:"/Users/amangupta/indiez/tllr/src/pages/send-location/send-location.html"*/'<!--\n  Generated template for the SendLocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <div class="custom-navbar">\n    <div class="flex-row">\n      <button class="back" navPop>\n        <</button>\n        <div class="search-bar" placeholder="Enter location name or address">\n          \n          <places-auto-complete [center]="center" (placeChanged)="placeChanged($event)" #searchBar ></places-auto-complete>\n        </div>\n    </div>\n    \n  </div>\n{{err|json}}\n</ion-header>\n\n\n<ion-content padding>\n    <ngui-map [center]="center" [fullscreenControl]="false" [disableDefaultUI]="true" #map>\n        <custom-marker [position]="center" #marker>\n          <div>\n            <img src="assets/imgs/map_marker.png" width="30px;" height="50px;" />\n            <b>{{center}}</b>\n           \n          </div>\n        </custom-marker>\n      </ngui-map>\n    \n    \n      <div class="continue-button" *ngIf="canContinue">\n        <button class="continue" (click)="confirm()">Done</button>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/amangupta/indiez/tllr/src/pages/send-location/send-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], SendLocationPage);
    return SendLocationPage;
}());

//# sourceMappingURL=send-location.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPhotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__ = __webpack_require__(380);
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
            console.log("photso fetched", photos);
            _this.callback(photos).then(function () {
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
            selector: 'page-select-photos',template:/*ion-inline-start:"/Users/amangupta/indiez/tllr/src/pages/select-photos/select-photos.html"*/'<!--\n  Generated template for the SelectPhotosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <div class="custom-navbar">\n    <div class="flex-row">\n      <button class="back" navPop>\n        <</button>\n          <h4 class="title">Add photos</h4>\n    </div>\n    \n  </div>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <div class="vertical-align" *ngIf="isLoading">\n    <div class="center-align">\n    <ion-spinner></ion-spinner>\n    </div>\n  </div>\n\n  <ion-list *ngFor="let img of images; let i = index">\n        \n        <h6 class="date-stamp" *ngIf="shouldAddStamp(img,i)">\n\n        {{ img.creationDate |  amParse:\'DD/MM/YYYY\' | amDateFormat:\'LL\'}}\n      </h6>\n      <br *ngIf="shouldAddStamp(img,i)">\n    \n      <div class="thumbnail">\n        <div class="overlay" *ngIf="img.selected"  (click)="unselect(img.index)">\n            <ion-icon ios="md-checkmark" md="md-checkmark"></ion-icon>\n        </div>\n      <img class="image" [src]="img.thumbnailURL" (click)="select(img.index)"/>\n      </div>  \n    \n    </ion-list>  \n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <div class="continue-button" *ngIf="listNotEmpty">\n      <button class="continue" (click)="getPhotos()">Done</button>\n  </div>\n \n  \n</ion-content>\n'/*ion-inline-end:"/Users/amangupta/indiez/tllr/src/pages/select-photos/select-photos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__["a" /* PhotoLibrary */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SelectPhotosPage);
    return SelectPhotosPage;
}());

//# sourceMappingURL=select-photos.js.map

/***/ }),

/***/ 171:
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
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 216:
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
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_picker_location_picker__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transdetail_transdetail__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_photos_select_photos__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__send_location_send_location__ = __webpack_require__(157);
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
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/amangupta/indiez/tllr/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button [navPush]="pushPage" [navParams]="params">select location</button>\n	<br><br>\n  <button ion-button [navPush]="pushTransPage" [navParams]="params">Transaction Detail Page</button>\n\n\n  <button ion-button [navPush]="photosPage" [navParams]="params">add photos</button>\n\n  <button ion-button [navPush]="sendLocation" [navParams]="params">send location</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/amangupta/indiez/tllr/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_contacts_select_contacts__ = __webpack_require__(263);
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
            selector: 'page-location-picker',template:/*ion-inline-start:"/Users/amangupta/indiez/tllr/src/pages/location-picker/location-picker.html"*/'<!--\n  Generated template for the LocationPickerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <div class="custom-navbar">\n    <div class="flex-row">\n      <button class="back" navPop>\n        <</button>\n          <h4 class="title">Pick a location</h4>\n    </div>\n    <h6 class="subtitle"> tell us where your business is located</h6>\n  </div>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ngui-map [center]="center" [fullscreenControl]="false" [disableDefaultUI]="true">\n    <custom-marker [position]="center">\n      <div>\n        <b>{{address.name}}</b>\n        <img src="assets/imgs/map_marker.png" width="30px;" height="50px;" />\n      </div>\n    </custom-marker>\n  </ngui-map>\n\n  <!-- address search bar -->\n  <div class="address-search-box">\n    <input type="text" places-auto-complete (place_changed)="placeChanged($event)" (input)="checkIfnotEmpty($event)" [types]="[\'geocode\']" placeholder="Enter business location"\n    />\n  </div>\n\n  <div class="continue-button" *ngIf="canContinue">\n    <button class="continue" (click)="confirm()">continue</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/amangupta/indiez/tllr/src/pages/location-picker/location-picker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], LocationPickerPage);
    return LocationPickerPage;
}());

//# sourceMappingURL=location-picker.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
        this.address = navParams.data; // just keep the data here
    }
    SelectContactsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SelectContactsPage');
        if (navigator.contactsPhoneNumbers)
            navigator.contactsPhoneNumbers.list(function (contacts) {
                _this.contacts = [];
                // sort in asc
                contacts = contacts.sort(function (a, b) { return a.displayName >= b.displayName ? 1 : -1; });
                for (var i = 0; i < contacts.length; i++) {
                    // take only what's needed
                    _this.contacts.push({
                        idx: i,
                        id: contacts[i].id,
                        picture: contacts[i].thumbnail ? _this.domsanitizer.bypassSecurityTrustUrl(contacts[i].thumbnail) : null,
                        phone: contacts[i].phoneNumbers[0].normalizedNumber,
                        name: contacts[i].displayName,
                        selected: false
                    });
                }
                _this.changeRef.detectChanges();
            }, function (error) {
                console.error(error);
            });
    };
    SelectContactsPage.prototype.selectContact = function (index) {
        this.contacts[index].selected = true;
        this.isListEmpty();
        this.changeRef.detectChanges();
    };
    SelectContactsPage.prototype.removeContact = function (index) {
        this.contacts[index].selected = false;
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
    SelectContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select-contacts',template:/*ion-inline-start:"/Users/amangupta/indiez/tllr/src/pages/select-contacts/select-contacts.html"*/'<!--\n  Generated ng-template for the SelectContactsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <div class="custom-navbar">\n        <div class="flex-row">\n          <button class="back" navPop>\n            <</button>\n              <h4 class="title">invite employees</h4>\n        </div>\n       \n      </div>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="flex-center">\n    <img src="assets/imgs/emoji_hi.png" class="title-image"/>\n  </div>\n\n  <div class="flex-center">\n    <input class="searchbar" placeholder="search employees" />\n  </div>\n\n  <div class="selected-employees">\n    <h6>selected employees</h6>\n    <p class="no-selection" *ngIf="!listNotEmpty">you haven’t selected anyone yet</p>\n\n    <span  *ngFor="let contact of contacts">\n    <div class="contact-card" *ngIf="contact.selected">\n        <avatar  [img]="contact.picture" [userName]="contact.name" ></avatar>\n\n        <div class="info">\n          <h4>{{contact.name}}</h4>\n          <p>{{contact.phone}}</p>\n        </div>\n        \n        <div class="controls">\n            <button  class="delete" (click)="removeContact(contact.idx)">Delete</button>\n        </div>\n    </div>\n  </span> \n    \n  </div>\n\n  <div class="existing-employees">\n      <h6>Employees on Teller</h6>\n\n      <!-- dummy contact card \n\n      <div class="contact-card" >\n          <img class="avatar" src="https://placeholdit.co//i/26x26?">\n\n          <div class="info">\n            <h4>aman gupta</h4>\n            <p>9717748633</p>\n          </div>\n          \n          <div class="controls">\n            <button  class="add">Add</button>\n            \n          </div>\n      </div>\n   dummy card ends -->\n      <span  *ngFor="let contact of contacts">\n      <div class="contact-card" *ngIf="!contact.selected" >\n          <avatar  [img]="contact.picture" [userName]="contact.name" ></avatar>\n          <div class="info">\n            <h4>{{contact.name}}</h4>\n            <p>{{contact.phone}}</p>\n          </div>\n          \n          <div class="controls">\n            <button  class="add" (click)="selectContact(contact.idx)">Add</button>\n            \n          </div>\n      </div>\n    </span>\n  </div>\n\n  <div class="continue-button" *ngIf="listNotEmpty">\n      <button class="continue" (click)="confirm()">continue</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/amangupta/indiez/tllr/src/pages/select-contacts/select-contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SelectContactsPage);
    return SelectContactsPage;
}());

//# sourceMappingURL=select-contacts.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transdetail_chat_transdetail_chat__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__send_location_send_location__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_photos_select_photos__ = __webpack_require__(158);
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
    function TransdetailPage(navCtrl, navParams, alertCtrl, renderer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.renderer = renderer;
        // the main transaction details object.
        this.transactionDetails = {
            photos: null,
            location: null,
            friends: [],
            chat: {}
        };
        this.chatPage = __WEBPACK_IMPORTED_MODULE_2__transdetail_chat_transdetail_chat__["a" /* TransdetailChatPage */];
        this.chatParams = {};
    }
    TransdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransdetailPage');
    };
    // pushes the add photos page with a call back to do processing after the photos have been collected
    TransdetailPage.prototype.selectPhotos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__select_photos_select_photos__["a" /* SelectPhotosPage */], {
            callback: function (photos) {
                //TODO: upload images and then show them in the images.
            }
        });
    };
    // fetches a location object and shows it in the transaction details page
    TransdetailPage.prototype.addLocation = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__send_location_send_location__["a" /* SendLocationPage */], {
            callback: function (location) {
                return new Promise(function (resolve, reject) {
                    //TODO: uplaod the location and then add it to the local object
                    console.log(location);
                    _this.transactionDetails.location = location;
                    resolve();
                });
            }
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
            selector: 'page-transdetail',template:/*ion-inline-start:"/Users/amangupta/indiez/tllr/src/pages/transdetail/transdetail.html"*/'<ion-content style="text-align:center" no-bounce overflow-scroll="true">\n	<div #transDetailBlock class="transDetailBlock animated" id="transDetailBlock">\n		<div class="headerSection" (tap)="closeTransDetail()">\n			<div class="leftBackBtn">\n				<img src="assets/imgs/icn_back.png" class="back-icon">\n			</div>\n			<div class="rightOnHeader">Transaction Details</div>\n		</div>\n		<div class="mainTransViewDataBlock" id="mainTransViewDataBlock">\n			<div class="transactionDetails">\n				<!-- Summary Card -->\n				<div id="transDetailCard" class="transDetailCard">\n					<ion-card class="statsCard">\n						<div class="scTopLeft">\n							<img src="assets/imgs/shopping.png" class="search_buttons">\n						</div>\n						<div class="scTopRight">\n							<div class="scTopRightName">Audible</div>\n							<div class="scTopRightInfoTextLessOpacity">Citi Double Cash Card xxx - 8010</div>\n						</div>\n						<div class="scDivider"></div>\n						<br>\n						<div class="scAmountLabel">Fri\n							<br>\n							<div class="scAmountLabelSpan">Day</div>\n						</div>\n						<div class="scAmountLabel" style="margin-left:10px">24 Nov\n							<br>\n							<div class="scAmountLabelSpan">Date</div>\n						</div>\n						<div class="scAmountLabel" style="width:116px;text-align:right;color:#d0011b">($ 14.95)\n							<br>\n							<div class="scAmountLabelSpan" style="text-align:right">Spent</div>\n						</div>\n					</ion-card>\n				</div>\n				<!-- Additional Stuff Card -->\n				<div class="detailsCard">\n					<div class="verticalSpace"></div>\n					<div class="detailsCardHeader">\n						<div class="detailsCardHeaderLeftText">Additional stuff</div>\n						<div class="detailsCardHeaderButton">\n							<img class="detailsCardPlusBtn" src="assets/imgs/icn_expand.png" (tap)="showTransDetailContent()">\n						</div>\n						<div class="scDividerCards" style="margin-left:12px;"></div>\n					</div>\n					<div class="detailsCardContent" (tap)="showTransDetailContent()">\n						<div class="detailsCardTipText" id="transDetailsContent">Click to view additionald details from the bank</div>\n					</div>\n				</div>\n				<!-- Content Separator -->\n				<div class="transDetailSeparator">\n					<div class="linePiece"></div>\n					<div class="lineSeparatorText">Add more details & search better</div>\n					<div class="linePiece"></div>\n				</div>\n				<div class="cardsGap"></div>\n				<!-- Tag Friends Card -->\n				<div #tagFriendsDivBlock class="tagFriendsCard detailsCard" id="tagFriendsCard">\n					<div class="verticalSpace"></div>\n					<div class="detailsCardHeader">\n						<div class="detailsCardHeaderLeftText">Friends</div>\n						<div class="detailsCardHeaderButton">\n							<img class="detailsCardPlusBtn" id="tagFriendsBtn" src="assets/imgs/icn_chat.png" [navPush]="chatPage" [navParams]="chatParams">\n						</div>\n						<div class="scDividerCards" style="margin-left:12px;"></div>\n					</div>\n					<div class="detailsCardContent" id="tagFriendsContent" (tap)="tagFriendsContentClick($event)">\n						<div class="detailsCardTipText">Group expenses easily by tagging friends & family</div>\n					</div>\n				</div>\n				<!-- Category Card -->\n				<div class="reCategorizeCard detailsCard">\n					<div class="verticalSpace"></div>\n					<div class="detailsCardHeader">\n						<div class="detailsCardHeaderLeftText">Category\n							<!--  -> &nbsp;<span id="categoryValue"></span> -->\n						</div>\n						<!-- <div class="recategorizeHeaderButton"><img src="assets/imgs/btn_edit.png" (tap)="showReCategorizationView()"></div> -->\n						<div class="detailsCardHeaderButton">\n							<img class="detailsCardPlusBtn" src="assets/imgs/icn_add.png" (tap)="showReCategorizationView()">\n						</div>\n						<div class="scDividerCards" style="margin-left:12px;margin-top: 0px;"></div>\n					</div>\n					<div class="detailsCardContent">\n						<div class="detailsCardTipText">Category is wrong? Feel free to change it</div>\n					</div>\n				</div>\n				<!-- Business Expense Card -->\n				<div class="isBusinessExpenseCard detailsCard">\n					<div class="verticalSpace"></div>\n					<div class="detailsCardHeader">\n						<div class="detailsCardHeaderLeftText">Business Expense</div>\n						<div class="detailsCardHeaderButton">\n							<img class="detailsCardPlusBtn" id="bizExpenseBtn" src="assets/imgs/icn_add.png" (tap)="saveBizExpenseFlag()">\n						</div>\n						<div class="scDividerCards" style="margin-left:12px;"></div>\n					</div>\n					<div class="detailsCardContent">\n						<div class="detailsCardTipText" id="bizExpenseText">Just click “+” and easily search biz expenses</div>\n					</div>\n				</div>\n				<!-- Tags Card -->\n				<div class="tagsCard detailsCard">\n					<div class="verticalSpace"></div>\n					<div class="detailsCardHeader">\n						<div class="detailsCardHeaderLeftText">Tags</div>\n						<div class="scDividerCards" style="margin-left:12px;"></div>\n					</div>\n					<div class="detailsCardContent">\n						<div class="detailsCardTipText" (tap)="clickEditTransactionTags()">\n							<span #transDetailTagSpan id="transDetailTagSpan" class="detailsCardTipText">Type here, seperate with commas, search with tags</span>\n							<input #transDetailTags id="transDetailTags" type="text" class="detailsCardTagEditInput" style="display:none;" (keyup)="handleKeyUpForEditTags($event)"\n							 (blur)="userPrefsOnSaveTags()" />\n						</div>\n					</div>\n				</div>\n				<!-- Reminder Card -->\n				<div class="reminderCard detailsCard">\n					<div class="verticalSpace"></div>\n					<div class="detailsCardHeader">\n						<div class="detailsCardHeaderLeftText">Reminder</div>\n						<div class="detailsCardHeaderButton">\n							<img class="detailsCardPlusBtn" id="remindTransBtn" src="assets/imgs/icn_add.png" (tap)="saveReminderFlag()">\n						</div>\n						<div class="scDividerCards" style="margin-left:12px;"></div>\n					</div>\n					<div class="detailsCardContent">\n						<div class="detailsCardTipText" id="remindTransText">Click “+” to remind you when this happens again</div>\n					</div>\n				</div>\n				<!-- Location Card -->\n				<div class="locationCard detailsCard">\n					<div class="verticalSpace"></div>\n					<div class="detailsCardHeader">\n						<div class="detailsCardHeaderLeftText">Location</div>\n						<div class="detailsCardHeaderButton">\n							<img class="detailsCardPlusBtn" *ngIf="!transactionDetails.location" src="assets/imgs/icn_add.png" (tap)="addLocation()">\n							<img class="detailsCardPlusBtn" *ngIf="transactionDetails.location" src="assets/imgs/icn_added.png" >\n						</div>\n						<div class="scDividerCards" style="margin-left:12px;"></div>\n					</div>\n					<div class="detailsCardContent">\n						<div class="detailsCardTipText" *ngIf="!transactionDetails.location">Search easily with locations, add it now! </div>\n						<div class="detailsCardTipText" *ngIf="transactionDetails.location">\n							<div class="location-header">\n								<img class="detailsCardPlusBtn"  src="assets/imgs/icn_add.png" />\n								<span>{{transactionDetails.location.description}}</span>\n							</div>\n								<ngui-map [center]="transactionDetails.location.description" [fullscreenControl]="false" [disableDefaultUI]="true" #map>\n										<custom-marker [position]="transactionDetails.location.description" #marker>\n										  <div>\n											<img src="assets/imgs/map_marker.png" width="30px;" height="50px;" />\n											<b>{{transactionDetails.location.description}}</b>\n										   \n										  </div>\n										</custom-marker>\n									  </ngui-map>\n						</div>\n					</div>\n				</div>\n				<!-- Photo Card -->\n				<div class="photoCard detailsCard">\n					<div class="verticalSpace"></div>\n					<div class="detailsCardHeader">\n						<div class="detailsCardHeaderLeftText">Photos</div>\n						<div class="detailsCardHeaderButton">\n							<img class="detailsCardPlusBtn" src="assets/imgs/icn_add.png" (tap)="selectPhotos()">\n						</div>\n						<div class="scDividerCards" style="margin-left:12px;">\n						\n						</div>\n					</div>\n					<div class="detailsCardContent">\n						<div class="detailsCardTipText">Add photos, bring back memories when you search</div>\n					</div>\n				</div>\n				<!-- Notes Card -->\n				<div class="notesCard detailsCard" style="height:205px" (tap)="clickEditNotes()">\n					<div class="verticalSpace" (tap)="clickEditNotes()"></div>\n					<div class="detailsCardHeader" (tap)="clickEditNotes()">\n						<div class="detailsCardHeaderLeftText" (tap)="clickEditNotes()">Notes</div>\n						<div class="scDividerCards" style="margin-left:12px;" (tap)="clickEditNotes()"></div>\n					</div>\n					<div class="detailsCardContent">\n						<div class="detailsCardTipText" (tap)="clickEditNotes()">\n							<span #transDetailNotesSpan id="transDetailNotesSpan" class="detailsCardTipText">Type here, seperate with commas, search with tags</span>\n							<textarea #transDetailNotes id="transDetailNotes" type="text"\n							 class="detailsCardNotesEditInput" style="display:none" (keyup)="handleKeyUpForEditNotes($event)" (blur)="saveNotes()"></textarea>\n						</div>\n					</div>\n				</div>\n				<div style="height:40px">&nbsp;</div>\n			</div>\n		</div>\n	</div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/amangupta/indiez/tllr/src/pages/transdetail/transdetail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _l || Object])
    ], TransdetailPage);
    return TransdetailPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=transdetail.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransdetailChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__ = __webpack_require__(560);
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
            selector: 'page-transdetail-chat',template:/*ion-inline-start:"/Users/amangupta/indiez/tllr/src/pages/transdetail/transdetail-chat/transdetail-chat.html"*/'<!--\n  Generated template for the TransactionDetailsChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n   \n      <div class="custom-navbar">\n        <div class="flex-row">\n          <button class="back" navPop>\n            <</button>\n              <h4 class="title">Chat @ {{chatName}}</h4>\n        </div>\n        \n      </div>\n    \n  \n  </ion-header>\n  \n  \n  <ion-content padding class="chat-window"  no-bounce overflow-scroll="true">\n\n   <div *ngFor="let chatMessage of chatMessages; let i = index">\n\n    <h6 class="date-stamp" *ngIf="shouldAddStamp(chatMessage,i)">\n      {{ getDateStamp(chatMessage.time)  |  amCalendar}} \n    </h6>\n\n    \n    <chat-message   [data]="chatMessage"></chat-message>\n\n    </div>\n\n\n<div id="myScrollLabel" style="height:10px">&nbsp;</div>\n\n\n\n    <div class="chat-bar-container">\n      <textarea [(ngModel)]="message" placeholder="Write your message .."></textarea>\n      <button class="send" (click)="sendMessage(message,\'text\')" [attr.disabled]="message.length? null: true"> \n         <img src="assets/imgs/send_on.png" *ngIf="message.length">\n         <img src="assets/imgs/send_off.png " *ngIf="!message.length">\n      </button>\n    </div>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/amangupta/indiez/tllr/src/pages/transdetail/transdetail-chat/transdetail-chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]])
    ], TransdetailChatPage);
    return TransdetailChatPage;
}());

//# sourceMappingURL=transdetail-chat.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesAutoCompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(284);
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
            selector: 'places-auto-complete',template:/*ion-inline-start:"/Users/amangupta/indiez/tllr/src/components/places-auto-complete/places-auto-complete.html"*/'<!-- Generated template for the PlacesAutoCompleteComponent component -->\n<input [(ngModel)]="autocomplete.query" (input)="Input.next($event)" placeholder="Enter location name or address" #input/>\n<ul>\n        <li *ngFor="let item of autocompleteItems" \n            (click)="chooseItem(item)">\n            {{ item.description }}\n        </li>\n</ul>\n    '/*ion-inline-end:"/Users/amangupta/indiez/tllr/src/components/places-auto-complete/places-auto-complete.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PlacesAutoCompleteComponent);
    return PlacesAutoCompleteComponent;
}());

//# sourceMappingURL=places-auto-complete.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(516);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_transdetail_transdetail__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_location_picker_location_picker__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_select_contacts_select_contacts__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngui_map__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_emojify__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_emojify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_emojify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_transdetail_transdetail_chat_transdetail_chat__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_transdetail_transdetail_chat_chat_message_chat_message__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_select_photos_select_photos__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_send_location_send_location__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_socket_io__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_moment__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_photo_library__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_components_module__ = __webpack_require__(867);
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
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                /** place api key here */
                /** COPY THIS */
                __WEBPACK_IMPORTED_MODULE_20__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_17_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_10__ngui_map__["c" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?v=3&key=AIzaSyD9o5nDS5Okm1FqSXocY0rhGAoBxeb8-8k&libraries=places' }),
                __WEBPACK_IMPORTED_MODULE_11_angular2_emojify__["EmojifyModule"],
                __WEBPACK_IMPORTED_MODULE_16_ng_socket_io__["SocketIoModule"].forRoot(config)
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
                __WEBPACK_IMPORTED_MODULE_15__pages_send_location_send_location__["a" /* SendLocationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_photo_library__["a" /* PhotoLibrary */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(261);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/amangupta/indiez/tllr/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/Users/amangupta/indiez/tllr/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(284);
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

/***/ 578:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 862:
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
            selector: 'chat-message',template:/*ion-inline-start:"/Users/amangupta/indiez/tllr/src/pages/transdetail/transdetail-chat/chat-message/chat-message.html"*/'<!-- Generated template for the ChatMessageComponent component -->\n<div class="chat-message-container" *ngIf="currentUserID != data.userID">\n\n  <!-- section for the messages from other users  -->\n\n  <avatar [img]="data.userImage" [userName]="data.displayName"></avatar>\n\n  <!-- chat messages of the user start here -->\n  <div class="messages-container">\n    <p class="user-name">{{data.displayName}}</p>\n\n    <div *ngFor="let message of data.data">\n      {{message.data | json}}\n      <p class="text-message" *ngIf="message.messageType == \'text\'">{{ message.payload | emojify }}</p>\n\n      <!-- emoji only -->\n\n      <p class="emoji-only" *ngIf="message.messageType == \'emoji-only\'">{{ message.payload | emojify }}</p>\n\n\n      <!-- location attachment -->\n      <div class="location-message" *ngIf="message.messageType == \'location\'">\n        <div class="location-container">\n          <ngui-map [center]="\'RR Nagar, Bengaluru, Karnataka, India\'" [fullscreenControl]="false" [disableDefaultUI]="true">\n            <custom-marker [position]="\'RR Nagar, Bengaluru, Karnataka, India\'">\n              <div>\n                <img src="assets/imgs/map_marker.png" width="30px;" height="50px;" />\n              </div>\n            </custom-marker>\n          </ngui-map>\n        </div>\n        <div class="location-display">\n          <h6>title</h6>\n          <p>address</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--section for app user message, needs to be put in ng-if -->\n\n\n\n\n<div class="chat-message-container self" *ngIf="currentUserID == data.userID">\n\n  <!-- this is just for creating an empty space for the flex to work correctly -->\n\n\n  <!-- chat messages of the user start here -->\n  <div class="messages-container">\n    \n  \n      <div *ngFor="let message of data.data">\n          <p class="text-message" *ngIf="message.messageType == \'text\'">{{ message.payload | emojify }}</p>\n          \n                <!-- emoji only -->\n          \n                <p class="emoji-only" *ngIf="message.messageType == \'emoji-only\'">{{ message.payload | emojify }}</p>\n  \n  \n        <!-- location attachment -->\n        <div class="location-message" *ngIf="message.messageType == \'location\'">\n          <div class="location-container">\n            <ngui-map [center]="\'RR Nagar, Bengaluru, Karnataka, India\'" [fullscreenControl]="false" [disableDefaultUI]="true">\n              <custom-marker [position]="\'RR Nagar, Bengaluru, Karnataka, India\'">\n                <div>\n                  <img src="assets/imgs/map_marker.png" width="30px;" height="50px;" />\n                </div>\n              </custom-marker>\n            </ngui-map>\n          </div>\n          <div class="location-display">\n            <h6>title</h6>\n            <p>address</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  <div class="delivery-status">\n    <ion-icon ios="ios-checkmark" md="md-checkmark"></ion-icon>\n  </div>\n</div>'/*ion-inline-end:"/Users/amangupta/indiez/tllr/src/pages/transdetail/transdetail-chat/chat-message/chat-message.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChatMessageComponent);
    return ChatMessageComponent;
}());

//# sourceMappingURL=chat-message.js.map

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 382,
	"./af.js": 382,
	"./ar": 383,
	"./ar-dz": 384,
	"./ar-dz.js": 384,
	"./ar-kw": 385,
	"./ar-kw.js": 385,
	"./ar-ly": 386,
	"./ar-ly.js": 386,
	"./ar-ma": 387,
	"./ar-ma.js": 387,
	"./ar-sa": 388,
	"./ar-sa.js": 388,
	"./ar-tn": 389,
	"./ar-tn.js": 389,
	"./ar.js": 383,
	"./az": 390,
	"./az.js": 390,
	"./be": 391,
	"./be.js": 391,
	"./bg": 392,
	"./bg.js": 392,
	"./bm": 393,
	"./bm.js": 393,
	"./bn": 394,
	"./bn.js": 394,
	"./bo": 395,
	"./bo.js": 395,
	"./br": 396,
	"./br.js": 396,
	"./bs": 397,
	"./bs.js": 397,
	"./ca": 398,
	"./ca.js": 398,
	"./cs": 399,
	"./cs.js": 399,
	"./cv": 400,
	"./cv.js": 400,
	"./cy": 401,
	"./cy.js": 401,
	"./da": 402,
	"./da.js": 402,
	"./de": 403,
	"./de-at": 404,
	"./de-at.js": 404,
	"./de-ch": 405,
	"./de-ch.js": 405,
	"./de.js": 403,
	"./dv": 406,
	"./dv.js": 406,
	"./el": 407,
	"./el.js": 407,
	"./en-au": 408,
	"./en-au.js": 408,
	"./en-ca": 409,
	"./en-ca.js": 409,
	"./en-gb": 410,
	"./en-gb.js": 410,
	"./en-ie": 411,
	"./en-ie.js": 411,
	"./en-nz": 412,
	"./en-nz.js": 412,
	"./eo": 413,
	"./eo.js": 413,
	"./es": 414,
	"./es-do": 415,
	"./es-do.js": 415,
	"./es-us": 416,
	"./es-us.js": 416,
	"./es.js": 414,
	"./et": 417,
	"./et.js": 417,
	"./eu": 418,
	"./eu.js": 418,
	"./fa": 419,
	"./fa.js": 419,
	"./fi": 420,
	"./fi.js": 420,
	"./fo": 421,
	"./fo.js": 421,
	"./fr": 422,
	"./fr-ca": 423,
	"./fr-ca.js": 423,
	"./fr-ch": 424,
	"./fr-ch.js": 424,
	"./fr.js": 422,
	"./fy": 425,
	"./fy.js": 425,
	"./gd": 426,
	"./gd.js": 426,
	"./gl": 427,
	"./gl.js": 427,
	"./gom-latn": 428,
	"./gom-latn.js": 428,
	"./gu": 429,
	"./gu.js": 429,
	"./he": 430,
	"./he.js": 430,
	"./hi": 431,
	"./hi.js": 431,
	"./hr": 432,
	"./hr.js": 432,
	"./hu": 433,
	"./hu.js": 433,
	"./hy-am": 434,
	"./hy-am.js": 434,
	"./id": 435,
	"./id.js": 435,
	"./is": 436,
	"./is.js": 436,
	"./it": 437,
	"./it.js": 437,
	"./ja": 438,
	"./ja.js": 438,
	"./jv": 439,
	"./jv.js": 439,
	"./ka": 440,
	"./ka.js": 440,
	"./kk": 441,
	"./kk.js": 441,
	"./km": 442,
	"./km.js": 442,
	"./kn": 443,
	"./kn.js": 443,
	"./ko": 444,
	"./ko.js": 444,
	"./ky": 445,
	"./ky.js": 445,
	"./lb": 446,
	"./lb.js": 446,
	"./lo": 447,
	"./lo.js": 447,
	"./lt": 448,
	"./lt.js": 448,
	"./lv": 449,
	"./lv.js": 449,
	"./me": 450,
	"./me.js": 450,
	"./mi": 451,
	"./mi.js": 451,
	"./mk": 452,
	"./mk.js": 452,
	"./ml": 453,
	"./ml.js": 453,
	"./mr": 454,
	"./mr.js": 454,
	"./ms": 455,
	"./ms-my": 456,
	"./ms-my.js": 456,
	"./ms.js": 455,
	"./my": 457,
	"./my.js": 457,
	"./nb": 458,
	"./nb.js": 458,
	"./ne": 459,
	"./ne.js": 459,
	"./nl": 460,
	"./nl-be": 461,
	"./nl-be.js": 461,
	"./nl.js": 460,
	"./nn": 462,
	"./nn.js": 462,
	"./pa-in": 463,
	"./pa-in.js": 463,
	"./pl": 464,
	"./pl.js": 464,
	"./pt": 465,
	"./pt-br": 466,
	"./pt-br.js": 466,
	"./pt.js": 465,
	"./ro": 467,
	"./ro.js": 467,
	"./ru": 468,
	"./ru.js": 468,
	"./sd": 469,
	"./sd.js": 469,
	"./se": 470,
	"./se.js": 470,
	"./si": 471,
	"./si.js": 471,
	"./sk": 472,
	"./sk.js": 472,
	"./sl": 473,
	"./sl.js": 473,
	"./sq": 474,
	"./sq.js": 474,
	"./sr": 475,
	"./sr-cyrl": 476,
	"./sr-cyrl.js": 476,
	"./sr.js": 475,
	"./ss": 477,
	"./ss.js": 477,
	"./sv": 478,
	"./sv.js": 478,
	"./sw": 479,
	"./sw.js": 479,
	"./ta": 480,
	"./ta.js": 480,
	"./te": 481,
	"./te.js": 481,
	"./tet": 482,
	"./tet.js": 482,
	"./th": 483,
	"./th.js": 483,
	"./tl-ph": 484,
	"./tl-ph.js": 484,
	"./tlh": 485,
	"./tlh.js": 485,
	"./tr": 486,
	"./tr.js": 486,
	"./tzl": 487,
	"./tzl.js": 487,
	"./tzm": 488,
	"./tzm-latn": 489,
	"./tzm-latn.js": 489,
	"./tzm.js": 488,
	"./uk": 490,
	"./uk.js": 490,
	"./ur": 491,
	"./ur.js": 491,
	"./uz": 492,
	"./uz-latn": 493,
	"./uz-latn.js": 493,
	"./uz.js": 492,
	"./vi": 494,
	"./vi.js": 494,
	"./x-pseudo": 495,
	"./x-pseudo.js": 495,
	"./yo": 496,
	"./yo.js": 496,
	"./zh-cn": 497,
	"./zh-cn.js": 497,
	"./zh-hk": 498,
	"./zh-hk.js": 498,
	"./zh-tw": 499,
	"./zh-tw.js": 499
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
webpackContext.id = 864;

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avatar_avatar__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__places_auto_complete_places_auto_complete__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(27);
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

/***/ 868:
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
            selector: 'avatar',template:/*ion-inline-start:"/Users/amangupta/indiez/tllr/src/components/avatar/avatar.html"*/'<!-- Generated template for the AvatarComponent component -->\n\n<div class="avatar" *ngIf="!img">\n  {{initials}}\n</div>\n<img class="avatar" [attr.src]="img" *ngIf="img" />\n\n'/*ion-inline-end:"/Users/amangupta/indiez/tllr/src/components/avatar/avatar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AvatarComponent);
    return AvatarComponent;
}());

//# sourceMappingURL=avatar.js.map

/***/ })

},[511]);
//# sourceMappingURL=main.js.map