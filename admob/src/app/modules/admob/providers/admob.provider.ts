/*
 * Angular / Ionic Modules 
 */
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs';


/*
 * Cordova Native Modules 
 */
import { Admob } from '@ionic-native/admob';
import { AdmobOptions } from '@ionic-native/admob';

@Injectable()
export class AdmobProvider{
  
  constructor(
    private admob: Admob
  ){}

  setOptions(platform: string){
    if ( platform === 'ios' ){

    }else if ( platform === 'android' ){
      const admobOptions: AdmobOptions = {
        publisherId: "ca-app-pub-3940256099942544/6300978111",
        interstitialAdId: "ca-app-pub-3940256099942544/1033173712",
        rewardedAdId: "ca-app-pub-3940256099942544/5224354917",
        isTesting: true,
        autoShowBanner: false,
        autoShowInterstitial: false,
        autoShowRewarded: false,
        bannerAtTop: true,
        adSize: this.admob.AD_SIZE.BANNER,
      }

      this.admob.setOptions(admobOptions)
      .then(
        ()=>{
          console.log("success::setOptions::constructor::AdmobProvider");
          this.onAdLoaded();
        }
      )
      .catch(
        (error)=>{
          console.log("error::setOptions::constructor::AdmobProvider");
          console.log(error);
        }
      );
    }
  }

  showInterstitial(){
    this.admob.requestInterstitialAd()
      .then(
        () => {
          console.log("success::requestInterstitialAd::showInterstitial::AdmobProvider");
        }
      )
      .catch(
        (error) => {
          console.log("error::requestInterstitialAd::showInterstitial::AdmobProvider");
          console.log(error);
        }
      );
  }

  showBanner(){
    this.admob.createBannerView()
      .then(
        () => {
          console.log("success::createBannerView::showBanner::AdmobProvider");
        }
      )
      .catch(
        (error) => {
          console.log("error::createBannerView::showBanner::AdmobProvider");
          console.log(error);
        }
      );
  }

  hideBanner(){
    this.admob.showBannerAd(false)
      .then(
        () => {
          console.log("success::showBannerAd::hideBanner::AdmobProvider");
        }
      )
      .catch(
        (error) => {
          console.log("error::showBannerAd::hideBanner::AdmobProvider");
          console.log(error);
        }
      );
  }
  
  hideInterstitial(){
    this.admob.destroyBannerView();
  }

  showReward(){
    this.admob.requestRewardedAd()
      .then(
        () => {
          console.log("success::requestRewardedAd::showReward::AdmobProvider");
        }
      )
      .catch(
        (error) => {
          console.log("error::requestRewardedAd::showReward::AdmobProvider");
          console.log(error);
        }
      );
  }

  // On Ad loaded event
  onAdLoaded(){
    console.log("subscribe::onAdLoaded::AdmobProvider");
    this.admob.onAdLoaded().subscribe(
      (ad)=>{
        console.log("ad::onAdLoaded::AdmobProvider");
        console.log(ad);
        if( ad.adType === this.admob.AD_TYPE.INTERSTITIAL ){
          this.admob.showInterstitialAd()
            .then(
              ()=>{
                console.log("success::showInterstitialAd::onAdLoaded::AdmobProvider");
              }
            )
            .catch(
              (error)=>{
                console.log("error::showInterstitialAd::onAdLoaded::AdmobProvider");
                console.log(error);
              }
            );
        } else if (ad.adType === this.admob.AD_TYPE.BANNER) {
          this.admob.showBannerAd(true)
            .then(
              () => {
                console.log("success::showBannerAd::onAdLoaded::AdmobProvider");
              }
            )
            .catch(
              (error) => {
                console.log("error::showBannerAd::onAdLoaded::AdmobProvider");
                console.log(error);
              }
            );
          console.log("success::new banner ad recieved");
        } else if (ad.adType === this.admob.AD_TYPE.REWARDED) {
          this.admob.showRewardedAd()
            .then(
              () => {
                console.log("success::showRewardedAd::onAdLoaded::AdmobProvider");
              }
            )
            .catch(
              (error) => {
                console.log("error::showRewardedAd::onAdLoaded::AdmobProvider");
                console.log(error);
              }
            );
        }
      }
    );
  }

  // On ad failed to load
  onAdFailedToLoad(): Observable<any>{
    return this.admob.onAdFailedToLoad();
  }

  // On interstitial ad opened
  onAdOpened(): Observable<any>{
    return this.admob.onAdOpened();
  }

  // On interstitial ad closed
  onAdClosed(): Observable<any>{
    return this.admob.onAdClosed();
  }

  // On ad clicked and left application
  onAdLeftApplication(): Observable<any>{
    return this.admob.onAdLeftApplication();
  }

  // On user ad rewarded
  onRewardedAd(): Observable<any>{
    return this.admob.onRewardedAd();
  }

  // On rewarded ad video started
  onRewardedAdVideoStarted(): Observable<any>{
    return this.admob.onRewardedAdVideoStarted();
  }


  // On rewarded ad video completed
  onRewardedAdVideoCompleted(): Observable<any>{
    return this.admob.onRewardedAdVideoCompleted();
  }
}