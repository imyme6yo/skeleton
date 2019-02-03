/*
 * Angular / Ionic Modules 
 */
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

/*
 * Feature Modules 
 */
// import { AdMobModule } from './modules/admob/admob.module';
import { CoreModule } from './modules/core/core.module';

import { RewardAdPage } from './pages/reward-ad-page/reward-ad-page';
import { InterstitialAdPage } from './pages/interstitial-ad-page/interstitial-ad-page';
import { BannerAdPage } from './pages/banner-ad-page/banner-ad-page';
import { HomePage } from './pages/home-page/home-page';
import { Tabs } from './pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    RewardAdPage,
    InterstitialAdPage,
    BannerAdPage,
    HomePage,
    Tabs
  ],
  imports: [
    CoreModule.forRoot(),
    IonicModule.forRoot(MyApp),
    // AdMobModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RewardAdPage,
    InterstitialAdPage,
    BannerAdPage,
    HomePage,
    Tabs
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
