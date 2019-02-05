/*
 * Angular / Ionic Modules 
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from 'ionic-angular';

/*
 * Components 
 */
import { HomePage } from '../../../pages/home-page/home-page';

/*
 * Models 
 */
import { Credential } from '../../../models/auth.model';

/*
 * Providers 
 */
import { AuthProvider } from '../../../providers/auth.provider';
import { UserProvider } from '../../../providers/user.provider';

@Component({
  selector: 'login-input-pw',
  templateUrl: 'login-input-pw.html'
})
export class LoginInputPw {

  constructor(
    private router: Router,
    private navController: NavController,
    private authProvider: AuthProvider,
    private userProvider: UserProvider
  ){}

  prev(){
    console.log("next::LoginInputPw");

    let outlets = {}
    outlets['login-inputs'] = [ 'email' ];
    this.router.navigate( ['login-form', { outlets: outlets }]);
  }

  next(){
    if(this.userProvider.user.isAnonymous){
      let credential: Credential = this.authProvider.credential;

      this.authProvider.signinWithEmail(credential).then(
        (credential)=>{
          console.log("credential::next::LoginInputPw");
          console.log(credential);
          this.userProvider.user = credential.user;
  
          this.navController.setRoot(HomePage);
        },
        (error)=>{
          console.log("error::next::LoginInputPw");
          console.log(error);
        }
      );
    }
  }
}