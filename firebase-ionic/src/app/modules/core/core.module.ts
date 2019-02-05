/*
 * Angular / Ionic Modules 
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

/*
 * Cordova Native Modules 
 */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*
 * Feature Modules 
 */

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: CoreModule,
      providers: [
        StatusBar,
        SplashScreen,
      ]
    }
  }
}
