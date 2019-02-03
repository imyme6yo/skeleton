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
  selector: 'banner-ad-page',
  templateUrl: 'banner-ad-page.html'
})
export class BannerAdPage {

  private adId: string = "ca-app-pub-3858915070219524/1433880683";
  
  constructor(
    private navController: NavController,
    private admobProvider: AdmobProvider
  ) {}

  showBanner(){
    this.admobProvider.showBanner();
  }

  hideBanner(){
    this.admobProvider.hideBanner();
  }
}
