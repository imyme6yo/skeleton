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
  selector: 'reward-ad-page',
  templateUrl: 'reward-ad-page.html'
})
export class RewardAdPage {

  private adId: string = "ca-app-pub-3858915070219524/7013386714";

  constructor(
    private navController: NavController,
    private admobProvider: AdmobProvider
  ) {}

  showReward(){
    this.admobProvider.showReward();
  }

  hideBanner(){
    this.admobProvider.hideBanner();
  }
}
