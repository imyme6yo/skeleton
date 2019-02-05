/*
 * Angular / Ionic Modules
 */
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
 * Models 
 */
import { Item } from '../../models/list.model';

/*
 * Providers 
 */
import { ListProvider } from '../../providers/list.provider';

@Component({
  selector: 'list-form',
  templateUrl: 'list-form.html'
})
export class ListForm implements OnInit {

  mode: string;
  item: Item = {
    title: "",
    content: ""
  }

  constructor(
    private navController: NavController,
    private navParams: NavParams,
    private listProvider: ListProvider
  ){}
  
  ngOnInit(){
    this.mode = this.navParams.get('mode');  
    if( this.mode === 'modify'){
      this.item = this.navParams.get('item');
    }
  }

  confirm(){
    if ( this.mode === 'create'){ 
      this.listProvider.create(this.item).then(
        (ref)=>{
          this.navController.pop();
        }
      );
    } 
    else if ( this.mode === 'modify'){ 
      this.listProvider.update(this.item).then(
        (ref)=>{
          this.navController.pop();
        }
      );
    } 
  }

}