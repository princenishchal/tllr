import { Component , ChangeDetectorRef} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
declare var navigator:any;
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
  contacts:any[] = []
  private address:any;
  listNotEmpty:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private changeRef:ChangeDetectorRef,private domsanitizer:DomSanitizer) {
    this.address = navParams.data; // just keep the data here
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectContactsPage');

    if(navigator.contactsPhoneNumbers)
    navigator.contactsPhoneNumbers.list((contacts:any[]) =>{
      this.contacts = [];
      
      // sort in asc
      contacts = contacts.sort((a,b)=>a.displayName >= b.displayName?1:-1)
      
      for(var i = 0; i < contacts.length; i++) {
         
     // take only what's needed
          
            this.contacts.push({
              idx:i,
              id:contacts[i].id,
              picture:contacts[i].thumbnail ? this.domsanitizer.bypassSecurityTrustUrl(contacts[i].thumbnail) : "https://placeholdit.co//i/26x26?",
              phone:contacts[i].phoneNumbers[0].normalizedNumber,
              name:contacts[i].displayName,
              selected:false
            });
            
         
      }

   
      this.changeRef.detectChanges();
   }, (error) =>{
      console.error(error);
   });

  }

 selectContact(index){
   this.contacts[index].selected = true; 
   this.isListEmpty()
   this.changeRef.detectChanges();
 }

 removeContact(index){
   this.contacts[index].selected = false;
   this.isListEmpty();
   this.changeRef.detectChanges();
 }

 isListEmpty(){
   this.listNotEmpty = this.contacts.filter(c=>c.selected).length? true: false;
 }

 confirm(){
   // do something with the selected contacts and address
   let dataToSubmit ={
     selectedContacts: this.contacts.filter(c=>c.selected == true),
     selectedAddress: this.address
   }
   console.log(dataToSubmit);
   this.navCtrl.popToRoot();
 }

}
