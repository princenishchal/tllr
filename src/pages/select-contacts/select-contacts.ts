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
  private page = 0;
  private chunk = 30;
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
        this.allContacts = contacts.sort((a, b) => a.displayName >= b.displayName ? 1 : -1)




        this.allContacts.slice(this.page * this.chunk, (this.page + 1) * this.chunk).map((contact, i) => {

          this.contacts.push({
            idx: i,
            id: contact.id,
            picture: contact.thumbnail ? this.domsanitizer.bypassSecurityTrustUrl(contact.thumbnail) : null,
            phone: contact.phoneNumbers[0].normalizedNumber,
            name: contact.displayName,
            selected: false
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

  selectContact(index) {
    this.contacts[index].selected = true;
    this.isListEmpty()
    this.changeRef.detectChanges();
  }

  removeContact(index) {
    this.contacts[index].selected = false;
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
                  idx: i,
                  id: contact.id,
                  picture: contact.thumbnail ? this.domsanitizer.bypassSecurityTrustUrl(contact.thumbnail) : null,
                  phone: contact.phoneNumbers[0].normalizedNumber,
                  name: contact.displayName,
                  selected: false
                });
      
              })

    infiniteScroll.complete();
    this.page += 1;

    this.changeRef.detectChanges();
  }

}
