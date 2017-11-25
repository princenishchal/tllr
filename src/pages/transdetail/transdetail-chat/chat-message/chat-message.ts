import { Component,Input } from '@angular/core';


/**
 * Generated class for the ChatMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-message',
  templateUrl: 'chat-message.html'
})
export class ChatMessageComponent {

  text: string;
  emojiOnly: string;
  // TODO: get this value from service
  currentUserID:string = '1';
  
  @Input('data') data :any;


  constructor() {
    console.log('Hello ChatMessageComponent Component');
    this.text = `It's a :laughing:`;
    this.emojiOnly = `:laughing:`;

 

  }





}
