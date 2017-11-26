import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import {ChatServiceProvider} from "../../../providers/chat-service/chat-service"
/**
 * Generated class for the TransdetailChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transdetail-chat',
  templateUrl: 'transdetail-chat.html',
  providers: [ChatServiceProvider]
})
export class TransdetailChatPage {
  chatName = "some random place";

  userDisplayName = "Aman gupta";
  currentUserID = 1; // this should come from a service or localstorage 
  message = '';
  
   
  
    // actual messages shown in the window.
  
    chatMessages:any = [];
    private chatSubscription:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private chatService: ChatServiceProvider) {

    this.chatSubscription = chatService.newMessage.subscribe(message=>{
       this.onMessage(message);
     });

     

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

      sendMessage(message,type){

        let chatMessageObj ={
          displayName: this.userDisplayName,
          userID: this.currentUserID,
          messageType :  new RegExp(/^@|:$/).test(message.trim()) == true ? 'emoji-only' : 'text' ,
          data: message,
        }


        // send the message via the chat service :
        this.chatService.send(chatMessageObj);
        // clear the text area
        this.message = '';

        /**TODO: remove below code  */
        /** emulate other person talking  */

        let chatMessageObj2 ={
          displayName: "Akshay P",
          userID: 2,
          messageType :  new RegExp(/^@|:$/).test(message.trim()) == true ? 'emoji-only' : 'text' ,
          data: message,
        }

        this.chatService.send(chatMessageObj2);

      }

      ionViewWillLeave(){
          
      }

}
