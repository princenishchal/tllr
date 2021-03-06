import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TransdetailPage } from '../pages/transdetail/transdetail';



 /** COPY THIS */
import {LocationPickerPage} from '../pages/location-picker/location-picker';
import {SelectContactsPage}  from '../pages/select-contacts/select-contacts'
import { NguiMapModule} from '@ngui/map';
import { EmojifyModule } from 'angular2-emojify';
import { TransdetailChatPage } from '../pages/transdetail/transdetail-chat/transdetail-chat';
import { ChatMessageComponent } from '../pages/transdetail/transdetail-chat/chat-message/chat-message';
import { SelectPhotosPage} from '../pages/select-photos/select-photos';
import {SendLocationPage} from '../pages/send-location/send-location';
import {ImagePreviewPage} from '../pages/image-preview/image-preview';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import {MomentModule} from 'angular2-moment';
import {PhotoLibrary} from '@ionic-native/photo-library';
import { Geolocation } from '@ionic-native/geolocation';

/** import the components module here */
import {ComponentsModule} from '../components/components.module';

/** COPY this config for socet io */

const config: SocketIoConfig = { url: 'http://finterest.co:5500/', options: {} };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LocationPickerPage,
    SelectContactsPage,
    TransdetailPage,
    TransdetailChatPage,
    ChatMessageComponent,
    SelectPhotosPage,
    SendLocationPage,
    ImagePreviewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    /** place api key here */
    /** COPY THIS */
    ComponentsModule,
    MomentModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?v=3&key=AIzaSyD9o5nDS5Okm1FqSXocY0rhGAoBxeb8-8k&libraries=places'}),
    EmojifyModule,
    SocketIoModule.forRoot(config) 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
     /** COPY THIS */
    LocationPickerPage,
    SelectContactsPage,
    TransdetailPage,
    TransdetailChatPage,
    ChatMessageComponent,
    SelectPhotosPage,
    SendLocationPage,
    ImagePreviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhotoLibrary,
    Geolocation
  ]
})
export class AppModule {}
