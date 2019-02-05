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
  selector: 'signup-input-pw',
  templateUrl: 'signup-input-pw.html'
})
export class SignupInputPw {
  pw: string = "";
  nextButtonDisabled: boolean = true;

  constructor(
    private router: Router,
    private navController: NavController,
    private authProvider: AuthProvider,
    private userProvider: UserProvider
  ){}

  prev(){
    console.log("next::SignupInputPw");

    let outlets = {}
    outlets['signup-inputs'] = [ 'email' ];
    this.router.navigate( ['signup-form', { outlets: outlets }]);
  }

  next(){
    if(this.userProvider.user.isAnonymous){
        
      let credential: Credential = this.authProvider.credential;
      this.authProvider.signupWithEmail(credential).then(
        (credential)=>{
          console.log("credential::next::SignupInputPw");
          console.log(credential);
          this.userProvider.user = credential.user;

          this.navController.setRoot(HomePage);
        },
        (error)=>{
          console.log("error::next::SignupInputPw");
          console.log(error);
        }
      );
    }
  }

  checkPw(){
    if( this.pw === this.authProvider.credential.pw ){
      this.nextButtonDisabled = false;
    }else {
      this.nextButtonDisabled = true;
    }
  }
}