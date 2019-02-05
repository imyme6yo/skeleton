/*
 * Angular / Ionic Modules 
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


/*
 * Models 
 */

/*
 * Providers 
 */
import { AuthProvider } from '../../providers/auth.provider';

@Component({
  selector: 'sms-certification-form',
  templateUrl: 'sms-certification-form.html'
})
export class SmsCertificationForm implements OnInit{

  constructor(
    private router: Router,
    private authProvider: AuthProvider
  ){}
    
  ngOnInit(){
    console.log("ngOnInit::SmsCertificationForm");

    let outlets = {};

    outlets['sms-certification-inputs'] = [ 'number' ];
    this.router.navigate( ['sms-certification-form', { outlets: outlets }]);

  }
}