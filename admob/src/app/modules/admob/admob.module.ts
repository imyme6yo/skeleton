/*
 * Angular / Ionic Modules 
 */
import { NgModule, ModuleWithProviders } from '@angular/core';

/*
 * Cordova Native Modules 
 */
import { Admob } from '@ionic-native/admob';

/*
 * Providers 
 */
import { AdmobProvider } from './providers/admob.provider';

@NgModule({
})
export class AdmobModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: AdmobModule,
      providers: [ 
        Admob,
        AdmobProvider 
      ]
    }
  }
}
