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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_picker_location_picker__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transdetail_transdetail__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_photos_select_photos__ = __webpack_require__(374);
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
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <button ion-button [navPush]="pushPage" [navParams]="params">select location</button>\n\n	<br><br>\n\n  <button ion-button [navPush]="pushTransPage" [navParams]="params">Transaction Detail Page</button>\n\n\n\n\n\n  <button ion-button [navPush]="photosPage" [navParams]="params">add photos</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\pages\home\home.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_contacts_select_contacts__ = __webpack_require__(261);
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

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(36);
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
            selector: 'page-select-contacts',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\pages\select-contacts\select-contacts.html"*/'<!--\n\n  Generated ng-template for the SelectContactsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <div class="custom-navbar">\n\n        <div class="flex-row">\n\n          <button class="back" navPop>\n\n            <</button>\n\n              <h4 class="title">invite employees</h4>\n\n        </div>\n\n       \n\n      </div>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="flex-center">\n\n    <img src="assets/imgs/emoji_hi.png" class="title-image"/>\n\n  </div>\n\n\n\n  <div class="flex-center">\n\n    <input class="searchbar" placeholder="search employees" />\n\n  </div>\n\n\n\n  <div class="selected-employees">\n\n    <h6>selected employees</h6>\n\n    <p class="no-selection" *ngIf="!listNotEmpty">you haven’t selected anyone yet</p>\n\n\n\n    <span  *ngFor="let contact of contacts">\n\n    <div class="contact-card" *ngIf="contact.selected">\n\n        <avatar  [img]="contact.picture" [userName]="contact.name" ></avatar>\n\n\n\n        <div class="info">\n\n          <h4>{{contact.name}}</h4>\n\n          <p>{{contact.phone}}</p>\n\n        </div>\n\n        \n\n        <div class="controls">\n\n            <button  class="delete" (click)="removeContact(contact.idx)">Delete</button>\n\n        </div>\n\n    </div>\n\n  </span> \n\n    \n\n  </div>\n\n\n\n  <div class="existing-employees">\n\n      <h6>Employees on Teller</h6>\n\n\n\n      <!-- dummy contact card \n\n\n\n      <div class="contact-card" >\n\n          <img class="avatar" src="https://placeholdit.co//i/26x26?">\n\n\n\n          <div class="info">\n\n            <h4>aman gupta</h4>\n\n            <p>9717748633</p>\n\n          </div>\n\n          \n\n          <div class="controls">\n\n            <button  class="add">Add</button>\n\n            \n\n          </div>\n\n      </div>\n\n   dummy card ends -->\n\n      <span  *ngFor="let contact of contacts">\n\n      <div class="contact-card" *ngIf="!contact.selected" >\n\n          <avatar  [img]="contact.picture" [userName]="contact.name" ></avatar>\n\n          <div class="info">\n\n            <h4>{{contact.name}}</h4>\n\n            <p>{{contact.phone}}</p>\n\n          </div>\n\n          \n\n          <div class="controls">\n\n            <button  class="add" (click)="selectContact(contact.idx)">Add</button>\n\n            \n\n          </div>\n\n      </div>\n\n    </span>\n\n  </div>\n\n\n\n  <div class="continue-button" *ngIf="listNotEmpty">\n\n      <button class="continue" (click)="confirm()">continue</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\pages\select-contacts\select-contacts.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
            selector: 'page-transdetail',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\pages\transdetail\transdetail.html"*/'<ion-content style="text-align:center" no-bounce overflow-scroll="true">\n\n	<div #transDetailBlock class="transDetailBlock animated" id="transDetailBlock">\n\n		<div class="headerSection" (tap)="closeTransDetail()">\n\n      		<div class="leftBackBtn"><img src="assets/imgs/icn_back.png" class="back-icon" ></div>\n\n      		<div class="rightOnHeader">Transaction Details</div>\n\n    	</div>\n\n    	<div class="mainTransViewDataBlock" id="mainTransViewDataBlock">\n\n    		<div class="transactionDetails">\n\n    			<!-- Summary Card -->\n\n    			<div id="transDetailCard" class="transDetailCard">\n\n    				<ion-card class="statsCard"><div class="scTopLeft"><img  src="assets/imgs/shopping.png" class="search_buttons"></div><div class="scTopRight"><div class="scTopRightName">Audible</div><div class="scTopRightInfoTextLessOpacity">Citi Double Cash Card xxx - 8010</div></div><div class="scDivider"></div><br><div class="scAmountLabel">Fri<br><div class="scAmountLabelSpan">Day</div></div><div class="scAmountLabel" style="margin-left:10px">24 Nov<br><div class="scAmountLabelSpan">Date</div></div><div class="scAmountLabel" style="width:116px;text-align:right;color:#d0011b">($ 14.95)<br><div class="scAmountLabelSpan" style="text-align:right">Spent</div></div></ion-card>\n\n    			</div>\n\n    			<!-- Additional Stuff Card -->\n\n    			<div class="detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Additional stuff</div>\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn"  src="assets/imgs/icn_expand.png" (tap)="showTransDetailContent()"></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent" (tap)="showTransDetailContent()"><div class="detailsCardTipText" id="transDetailsContent">Click to view additionald details from the bank</div></div>\n\n    			</div>\n\n    			<!-- Content Separator -->\n\n    			<div class="transDetailSeparator">\n\n    				<div class="linePiece"></div><div class="lineSeparatorText">Add more details & search better</div><div class="linePiece"></div>\n\n    			</div>\n\n    			<div class="cardsGap"></div>\n\n    			<!-- Tag Friends Card -->\n\n    			<div #tagFriendsDivBlock class="tagFriendsCard detailsCard" id="tagFriendsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Friends</div>\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn" id="tagFriendsBtn" src="assets/imgs/icn_chat.png" [navPush]="chatPage" [navParams]="chatParams" ></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent" id="tagFriendsContent" (tap)="tagFriendsContentClick($event)">\n\n    					<div class="detailsCardTipText">Group expenses easily by tagging friends & family</div>\n\n    				</div>\n\n    			</div>\n\n    			<!-- Category Card -->\n\n    			<div class="reCategorizeCard detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Category<!--  -> &nbsp;<span id="categoryValue"></span> --></div>\n\n    					<!-- <div class="recategorizeHeaderButton"><img src="assets/imgs/btn_edit.png" (tap)="showReCategorizationView()"></div> -->\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn" src="assets/imgs/icn_add.png" (tap)="showReCategorizationView()"></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;margin-top: 0px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent"><div class="detailsCardTipText">Category is wrong? Feel free to change it</div></div>\n\n    			</div>\n\n    			<!-- Business Expense Card -->\n\n    			<div class="isBusinessExpenseCard detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Business Expense</div>\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn" id="bizExpenseBtn" src="assets/imgs/icn_add.png" (tap)="saveBizExpenseFlag()"></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent"><div class="detailsCardTipText" id="bizExpenseText">Just click “+” and easily search biz expenses</div></div>\n\n    			</div>\n\n    			<!-- Tags Card -->\n\n    			<div class="tagsCard detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Tags</div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent">\n\n    					<div class="detailsCardTipText" (tap)="clickEditTransactionTags()" >\n\n    						<span #transDetailTagSpan id="transDetailTagSpan" class="detailsCardTipText" >Type here, seperate with commas, search with tags</span>\n\n    						<input #transDetailTags id="transDetailTags" type="text" class="detailsCardTagEditInput" style="display:none;" (keyup)="handleKeyUpForEditTags($event)" (blur)="userPrefsOnSaveTags()"/>\n\n    					</div>\n\n    				</div>\n\n    			</div>\n\n    			<!-- Reminder Card -->\n\n    			<div class="reminderCard detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Reminder</div>\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn" id="remindTransBtn" src="assets/imgs/icn_add.png" (tap)="saveReminderFlag()"></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent"><div class="detailsCardTipText" id="remindTransText">Click “+”  to remind you when this happens again</div></div>\n\n    			</div>\n\n    			<!-- Location Card -->\n\n    			<div class="locationCard detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Location</div>\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn" src="assets/imgs/icn_add.png" (tap)="showWIPAlert()"></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent"><div class="detailsCardTipText">Search easily with locations, add it now! </div></div>\n\n    			</div>\n\n    			<!-- Photo Card -->\n\n    			<div class="photoCard detailsCard">\n\n    				<div class="verticalSpace"></div>\n\n    				<div class="detailsCardHeader">\n\n    					<div class="detailsCardHeaderLeftText">Photos</div>\n\n    					<div class="detailsCardHeaderButton"><img class="detailsCardPlusBtn" src="assets/imgs/icn_add.png" (tap)="showWIPAlert()"></div>\n\n    					<div class="scDividerCards" style="margin-left:12px;"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent"><div class="detailsCardTipText">Add photos, bring back memories when you search</div></div>\n\n    			</div>\n\n    			<!-- Notes Card -->\n\n    			<div class="notesCard detailsCard" style="height:205px" (tap)="clickEditNotes()" >\n\n    				<div class="verticalSpace" (tap)="clickEditNotes()"></div>\n\n    				<div class="detailsCardHeader" (tap)="clickEditNotes()">\n\n    					<div class="detailsCardHeaderLeftText" (tap)="clickEditNotes()">Notes</div>\n\n    					<div class="scDividerCards" style="margin-left:12px;" (tap)="clickEditNotes()"></div>\n\n    				</div>\n\n    				<div class="detailsCardContent"><div class="detailsCardTipText" (tap)="clickEditNotes()">\n\n    					<span #transDetailNotesSpan id="transDetailNotesSpan" class="detailsCardTipText" >Type here, seperate with commas, search with tags</span><textarea #transDetailNotes id="transDetailNotes" type="text" class="detailsCardNotesEditInput" style="display:none" (keyup)="handleKeyUpForEditNotes($event)" (blur)="saveNotes()"></textarea>\n\n    				</div></div>\n\n    			</div>\n\n    			<div style="height:40px">&nbsp;</div>\n\n    		</div>\n\n		</div>	\n\n	</div>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\pages\transdetail\transdetail.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__ = __webpack_require__(555);
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

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPhotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__ = __webpack_require__(375);
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
        var opts = {};
        opts.chunkTimeSec = 1;
        opts.itemsInChunk = 50;
        opts.quality = 0.6;
        opts.thumbnailHeight = 76;
        opts.thumbnailHeight = 71;
        this.photoLibrary.requestAuthorization().then(function () {
            _this.photoLibrary.getLibrary().subscribe({
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
                    library.map(function (img) {
                        var imjObj = {
                            thumbnailURL: _this.sanitizer.bypassSecurityTrustUrl(img.thumbnailURL),
                            fileName: img.fileName,
                            id: img.id,
                            creationDate: img.creationDate
                        };
                        // sanitize the urls before pushing 
                        _this.images.push(imjObj);
                    });
                    _this.images.sort(function (a, b) {
                        return new Date(a.creationDate) >= new Date(b.creationDate) ? -1 : 1;
                    });
                    _this.changeRef.detectChanges();
                },
                error: function (err) { console.log('could not get photos'); },
                complete: function () { console.log('done getting photos'); }
            });
        })
            .catch(function (err) { return console.log('permissions weren\'t granted'); });
    }
    SelectPhotosPage.prototype.shouldAddStamp = function (img, index) {
        if (this.images.length >= 2 && index != 0)
            return !this.sameDay(img.creationDate, this.images[index - 1].creationDate);
        else
            return true;
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
            selector: 'page-select-photos',template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\pages\select-photos\select-photos.html"*/'<!--\n  Generated template for the SelectPhotosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <div class="custom-navbar">\n    <div class="flex-row">\n      <button class="back" navPop>\n        <</button>\n          <h4 class="title">Add photos</h4>\n    </div>\n    \n  </div>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <div *ngFor="let img of images; let i = index">\n        \n        <h6 class="date-stamp" *ngIf="shouldAddStamp(img,i)">\n\n        {{ img.creationDate |  amParse:\'DD/MM/YYYY\' | amDateFormat:\'LL\'}}\n      </h6>\n      <br *ngIf="shouldAddStamp(img,i)">\n    \n      <img class="thumbnail" [src]="img.thumbnailURL" width="100px;"/>\n    \n  </div>  \n \n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\pages\select-photos\select-photos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__["a" /* PhotoLibrary */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SelectPhotosPage);
    return SelectPhotosPage;
}());

