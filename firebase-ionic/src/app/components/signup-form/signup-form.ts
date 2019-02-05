/*
 * Angular / Ionic Modules
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-form',
  templateUrl: 'signup-form.html'
})
export class SignupForm implements OnInit {
  constructor( 
    private router: Router
  ){}

  ngOnInit(){
    let outlets = {};

    outlets['signup-inputs'] = ['email'];
    this.router.navigate(['signup-form', { outlets: outlets }]);
  }
}