/*
 * Angular / Ionic Modules 
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
 * Providers 
 */
import { AdmobProvider } from '../../modules/admob/providers/admob.provider';

@Component({
  selector: 'interstitial-ad-page',
  templateUrl: 'interstitial-ad-page.html'
})
export class InterstitialAdPage {

  private adId: string = "ca-app-pub-3858915070219524/1937154002";

  constructor(
    private navController: NavController,
    private admobProvider: AdmobProvider
  ) {}

  showInterstitial(){
    this.admobProvider.showInterstitial();
  }

  hideBanner(){
    this.admobProvider.hideBanner();
  }
}
