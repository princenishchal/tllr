import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';  
import { AvatarComponent } from './avatar/avatar';
import { PlacesAutoCompleteComponent } from './places-auto-complete/places-auto-complete';
import {  IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [AvatarComponent,
    PlacesAutoCompleteComponent],
	imports: [CommonModule,FormsModule, IonicModule],
	exports: [AvatarComponent,
    PlacesAutoCompleteComponent]
})
export class ComponentsModule {}
