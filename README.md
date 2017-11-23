# tllr
# Setup:
 1. clone the master branch
 2. run npm install 
 3. run cordova plugins install
 
 #  Desccription:
 Contains the location picker and select-contacts plugins.
 
 #  TRANSFERING COPONENTS AND SETUP
 1.dependencies:
  1. Make sure that package @ngui/map is installed ( for the maps component)
  2. Make sure cordova-plugin-contacts-phonenumbers is installed via cordova plugin add cordova-plugin-contacts-phonenumbers
        [https://github.com/dbaq/cordova-plugin-contacts-phone-numbers](link to plugin github)
 2.Copying code:
  1. From the app.module.ts file .. copy over the lines marked with  /** COPY THIS */
  2. From the app.scss file , copy over css marked with  /** COPY THIS */
  3. Copy the select-contacts and the location-picker folders into the destiantion , keeping the same hirarchy
 
 # using the components
 1. the location picker is invoked declaratively from a button , link etc via the navPush attribut. In this repo , you will find the example in the home component:
 **<button ion-button [navPush]="pushPage" [navParams]="params">select location</button>**.
 YOU MUST IMPORT THE locationPickerPageComponent in the page from where you are goign to invoke this.
  
 2. when the locaiton picker is invoked and a location is selected , the location picker pushes the select contacts component , passing the selected address to it.
 once the contacts are selected and the continue button is clicked , the **confirm()** function in the component collects the address and selected contacts for passing on. This function has been stubbed for now.
 
 #  Important 
 the contacts page will not work in the browser and will fail, please test it with emulation or a real device.
