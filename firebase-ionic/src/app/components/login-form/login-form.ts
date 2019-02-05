
/*
 * Angular / Ionic Modules 
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginForm implements OnInit {

  constructor(
    private router: Router
  ){
  }

  ngOnInit(){
    console.log("ngOnInit::LoginForm");

    let outlets = {};

    outlets['login-inputs'] = [ 'email' ];
    this.router.navigate(['login-form', {outlets: outlets}]);
  }
}