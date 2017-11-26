import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AvatarComponent } from './avatar/avatar';
@NgModule({
	declarations: [AvatarComponent],
	imports: [CommonModule],
	exports: [AvatarComponent]
})
export class ComponentsModule {}
