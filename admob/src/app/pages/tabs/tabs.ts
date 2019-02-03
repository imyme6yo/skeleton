import { Component } from '@angular/core';

import { RewardAdPage } from '../reward-ad-page/reward-ad-page';
import { InterstitialAdPage } from '../interstitial-ad-page/interstitial-ad-page';
import { BannerAdPage } from '../banner-ad-page/banner-ad-page';
import { HomePage } from '../home-page/home-page';

@Component({
  templateUrl: 'tabs.html'
})
export class Tabs {
  tab1Root = HomePage;
  tab2Root = BannerAdPage;
  tab3Root = InterstitialAdPage;
  tab4Root = RewardAdPage;

  constructor() {

  }
}
