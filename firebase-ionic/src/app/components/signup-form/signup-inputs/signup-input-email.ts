/*
 * Angular / Ionic Modules 
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

/*
 * Providers 
 */
import { AuthProvider } from '../../../providers/auth.provider';

@Component({
  selector: 'signup-input-email',
  templateUrl: 'signup-input-email.html'
})
export class SignupInputEmail {

  constructor(
    private router: Router,
    private authProvider: AuthProvider
  ){}

  next(){
    console.log("next::SignupInputEmail");

    let outlets = {}
    outlets['signup-inputs'] = [ 'pw' ];
    this.router.navigate( ['signup-form', { outlets: outlets }]);
  }
}