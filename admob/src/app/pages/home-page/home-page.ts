/*
 * Angular / Ionic Modules 
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.html'
})
export class HomePage {

  constructor(
    private navController: NavController
  ) {}

}
