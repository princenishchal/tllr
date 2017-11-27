webpackJsonp([0],{

/***/ 169:
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
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 214:
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
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_picker_location_picker__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transdetail_transdetail__ = __webpack_require__(262);
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
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Accedo\deleteme\tllr\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <button ion-button [navPush]="pushPage" [navParams]="params">select location</button>\n\n	<br><br>\n\n  <button ion-button [navPush]="pushTransPage" [navParams]="params">Transaction Detail Page</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Accedo\deleteme\tllr\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_contacts_select_contacts__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngui_map__ = __webpack_require__(852);
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
    function LocationPickerPage(navCtrl, navParams, ref, geolocaton) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.geolocaton = geolocaton;
        this.address = {};
        this.center = "";
        this.canContinue = false;
    }
    LocationPickerPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ionViewDidLoad LocationPickerPage');
        this.mapComponent.mapReady$.subscribe(function (r) {
            _this.geolocaton.getCurrentPosition().then(function (loc) {
                console.log(loc);
                var userPos = {
                    lat: loc.coords.latitude,
                    lng: loc.coords.longitude
                };
                _this.center = userPos;
                _this.autoCompleteBounds = _this.mapComponent.map.getBounds();
            });
            _this.autoCompleteBounds = _this.mapComponent.map.getBounds();
        });
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__select_contacts_select_contacts__["a" /* SelectContactsPage */], this.address);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapComponent'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngui_map__["a" /* NguiMapComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngui_map__["a" /* NguiMapComponent */]) === "function" && _a || Object)
    ], LocationPickerPage.prototype, "mapComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('autoCompleteForm'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ngui_map__["c" /* PlacesAutoComplete */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngui_map__["c" /* PlacesAutoComplete */]) === "function" && _b || Object)
    ], LocationPickerPage.prototype, "autoComplete", void 0);
    LocationPickerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-location-picker',template:/*ion-inline-start:"C:\Users\Accedo\deleteme\tllr\src\pages\location-picker\location-picker.html"*/'<!--\n\n  Generated template for the LocationPickerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <div class="custom-navbar">\n\n    <div class="flex-row">\n\n      <button class="back" navPop>\n\n        <</button>\n\n          <h4 class="title">Pick a location</h4>\n\n    </div>\n\n    <h6 class="subtitle"> tell us where your business is located</h6>\n\n  </div>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ngui-map [center]="center" [fullscreenControl]="false" [disableDefaultUI]="true" #mapComponent >\n\n    <custom-marker [position]="center">\n\n      <div>\n\n        <b *ngIf="address">{{address.name}}</b>\n\n        <img src="assets/imgs/map_marker.png" width="30px;" height="50px;" />\n\n      </div>\n\n    </custom-marker>\n\n  </ngui-map>\n\n\n\n  <!-- address search bar -->\n\n  <div class="address-search-box">\n\n    <input type="text" #autoCompleteForm places-auto-complete (place_changed)="placeChanged($event)" [location]="" [bounds]="autoCompleteBounds" (input)="checkIfnotEmpty($event)" [types]="[\'establishment\']"  placeholder="Enter business location"\n\n    />\n\n  </div>\n\n\n\n  <div class="continue-button" *ngIf="canContinue">\n\n    <button class="continue" (click)="confirm()">continue</button>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Accedo\deleteme\tllr\src\pages\location-picker\location-picker.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _f || Object])
    ], LocationPickerPage);
    return LocationPickerPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=location-picker.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(41);
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
            selector: 'page-select-contacts',template:/*ion-inline-start:"C:\Users\Accedo\deleteme\tllr\src\pages\select-contacts\select-contacts.html"*/'<!--\n\n  Generated ng-template for the SelectContactsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <div class="custom-navbar">\n\n        <div class="flex-row">\n\n          <button class="back" navPop>\n\n            <</button>\n\n              <h4 class="title">invite employees</h4>\n\n        </div>\n\n       \n\n      </div>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="flex-center">\n\n    <img src="assets/imgs/emoji_hi.png" class="title-image"/>\n\n  </div>\n\n\n\n  <div class="flex-center">\n\n    <input class="searchbar" placeholder="search employees" />\n\n  </div>\n\n\n\n  <div class="selected-employees">\n\n    <h6>selected employees</h6>\n\n    <p class="no-selection" *ngIf="!listNotEmpty">you haven’t selected anyone yet</p>\n\n\n\n    <span  *ngFor="let contact of contacts">\n\n    <div class="contact-card" *ngIf="contact.selected">\n\n        <avatar  [img]="contact.picture" [userName]="contact.name" ></avatar>\n\n\n\n        <div class="info">\n\n          <h4>{{contact.name}}</h4>\n\n          <p>{{contact.phone}}</p>\n\n        </div>\n\n        \n\n        <div class="controls">\n\n            <button  class="delete" (click)="removeContact(contact.idx)">Delete</button>\n\n        </div>\n\n    </div>\n\n  </span> \n\n    \n\n  </div>\n\n\n\n  <div class="existing-employees">\n\n      <h6>Employees on Teller</h6>\n\n\n\n      <!-- dummy contact card \n\n\n\n      <div class="contact-card" >\n\n          <img class="avatar" src="https://placeholdit.co//i/26x26?">\n\n\n\n          <div class="info">\n\n            <h4>aman gupta</h4>\n\n            <p>9717748633</p>\n\n          </div>\n\n          \n\n          <div class="controls">\n\n            <button  class="add">Add</button>\n\n            \n\n          </div>\n\n      </div>\n\n   dummy card ends -->\n\n      <span  *ngFor="let contact of contacts">\n\n      <div class="contact-card" *ngIf="!contact.selected" >\n\n          <avatar  [img]="contact.picture" [userName]="contact.name" ></avatar>\n\n          <div class="info">\n\n            <h4>{{contact.name}}</h4>\n\n            <p>{{contact.phone}}</p>\n\n          </div>\n\n          \n\n          <div class="controls">\n\n            <button  class="add" (click)="selectContact(contact.idx)">Add</button>\n\n            \n\n          </div>\n\n      </div>\n\n    </span>\n\n  </div>\n\n\n\n  <div class="continue-button" *ngIf="listNotEmpty">\n\n      <button class="continue" (click)="confirm()">continue</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Accedo\deleteme\tllr\src\pages\select-contacts\select-contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SelectContactsPage);
    return SelectContactsPage;
}());

