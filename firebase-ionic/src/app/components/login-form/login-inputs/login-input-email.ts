/*
 * Angular / Ionic Modules 
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from 'ionic-angular';

/*
 * Components 
 */
import { SignupPage } from '../../../pages/signup-page/signup-page';

/*
 * Providers 
 */
import { AuthProvider } from '../../../providers/auth.provider';

@Component({
  selector: 'login-input-email',
  templateUrl: 'login-input-email.html'
})
export class LoginInputEmail {

  constructor(
    private router: Router,
    private navController: NavController,
    private authProvider: AuthProvider
  ){}

  next(){
    console.log("next::LoginInputEmail");

    let outlets = {}
    outlets['login-inputs'] = [ 'pw' ];
    this.router.navigate( ['login-form', { outlets: outlets }]);
  }

  showSignupPage(){
    this.navController.push(SignupPage);
  }
}