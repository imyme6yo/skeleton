/*
 * Angular / Ionic Modules 
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/*
 * External Modules
 */
import * as fs from 'firebase/app';

/*
 * Providers 
 */
import { AuthProvider } from '../../../providers/auth.provider';

@Component({
  selector: 'sms-certification-input-number',
  templateUrl: 'sms-certification-input-number.html'
})
export class SmsCertificationInputNumber implements OnInit{
  phone: string = ""; 
  constructor(
    private router: Router,
    private authProvider: AuthProvider
  ){}
  
  ngOnInit(){
    this.authProvider.recaptchaVerifier = new fs.auth.RecaptchaVerifier('recaptcha-container');
  }

  next(){
    console.log("next::SignupInputEmail");

    this.authProvider.credential.phone = this.phone;

    this.authProvider.signupWithPhone(this.authProvider.credential)
      .then(
        (res)=>{
          this.authProvider.phoneAuthCb = res;

          let outlets = {}

          outlets['sms-certification-inputs'] = [ 'code' ];
          this.router.navigate( ['sms-certification-form', { outlets: outlets }]);
        }
      )
      .catch(
        (error)=>{
          console.log("error::next::SmsCertificationInputNumber");
          console.log(error);
        }
      )

  }
}