//# sourceMappingURL=select-contacts.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transdetail_chat_transdetail_chat__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransdetailPage = (function () {
    function TransdetailPage(navCtrl, navParams, alertCtrl, renderer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.renderer = renderer;
        this.chatPage = __WEBPACK_IMPORTED_MODULE_2__transdetail_chat_transdetail_chat__["a" /* TransdetailChatPage */];
        this.chatParams = {};
    }
    TransdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransdetailPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('transDetailBlock'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TransdetailPage.prototype, "transDetailBlock", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('transDetailTags'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TransdetailPage.prototype, "transDetailTags", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('transDetailTagSpan'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TransdetailPage.prototype, "transDetailTagSpan", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('transDetailNotes'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TransdetailPage.prototype, "transDetailNotes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('transDetailNotesSpan'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TransdetailPage.prototype, "transDetailNotesSpan", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chatsDetailBlock'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TransdetailPage.prototype, "chatsDetailBlock", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tagFriendsDivBlock'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TransdetailPage.prototype, "tagFriendsDivBlock", void 0);
    TransdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transdetail',template:/*ion-inline-start:"C:\Users\Accedo\deleteme\tllr\src\pages\transdetail\transdetail.html"*/'<ion-content style="text-align:center" no-bounce overflow-scroll="true">\n\n	<div #transDetailBlock class="transDetailBlock animated" id="transDetailBlock">\n\n		<div class="headerSection" (tap)="closeTransDetail()">\n\n      		<div class="leftBackBtn"><img src="assets/imgs/icn_back.png" class="back-icon" ></div>\n\n      		<div class="rightOnHeader">Transaction Details</div>\n\n    	</div>\n\n    	<div class="mainTransViewDataBlock" id="mainTransViewDataBlock">\n\n    		<div class="transactionDetails">\n\n    			<!-- Summary Card -->\n\n    			<div id="transDetailCard" class="transDetailCard">\n\n    				<ion-card class="statsCard"><div class="scTopLeft"><img  src="assets/imgs/shopping.png" class="search_buttons"></div><div class="scTopRight"><div class="scTopRightName">Audible</div><div class="scTopRightInfoTextLessOpacity">Citi Double Cash Card xxx - 8010</div></div><div class="scDivider"></div><br><div class="scAmountLabel">Fri<br><div class="scAmountLabelSpan">Day</div></div><div class="scAmountLabel" style="margin-left:10px">24 Nov<br><div class="scAmountLabelSpan">Date</div></div><div class="scAmountLabel" style="width:116px;text-align:right;color:#d0011b">($ 14.95)<br><div class="scAmountLabelSpan" style="text-align:right">Spent</div></div></ion-card>\n\n    			</div>\n\n    			<!-- Additional Stuff Card -->\n\n    			<div class="detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Additional stuff</div>\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn"  src="assets/imgs/icn_expand.png" (tap)="showTransDetailContent()"></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent" (tap)="showTransDetailContent()"><div class="detailsCardTipText" id="transDetailsContent">Click to view additionald details from the bank</div></div>\n\n    			</div>\n\n    			<!-- Content Separator -->\n\n    			<div class="transDetailSeparator">\n\n    				<div class="linePiece"></div><div class="lineSeparatorText">Add more details & search better</div><div class="linePiece"></div>\n\n    			</div>\n\n    			<div class="cardsGap"></div>\n\n    			<!-- Tag Friends Card -->\n\n    			<div #tagFriendsDivBlock class="tagFriendsCard detailsCard" id="tagFriendsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Friends</div>\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn" id="tagFriendsBtn" src="assets/imgs/icn_chat.png" [navPush]="chatPage" [navParams]="chatParams" ></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent" id="tagFriendsContent" (tap)="tagFriendsContentClick($event)">\n\n    					<div class="detailsCardTipText">Group expenses easily by tagging friends & family</div>\n\n    				</div>\n\n    			</div>\n\n    			<!-- Category Card -->\n\n    			<div class="reCategorizeCard detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Category<!--  -> &nbsp;<span id="categoryValue"></span> --></div>\n\n    					<!-- <div class="recategorizeHeaderButton"><img src="assets/imgs/btn_edit.png" (tap)="showReCategorizationView()"></div> -->\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn" src="assets/imgs/icn_add.png" (tap)="showReCategorizationView()"></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;margin-top: 0px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent"><div class="detailsCardTipText">Category is wrong? Feel free to change it</div></div>\n\n    			</div>\n\n    			<!-- Business Expense Card -->\n\n    			<div class="isBusinessExpenseCard detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Business Expense</div>\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn" id="bizExpenseBtn" src="assets/imgs/icn_add.png" (tap)="saveBizExpenseFlag()"></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent"><div class="detailsCardTipText" id="bizExpenseText">Just click “+” and easily search biz expenses</div></div>\n\n    			</div>\n\n    			<!-- Tags Card -->\n\n    			<div class="tagsCard detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Tags</div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent">\n\n    					<div class="detailsCardTipText" (tap)="clickEditTransactionTags()" >\n\n    						<span #transDetailTagSpan id="transDetailTagSpan" class="detailsCardTipText" >Type here, seperate with commas, search with tags</span>\n\n    						<input #transDetailTags id="transDetailTags" type="text" class="detailsCardTagEditInput" style="display:none;" (keyup)="handleKeyUpForEditTags($event)" (blur)="userPrefsOnSaveTags()"/>\n\n    					</div>\n\n    				</div>\n\n    			</div>\n\n    			<!-- Reminder Card -->\n\n    			<div class="reminderCard detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Reminder</div>\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn" id="remindTransBtn" src="assets/imgs/icn_add.png" (tap)="saveReminderFlag()"></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent"><div class="detailsCardTipText" id="remindTransText">Click “+”  to remind you when this happens again</div></div>\n\n    			</div>\n\n    			<!-- Location Card -->\n\n    			<div class="locationCard detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Location</div>\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn" src="assets/imgs/icn_add.png" (tap)="showWIPAlert()"></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent"><div class="detailsCardTipText">Search easily with locations, add it now! </div></div>\n\n    			</div>\n\n    			<!-- Photo Card -->\n\n    			<div class="photoCard detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Photos</div>\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn" src="assets/imgs/icn_add.png" (tap)="showWIPAlert()"></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent"><div class="detailsCardTipText">Add photos, bring back memories when you search</div></div>\n\n    			</div>\n\n    			<!-- Notes Card -->\n\n    			<div class="notesCard detailsCard" style="height:205px" (tap)="clickEditNotes()" >\n\n    				<div class="verticalSpace" (tap)="clickEditNotes()"></div>\n\n    				<div class="detailsCardHeader" (tap)="clickEditNotes()">\n\n    					<div class="detailsCardHeaderLeftText" (tap)="clickEditNotes()">Notes</div>\n\n    					<div class="scDividerCards" style="margin-left:12px;" (tap)="clickEditNotes()"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent"><div class="detailsCardTipText" (tap)="clickEditNotes()">\n\n    					<span #transDetailNotesSpan id="transDetailNotesSpan" class="detailsCardTipText" >Type here, seperate with commas, search with tags</span><textarea #transDetailNotes id="transDetailNotes" type="text" class="detailsCardNotesEditInput" style="display:none" (keyup)="handleKeyUpForEditNotes($event)" (blur)="saveNotes()"></textarea>\n\n    				</div></div>\n\n    			</div>\n\n    			<div style="height:40px">&nbsp;</div>\n\n    		</div>\n\n		</div>	\n\n	</div>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Accedo\deleteme\tllr\src\pages\transdetail\transdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], TransdetailPage);
    return TransdetailPage;
}());

//# sourceMappingURL=transdetail.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransdetailChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__ = __webpack_require__(554);
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
            selector: 'page-transdetail-chat',template:/*ion-inline-start:"C:\Users\Accedo\deleteme\tllr\src\pages\transdetail\transdetail-chat\transdetail-chat.html"*/'<!--\n\n  Generated template for the TransactionDetailsChatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n   \n\n      <div class="custom-navbar">\n\n        <div class="flex-row">\n\n          <button class="back" navPop>\n\n            <</button>\n\n              <h4 class="title">Chat @ {{chatName}}</h4>\n\n        </div>\n\n        \n\n      </div>\n\n    \n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding class="chat-window"  no-bounce overflow-scroll="true">\n\n\n\n   <div *ngFor="let chatMessage of chatMessages; let i = index">\n\n\n\n    <h6 class="date-stamp" *ngIf="shouldAddStamp(chatMessage,i)">\n\n      {{ getDateStamp(chatMessage.time)  |  amCalendar}} \n\n    </h6>\n\n\n\n    \n\n    <chat-message   [data]="chatMessage"></chat-message>\n\n\n\n    </div>\n\n\n\n\n\n<div id="myScrollLabel" style="height:10px">&nbsp;</div>\n\n\n\n\n\n\n\n    <div class="chat-bar-container">\n\n      <textarea [(ngModel)]="message" placeholder="Write your message .."></textarea>\n\n      <button class="send" (click)="sendMessage(message,\'text\')" [attr.disabled]="message.length? null: true"> \n\n         <img src="assets/imgs/send_on.png" *ngIf="message.length">\n\n         <img src="assets/imgs/send_off.png " *ngIf="!message.length">\n\n      </button>\n\n    </div>\n\n  \n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Accedo\deleteme\tllr\src\pages\transdetail\transdetail-chat\transdetail-chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]])
    ], TransdetailChatPage);
    return TransdetailChatPage;
}());

