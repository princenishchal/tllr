import { Component, Input } from '@angular/core';

/**
 * Generated class for the AvatarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'avatar',
  templateUrl: 'avatar.html'
})
export class AvatarComponent {

  initials: string;
  @Input('img') img: any;
  @Input('userName') set getInitials(val) {

    try {
      if (!val || val == "" || val == " ") {
        this.initials = "?";
        return;
      };

      let tmp = val.split(' ');


      switch (tmp.length) {
        case 1: {

          this.initials = tmp[0].length > 1 ? tmp[0].split('')[0].toUpperCase() + tmp[0].split('')[1].toUpperCase() : tmp[0].split('')[0].toUpperCase();
          break;
        }

        case 2: {

          // make sure the second character is not a special character

          this.initials = new RegExp(/[a-zA-Z]/).test(tmp[1].split('1')[0]) ? tmp[0].split('')[0].toUpperCase() + tmp[1].split('')[0].toUpperCase() : tmp[0].split('')[0].toUpperCase() + tmp[0].split('')[1].toUpperCase()
          break;
        }

        case 0: {
          this.initials = "?";
          break;
        }


        default: {

          // make sure the second character is not a special character

          this.initials = new RegExp(/[a-zA-Z]/).test(tmp[1].split('1')[0]) ? tmp[0].split('')[0].toUpperCase() + tmp[1].split('')[0].toUpperCase() : tmp[0].split('')[0].toUpperCase() + tmp[0].split('')[1].toUpperCase()
          break;
        }

      }

    }
    catch (e) {
      this.initials = "?";
      console.log('error with initials :', val)
    }


  }


  constructor() {
    console.log('Hello AvatarComponent Component');

  }

}
