import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
/**
 * Generated class for the TransdetailChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transdetail-chat',
  templateUrl: 'transdetail-chat.html',
})
export class TransdetailChatPage {
  chatName = "some random place";

  currentUserID = 1;
  
    // messages queued in thread
    messages = [
      {
        displayName: 'Fei Pan',
        userID: 2,
        deliveredAt: Date.now(),
        messageType: 'text',
        data: 'Hellooooo'
      },
  
      {
        displayName: 'Fei Pan',
        userID: 2,
        deliveredAt: Date.now(),
        messageType: 'text',
        data: 'how much do I owe you?'
      },
  
      {
        displayName: 'me',
        userID: 1,
        deliveredAt: Date.now(),
        messageType: 'text',
        data: 'Hey thanks! $2.50'
      },
  
      {
        displayName: 'Akshya P',
        userID: 2,
        deliveredAt: Date.now(),
        messageType: 'emoji-only',
        data: ':laughing:'
      },
  
      {
        displayName: 'Akshya P',
        userID: 2,
        deliveredAt: Date.now(),
        messageType: 'text',
        data: 'We should go to this place , heard great things about it'
      },
  
      {
        displayName: 'Akshya P',
        userID: 2,
        deliveredAt: Date.now(),
        messageType: 'location',
        data: {
          coords: {},
          name: "",
          address: ""
        }
      }
  
  
    ];
  
    // actual messages shown in the window.
  
    chatMessages = [];
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {

       // emulate chat messages coming in every one second , remove this

       let timer = Observable.interval(1500)
       .take(this.messages.length);
 
     timer.subscribe(val => {
   
       this.onMessage(this.messages[val])
     })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionDetailsChatPage');
  }


  // add the message in the chat window 
  onMessage(message) {
    
    
      // create a new chat message object 
    
      let chatMessageObj ={
        displayName: message.displayName,
        userID: message.userID,
        data : [{
         payload:  message.data,
         messageType : message.messageType
        }]
      }

      console.log(chatMessageObj)
    
        switch(this.chatMessages.length!=0){
          case false: {
            // push the existing chat message 
            this.chatMessages.push(chatMessageObj)
            break;
          }
    
          case true: {
                // if it's a message from the same user .. add it to the existing chat 
                switch(chatMessageObj.userID === this.chatMessages[this.chatMessages.length-1].userID){
    
                  case true:{
                    // push the message into an existing chat message
                    this.chatMessages[this.chatMessages.length-1].data.push(chatMessageObj.data[0]);
                    break;
                  }
    
                  case false:{
                    this.chatMessages.push(chatMessageObj);
                  }
    
                }
          }
    
    
        }
    
      }

}
