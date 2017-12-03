import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'Rxjs';

/*
  Generated class for the PlacesPhotoSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlacesPhotoSearchProvider {
  private apiKey:string = 'AIzaSyD9o5nDS5Okm1FqSXocY0rhGAoBxeb8-8k';
  constructor(public http: HttpClient) {
    console.log('Hello PlacesPhotoSearchProvider Provider');
  }


  getPhotos(photoReference){
   // let url =`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${this.apiKey}`;

   // TODO: remove after testing 

   let url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyD9o5nDS5Okm1FqSXocY0rhGAoBxeb8-8k0";
   return this.http.get(url).map(res=>res)

  }

}
