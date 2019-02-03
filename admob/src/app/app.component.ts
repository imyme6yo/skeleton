/*
 * Angular / Ionic Modules 
 */
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

/*
 * Cordova Modules 
 */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*
 * Pages 
 */
import { Tabs } from './pages/tabs/tabs';

/*
 * 
 */
import { AdmobProvider } from './modules/admob/providers/admob.provider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Tabs;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    admobProvider: AdmobProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      let platformStr: string = "";
      if ( platform.is('ios') ){
        platformStr = 'ios';
        admobProvider.setOptions(platformStr);
      }else if ( platform.is('android') ){
        platformStr = 'android';
        admobProvider.setOptions(platformStr);
      }
    });
  }
}