//# sourceMappingURL=select-photos.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(511);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_transdetail_transdetail__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_location_picker_location_picker__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_select_contacts_select_contacts__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngui_map__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_emojify__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_emojify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_emojify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_transdetail_transdetail_chat_transdetail_chat__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_transdetail_transdetail_chat_chat_message_chat_message__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_select_photos_select_photos__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_socket_io__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_moment__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_photo_library__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_components_module__ = __webpack_require__(864);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_select_photos_select_photos__["a" /* SelectPhotosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                /** place api key here */
                /** COPY THIS */
                __WEBPACK_IMPORTED_MODULE_18__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_10__ngui_map__["a" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?v=3&key=AIzaSyD9o5nDS5Okm1FqSXocY0rhGAoBxeb8-8k&libraries=places' }),
                __WEBPACK_IMPORTED_MODULE_11_angular2_emojify__["EmojifyModule"],
                __WEBPACK_IMPORTED_MODULE_15_ng_socket_io__["SocketIoModule"].forRoot(config)
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
                __WEBPACK_IMPORTED_MODULE_14__pages_select_photos_select_photos__["a" /* SelectPhotosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_photo_library__["a" /* PhotoLibrary */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\amang\indiez\tllr\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n\n\n'/*ion-inline-end:"C:\Users\amang\indiez\tllr\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(576);
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

/***/ 573:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 859:
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

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 377,
	"./af.js": 377,
	"./ar": 378,
	"./ar-dz": 379,
	"./ar-dz.js": 379,
	"./ar-kw": 380,
	"./ar-kw.js": 380,
	"./ar-ly": 381,
	"./ar-ly.js": 381,
	"./ar-ma": 382,
	"./ar-ma.js": 382,
	"./ar-sa": 383,
	"./ar-sa.js": 383,
	"./ar-tn": 384,
	"./ar-tn.js": 384,
	"./ar.js": 378,
	"./az": 385,
	"./az.js": 385,
	"./be": 386,
	"./be.js": 386,
	"./bg": 387,
	"./bg.js": 387,
	"./bm": 388,
	"./bm.js": 388,
	"./bn": 389,
	"./bn.js": 389,
	"./bo": 390,
	"./bo.js": 390,
	"./br": 391,
	"./br.js": 391,
	"./bs": 392,
	"./bs.js": 392,
	"./ca": 393,
	"./ca.js": 393,
	"./cs": 394,
	"./cs.js": 394,
	"./cv": 395,
	"./cv.js": 395,
	"./cy": 396,
	"./cy.js": 396,
	"./da": 397,
	"./da.js": 397,
	"./de": 398,
	"./de-at": 399,
	"./de-at.js": 399,
	"./de-ch": 400,
	"./de-ch.js": 400,
	"./de.js": 398,
	"./dv": 401,
	"./dv.js": 401,
	"./el": 402,
	"./el.js": 402,
	"./en-au": 403,
	"./en-au.js": 403,
	"./en-ca": 404,
	"./en-ca.js": 404,
	"./en-gb": 405,
	"./en-gb.js": 405,
	"./en-ie": 406,
	"./en-ie.js": 406,
	"./en-nz": 407,
	"./en-nz.js": 407,
	"./eo": 408,
	"./eo.js": 408,
	"./es": 409,
	"./es-do": 410,
	"./es-do.js": 410,
	"./es-us": 411,
	"./es-us.js": 411,
	"./es.js": 409,
	"./et": 412,
	"./et.js": 412,
	"./eu": 413,
	"./eu.js": 413,
	"./fa": 414,
	"./fa.js": 414,
	"./fi": 415,
	"./fi.js": 415,
	"./fo": 416,
	"./fo.js": 416,
	"./fr": 417,
	"./fr-ca": 418,
	"./fr-ca.js": 418,
	"./fr-ch": 419,
	"./fr-ch.js": 419,
	"./fr.js": 417,
	"./fy": 420,
	"./fy.js": 420,
	"./gd": 421,
	"./gd.js": 421,
	"./gl": 422,
	"./gl.js": 422,
	"./gom-latn": 423,
	"./gom-latn.js": 423,
	"./gu": 424,
	"./gu.js": 424,
	"./he": 425,
	"./he.js": 425,
	"./hi": 426,
	"./hi.js": 426,
	"./hr": 427,
	"./hr.js": 427,
	"./hu": 428,
	"./hu.js": 428,
	"./hy-am": 429,
	"./hy-am.js": 429,
	"./id": 430,
	"./id.js": 430,
	"./is": 431,
	"./is.js": 431,
	"./it": 432,
	"./it.js": 432,
	"./ja": 433,
	"./ja.js": 433,
	"./jv": 434,
	"./jv.js": 434,
	"./ka": 435,
	"./ka.js": 435,
	"./kk": 436,
	"./kk.js": 436,
	"./km": 437,
	"./km.js": 437,
	"./kn": 438,
	"./kn.js": 438,
	"./ko": 439,
	"./ko.js": 439,
	"./ky": 440,
	"./ky.js": 440,
	"./lb": 441,
	"./lb.js": 441,
	"./lo": 442,
	"./lo.js": 442,
	"./lt": 443,
	"./lt.js": 443,
	"./lv": 444,
	"./lv.js": 444,
	"./me": 445,
	"./me.js": 445,
	"./mi": 446,
	"./mi.js": 446,
	"./mk": 447,
	"./mk.js": 447,
	"./ml": 448,
	"./ml.js": 448,
	"./mr": 449,
	"./mr.js": 449,
	"./ms": 450,
	"./ms-my": 451,
	"./ms-my.js": 451,
	"./ms.js": 450,
	"./my": 452,
	"./my.js": 452,
	"./nb": 453,
	"./nb.js": 453,
	"./ne": 454,
	"./ne.js": 454,
	"./nl": 455,
	"./nl-be": 456,
	"./nl-be.js": 456,
	"./nl.js": 455,
	"./nn": 457,
	"./nn.js": 457,
	"./pa-in": 458,
	"./pa-in.js": 458,
	"./pl": 459,
	"./pl.js": 459,
	"./pt": 460,
	"./pt-br": 461,
	"./pt-br.js": 461,
	"./pt.js": 460,
	"./ro": 462,
	"./ro.js": 462,
	"./ru": 463,
	"./ru.js": 463,
	"./sd": 464,
	"./sd.js": 464,
	"./se": 465,
	"./se.js": 465,
	"./si": 466,
	"./si.js": 466,
	"./sk": 467,
	"./sk.js": 467,
	"./sl": 468,
	"./sl.js": 468,
	"./sq": 469,
	"./sq.js": 469,
	"./sr": 470,
	"./sr-cyrl": 471,
	"./sr-cyrl.js": 471,
	"./sr.js": 470,
	"./ss": 472,
	"./ss.js": 472,
	"./sv": 473,
	"./sv.js": 473,
	"./sw": 474,
	"./sw.js": 474,
	"./ta": 475,
	"./ta.js": 475,
	"./te": 476,
	"./te.js": 476,
	"./tet": 477,
	"./tet.js": 477,
	"./th": 478,
	"./th.js": 478,
	"./tl-ph": 479,
	"./tl-ph.js": 479,
	"./tlh": 480,
	"./tlh.js": 480,
	"./tr": 481,
	"./tr.js": 481,
	"./tzl": 482,
	"./tzl.js": 482,
	"./tzm": 483,
	"./tzm-latn": 484,
	"./tzm-latn.js": 484,
	"./tzm.js": 483,
	"./uk": 485,
	"./uk.js": 485,
	"./ur": 486,
	"./ur.js": 486,
	"./uz": 487,
	"./uz-latn": 488,
	"./uz-latn.js": 488,
	"./uz.js": 487,
	"./vi": 489,
	"./vi.js": 489,
	"./x-pseudo": 490,
	"./x-pseudo.js": 490,
	"./yo": 491,
	"./yo.js": 491,
	"./zh-cn": 492,
	"./zh-cn.js": 492,
	"./zh-hk": 493,
	"./zh-hk.js": 493,
	"./zh-tw": 494,
	"./zh-tw.js": 494
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
webpackContext.id = 861;

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avatar_avatar__ = __webpack_require__(865);
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

/***/ 865:
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

/***/ })

},[506]);
//# sourceMappingURL=main.js.map