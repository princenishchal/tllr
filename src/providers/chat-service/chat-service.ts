
import { Injectable } from '@angular/core';

import {Observable,Subject} from 'rxjs'

/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatServiceProvider {
  private  // messages queued in thread
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

  private _newMessage:Subject<any>;
  newMessage:Observable<any>;

  


  constructor() {
    console.log('Hello ChatServiceProvider Provider');
    this._newMessage = new Subject<any>();
    this.newMessage =  this._newMessage.asObservable();
      // emulate chat messages coming in every one second , remove this

      let timer = Observable.interval(1500)
      .take(this.messages.length);

    timer.subscribe(val => {
  
      this._newMessage.next(this.messages[val])
    })

  }

}
