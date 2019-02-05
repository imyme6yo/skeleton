/*
 * Angular / Ionic Modules 
 */
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

/*
 * Cordova Native Modules 
 */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*
 * Pages 
 */
import { HomePage } from './pages/home-page/home-page';
import { ListPage } from './pages/list-page/list-page';
import { LoginPage } from './pages/login-page/login-page';
import { SmsCertPage } from './pages/sms-cert-page/sms-cert-page';

/*
 * Provider 
 */
import { AuthProvider } from './providers/auth.provider';
import { UserProvider } from './providers/user.provider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private authProvider: AuthProvider,
    private userProvider: UserProvider
  ) {
    this.initializeApp();

    this.userProvider.user$ = this.authProvider.getUser();

    this.userProvider.user$.subscribe(
      (user)=>{
        console.log("user::contructor::MyApp");
        console.log(user);
        if(user === null){
          this.authProvider.signinAnonymously().then(
            (credential)=>{
              this.userProvider.user = credential.user;
            }
          );
        }else{
          this.userProvider.user = user;
        }
      }
    );

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'SMS Certifiction', component: SmsCertPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openLoginPage(){
    this.nav.setRoot(LoginPage);
  }
  logout(){
    this.authProvider.signout()
      .then(
        (res)=>{
          console.log("res::logout::AppComponent");
          console.log(res);
        }
      ).catch(
        (error)=>{
          console.log("error::logout::AppComponent");
          console.log(error);
        }
      );
  }
}
