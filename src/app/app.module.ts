import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

/** copy these  */
import {LocationPickerPage} from '../pages/location-picker/location-picker';
import {SelectContactsPage}  from '../pages/select-contacts/select-contacts'
import { NguiMapModule} from '@ngui/map';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LocationPickerPage,
    SelectContactsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    /** place api key here */
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?v=3&key=AIzaSyD9o5nDS5Okm1FqSXocY0rhGAoBxeb8-8k&libraries=places'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LocationPickerPage,
    SelectContactsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
