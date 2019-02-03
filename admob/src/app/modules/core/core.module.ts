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
import { AdmobModule } from '../admob/admob.module';

@NgModule({
  imports: [
    AdmobModule,
    BrowserModule,
    CommonModule,
  ],
  exports:[
    AdmobModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: CoreModule,
      providers: [
        StatusBar,
        SplashScreen,
        AdmobModule.forRoot().providers,
      ]
    }
  }
}
