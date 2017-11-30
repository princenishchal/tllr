import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AvatarComponent } from './avatar/avatar';
import { PlacesAutoCompleteComponent } from './places-auto-complete/places-auto-complete';
@NgModule({
	declarations: [AvatarComponent,
    PlacesAutoCompleteComponent],
	imports: [CommonModule],
	exports: [AvatarComponent,
    PlacesAutoCompleteComponent]
})
export class ComponentsModule {}
