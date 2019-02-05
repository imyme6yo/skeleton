/*
 * Angular / Ionic Modules 
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from 'ionic-angular';

/*
 * Pages 
 */
import { HomePage } from '../../../pages/home-page/home-page';

/*
 * Providers 
 */
import { AuthProvider } from '../../../providers/auth.provider';

@Component({
  selector: 'sms-certification-input-code',
  templateUrl: 'sms-certification-input-code.html'
})
export class SmsCertificationInputCode {
  code: string;
  constructor(
    private router: Router,
    private navController: NavController,
    private authProvider: AuthProvider
  ){}

  prev(){
    console.log("next::SmsCertificationInputCode");

    let outlets = {}

    outlets['sms-certification-inputs'] = [ 'number' ];
    this.router.navigate( ['sms-certification-form', { outlets: outlets }]);
  }
  next(){
    // verify code
    this.authProvider.phoneAuthCb.confirm(this.code)
      .then(
        (res)=>{
          this.navController.push(HomePage)
        }
      )
      .catch(
        (error)=>{
          console.log("error::next::SmsCertificationInputCode");
          console.log(error);
        }
      )
  }
}