//# sourceMappingURL=transdetail-chat.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(509);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_transdetail_transdetail__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_location_picker_location_picker__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_select_contacts_select_contacts__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngui_map__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_emojify__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_emojify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_emojify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_transdetail_transdetail_chat_transdetail_chat__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_transdetail_transdetail_chat_chat_message_chat_message__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_socket_io__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_moment__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_components_module__ = __webpack_require__(863);
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
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                /** place api key here */
                /** COPY THIS */
                __WEBPACK_IMPORTED_MODULE_17__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_10__ngui_map__["b" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?v=3&key=AIzaSyD9o5nDS5Okm1FqSXocY0rhGAoBxeb8-8k&libraries=places' }),
                __WEBPACK_IMPORTED_MODULE_11_angular2_emojify__["EmojifyModule"],
                __WEBPACK_IMPORTED_MODULE_14_ng_socket_io__["SocketIoModule"].forRoot(config)
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
                __WEBPACK_IMPORTED_MODULE_13__pages_transdetail_transdetail_chat_chat_message_chat_message__["a" /* ChatMessageComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                /** COPY THIS */
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(259);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Accedo\deleteme\tllr\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n\n\n'/*ion-inline-end:"C:\Users\Accedo\deleteme\tllr\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(575);
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

/***/ 572:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 858:
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
            selector: 'chat-message',template:/*ion-inline-start:"C:\Users\Accedo\deleteme\tllr\src\pages\transdetail\transdetail-chat\chat-message\chat-message.html"*/'<!-- Generated template for the ChatMessageComponent component -->\n\n<div class="chat-message-container" *ngIf="currentUserID != data.userID">\n\n\n\n  <!-- section for the messages from other users  -->\n\n\n\n  <avatar [img]="data.userImage" [userName]="data.displayName"></avatar>\n\n\n\n  <!-- chat messages of the user start here -->\n\n  <div class="messages-container">\n\n    <p class="user-name">{{data.displayName}}</p>\n\n\n\n    <div *ngFor="let message of data.data">\n\n      {{message.data | json}}\n\n      <p class="text-message" *ngIf="message.messageType == \'text\'">{{ message.payload | emojify }}</p>\n\n\n\n      <!-- emoji only -->\n\n\n\n      <p class="emoji-only" *ngIf="message.messageType == \'emoji-only\'">{{ message.payload | emojify }}</p>\n\n\n\n\n\n      <!-- location attachment -->\n\n      <div class="location-message" *ngIf="message.messageType == \'location\'">\n\n        <div class="location-container">\n\n          <ngui-map [center]="\'RR Nagar, Bengaluru, Karnataka, India\'" [fullscreenControl]="false" [disableDefaultUI]="true">\n\n            <custom-marker [position]="\'RR Nagar, Bengaluru, Karnataka, India\'">\n\n              <div>\n\n                <img src="assets/imgs/map_marker.png" width="30px;" height="50px;" />\n\n              </div>\n\n            </custom-marker>\n\n          </ngui-map>\n\n        </div>\n\n        <div class="location-display">\n\n          <h6>title</h6>\n\n          <p>address</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n\n\n<!--section for app user message, needs to be put in ng-if -->\n\n\n\n\n\n\n\n\n\n<div class="chat-message-container self" *ngIf="currentUserID == data.userID">\n\n\n\n  <!-- this is just for creating an empty space for the flex to work correctly -->\n\n\n\n\n\n  <!-- chat messages of the user start here -->\n\n  <div class="messages-container">\n\n    \n\n  \n\n      <div *ngFor="let message of data.data">\n\n          <p class="text-message" *ngIf="message.messageType == \'text\'">{{ message.payload | emojify }}</p>\n\n          \n\n                <!-- emoji only -->\n\n          \n\n                <p class="emoji-only" *ngIf="message.messageType == \'emoji-only\'">{{ message.payload | emojify }}</p>\n\n  \n\n  \n\n        <!-- location attachment -->\n\n        <div class="location-message" *ngIf="message.messageType == \'location\'">\n\n          <div class="location-container">\n\n            <ngui-map [center]="\'RR Nagar, Bengaluru, Karnataka, India\'" [fullscreenControl]="false" [disableDefaultUI]="true">\n\n              <custom-marker [position]="\'RR Nagar, Bengaluru, Karnataka, India\'">\n\n                <div>\n\n                  <img src="assets/imgs/map_marker.png" width="30px;" height="50px;" />\n\n                </div>\n\n              </custom-marker>\n\n            </ngui-map>\n\n          </div>\n\n          <div class="location-display">\n\n            <h6>title</h6>\n\n            <p>address</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n  <div class="delivery-status">\n\n    <ion-icon ios="ios-checkmark" md="md-checkmark"></ion-icon>\n\n  </div>\n\n</div>'/*ion-inline-end:"C:\Users\Accedo\deleteme\tllr\src\pages\transdetail\transdetail-chat\chat-message\chat-message.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChatMessageComponent);
    return ChatMessageComponent;
}());

//# sourceMappingURL=chat-message.js.map

/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 375,
	"./af.js": 375,
	"./ar": 376,
	"./ar-dz": 377,
	"./ar-dz.js": 377,
	"./ar-kw": 378,
	"./ar-kw.js": 378,
	"./ar-ly": 379,
	"./ar-ly.js": 379,
	"./ar-ma": 380,
	"./ar-ma.js": 380,
	"./ar-sa": 381,
	"./ar-sa.js": 381,
	"./ar-tn": 382,
	"./ar-tn.js": 382,
	"./ar.js": 376,
	"./az": 383,
	"./az.js": 383,
	"./be": 384,
	"./be.js": 384,
	"./bg": 385,
	"./bg.js": 385,
	"./bm": 386,
	"./bm.js": 386,
	"./bn": 387,
	"./bn.js": 387,
	"./bo": 388,
	"./bo.js": 388,
	"./br": 389,
	"./br.js": 389,
	"./bs": 390,
	"./bs.js": 390,
	"./ca": 391,
	"./ca.js": 391,
	"./cs": 392,
	"./cs.js": 392,
	"./cv": 393,
	"./cv.js": 393,
	"./cy": 394,
	"./cy.js": 394,
	"./da": 395,
	"./da.js": 395,
	"./de": 396,
	"./de-at": 397,
	"./de-at.js": 397,
	"./de-ch": 398,
	"./de-ch.js": 398,
	"./de.js": 396,
	"./dv": 399,
	"./dv.js": 399,
	"./el": 400,
	"./el.js": 400,
	"./en-au": 401,
	"./en-au.js": 401,
	"./en-ca": 402,
	"./en-ca.js": 402,
	"./en-gb": 403,
	"./en-gb.js": 403,
	"./en-ie": 404,
	"./en-ie.js": 404,
	"./en-nz": 405,
	"./en-nz.js": 405,
	"./eo": 406,
	"./eo.js": 406,
	"./es": 407,
	"./es-do": 408,
	"./es-do.js": 408,
	"./es-us": 409,
	"./es-us.js": 409,
	"./es.js": 407,
	"./et": 410,
	"./et.js": 410,
	"./eu": 411,
	"./eu.js": 411,
	"./fa": 412,
	"./fa.js": 412,
	"./fi": 413,
	"./fi.js": 413,
	"./fo": 414,
	"./fo.js": 414,
	"./fr": 415,
	"./fr-ca": 416,
	"./fr-ca.js": 416,
	"./fr-ch": 417,
	"./fr-ch.js": 417,
	"./fr.js": 415,
	"./fy": 418,
	"./fy.js": 418,
	"./gd": 419,
	"./gd.js": 419,
	"./gl": 420,
	"./gl.js": 420,
	"./gom-latn": 421,
	"./gom-latn.js": 421,
	"./gu": 422,
	"./gu.js": 422,
	"./he": 423,
	"./he.js": 423,
	"./hi": 424,
	"./hi.js": 424,
	"./hr": 425,
	"./hr.js": 425,
	"./hu": 426,
	"./hu.js": 426,
	"./hy-am": 427,
	"./hy-am.js": 427,
	"./id": 428,
	"./id.js": 428,
	"./is": 429,
	"./is.js": 429,
	"./it": 430,
	"./it.js": 430,
	"./ja": 431,
	"./ja.js": 431,
	"./jv": 432,
	"./jv.js": 432,
	"./ka": 433,
	"./ka.js": 433,
	"./kk": 434,
	"./kk.js": 434,
	"./km": 435,
	"./km.js": 435,
	"./kn": 436,
	"./kn.js": 436,
	"./ko": 437,
	"./ko.js": 437,
	"./ky": 438,
	"./ky.js": 438,
	"./lb": 439,
	"./lb.js": 439,
	"./lo": 440,
	"./lo.js": 440,
	"./lt": 441,
	"./lt.js": 441,
	"./lv": 442,
	"./lv.js": 442,
	"./me": 443,
	"./me.js": 443,
	"./mi": 444,
	"./mi.js": 444,
	"./mk": 445,
	"./mk.js": 445,
	"./ml": 446,
	"./ml.js": 446,
	"./mr": 447,
	"./mr.js": 447,
	"./ms": 448,
	"./ms-my": 449,
	"./ms-my.js": 449,
	"./ms.js": 448,
	"./my": 450,
	"./my.js": 450,
	"./nb": 451,
	"./nb.js": 451,
	"./ne": 452,
	"./ne.js": 452,
	"./nl": 453,
	"./nl-be": 454,
	"./nl-be.js": 454,
	"./nl.js": 453,
	"./nn": 455,
	"./nn.js": 455,
	"./pa-in": 456,
	"./pa-in.js": 456,
	"./pl": 457,
	"./pl.js": 457,
	"./pt": 458,
	"./pt-br": 459,
	"./pt-br.js": 459,
	"./pt.js": 458,
	"./ro": 460,
	"./ro.js": 460,
	"./ru": 461,
	"./ru.js": 461,
	"./sd": 462,
	"./sd.js": 462,
	"./se": 463,
	"./se.js": 463,
	"./si": 464,
	"./si.js": 464,
	"./sk": 465,
	"./sk.js": 465,
	"./sl": 466,
	"./sl.js": 466,
	"./sq": 467,
	"./sq.js": 467,
	"./sr": 468,
	"./sr-cyrl": 469,
	"./sr-cyrl.js": 469,
	"./sr.js": 468,
	"./ss": 470,
	"./ss.js": 470,
	"./sv": 471,
	"./sv.js": 471,
	"./sw": 472,
	"./sw.js": 472,
	"./ta": 473,
	"./ta.js": 473,
	"./te": 474,
	"./te.js": 474,
	"./tet": 475,
	"./tet.js": 475,
	"./th": 476,
	"./th.js": 476,
	"./tl-ph": 477,
	"./tl-ph.js": 477,
	"./tlh": 478,
	"./tlh.js": 478,
	"./tr": 479,
	"./tr.js": 479,
	"./tzl": 480,
	"./tzl.js": 480,
	"./tzm": 481,
	"./tzm-latn": 482,
	"./tzm-latn.js": 482,
	"./tzm.js": 481,
	"./uk": 483,
	"./uk.js": 483,
	"./ur": 484,
	"./ur.js": 484,
	"./uz": 485,
	"./uz-latn": 486,
	"./uz-latn.js": 486,
	"./uz.js": 485,
	"./vi": 487,
	"./vi.js": 487,
	"./x-pseudo": 488,
	"./x-pseudo.js": 488,
	"./yo": 489,
	"./yo.js": 489,
	"./zh-cn": 490,
	"./zh-cn.js": 490,
	"./zh-hk": 491,
	"./zh-hk.js": 491,
	"./zh-tw": 492,
	"./zh-tw.js": 492
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
webpackContext.id = 860;

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avatar_avatar__ = __webpack_require__(864);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_2__avatar_avatar__["a" /* AvatarComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__avatar_avatar__["a" /* AvatarComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 864:
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
            selector: 'avatar',template:/*ion-inline-start:"C:\Users\Accedo\deleteme\tllr\src\components\avatar\avatar.html"*/'<!-- Generated template for the AvatarComponent component -->\n\n\n\n<div class="avatar" *ngIf="!img">\n\n  {{initials}}\n\n</div>\n\n<img class="avatar" [attr.src]="img" *ngIf="img" />\n\n\n\n'/*ion-inline-end:"C:\Users\Accedo\deleteme\tllr\src\components\avatar\avatar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AvatarComponent);
    return AvatarComponent;
}());

//# sourceMappingURL=avatar.js.map

/***/ })

},[504]);
//# sourceMappingURL=main.js.map