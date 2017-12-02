import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
declare var navigator: any;
/**
 * Generated class for the SelectContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-contacts',
  templateUrl: 'select-contacts.html',
})
export class SelectContactsPage {
  contacts: any[] = []
  private address: any;
  listNotEmpty: boolean = false;
  private infiniteScrollHandle: any;
  private allContacts: any[];
  private searchResults:any[] = [];
  private page = 0;
  private chunk = 30;
  search:string = null;
  isLoading: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private changeRef: ChangeDetectorRef, private domsanitizer: DomSanitizer) {
    this.address = navParams.data; // just keep the data here
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectContactsPage');

    if (navigator.contactsPhoneNumbers)
      navigator.contactsPhoneNumbers.list((contacts: any[]) => {
        this.contacts = [];

        // sort in asc
        this.allContacts = contacts.sort((a, b) => a.displayName >= b.displayName ? 1 : -1).map((ac,i)=>{
          return {
          
            idx: i,
            id: ac.id,
            picture: ac.thumbnail ? this.domsanitizer.bypassSecurityTrustUrl(ac.thumbnail) : null,
            phone: ac.phoneNumbers[0].normalizedNumber,
            name: ac.displayName,
            selected: false
          }
          
        })




        this.allContacts.slice(this.page * this.chunk, (this.page + 1) * this.chunk).map((contact, i) => {

        
          this.contacts.push({
            idx: contact.idx,
            idy: i,
            id: contact.id,
            picture: contact.thumbnail ? this.domsanitizer.bypassSecurityTrustUrl(contact.thumbnail) : null,
            phone: contact.phone,
            name: contact.name,
            selected: contact.selected
          });

        })


        this.page += 1;
        this.isLoading = false;
        this.changeRef.detectChanges();


        this.changeRef.detectChanges();
      }, (error) => {
        console.error(error);
      });

  }

  selectContact(idx,idy) {
    this.allContacts[idx].selected = true;
     if( idy && this.contacts[idy])  this.contacts[idy].selected = true;
     else{
       this.contacts.map((c,i)=>{
         if(c.idx == idx)  this.contacts[i].selected = true;
       })
     }
    this.isListEmpty()
    this.changeRef.detectChanges();
  }

  removeContact(idx,idy) {
    this.allContacts[idx].selected = false;
    if( idy && this.contacts[idy]) this.contacts[idy].selected = false;
    else{
      this.contacts.map((c,i)=>{
        if(c.idx == idx)  this.contacts[i].selected = false;
      })
    }
    this.isListEmpty();
    this.changeRef.detectChanges();
  }

  isListEmpty() {
    this.listNotEmpty = this.contacts.filter(c => c.selected).length ? true : false;
  }

  confirm() {
    // do something with the selected contacts and address
    let dataToSubmit = {
      selectedContacts: this.contacts.filter(c => c.selected == true),
      selectedAddress: this.address
    }
    console.log(dataToSubmit);
    this.navCtrl.popToRoot();
  }


  doInfinite(infiniteScroll) {
    this.allContacts.slice(this.page * this.chunk, (this.page + 1) * this.chunk).map((contact, i) => {
      
                this.contacts.push({
                  idx: contact.idx,
                  idy:i,
                  id: contact.id,
                  picture: contact.thumbnail ? this.domsanitizer.bypassSecurityTrustUrl(contact.thumbnail) : null,
                  phone: contact.phone,
                  name: contact.name,
                  selected: contact.selected
                });
      
              })

    infiniteScroll.complete();
    this.page += 1;

    this.changeRef.detectChanges();
  }

  searchEmployee(name){
    this.searchResults = name? this.allContacts.filter(c=>c.name.indexOf(name) > -1) || [] : [];
  }

  addFromSearch(contact){
    this.searchResults = [];
    this.search = null;
    
    // mark as selected in all contacts 
    this.selectContact(contact.idx, contact.idy || null)

  }

}
