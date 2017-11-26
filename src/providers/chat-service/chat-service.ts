
import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import {Observable,Subject} from 'rxjs'

/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatServiceProvider {
  private  // messages queued in thread
  private _newMessage:Subject<any>;
  newMessage:Observable<any>;

  


  constructor(private socket:Socket) {
    console.log('Hello ChatServiceProvider Provider');
    this._newMessage = new Subject<any>();
    this.newMessage =  this._newMessage.asObservable();
  


    this.socket.on('message',(message)=>{
      this._newMessage.next(message);
    })


  }

  send(message){
    //TODO; do something with the message object
    this.socket.emit('message',message);
  }

}
