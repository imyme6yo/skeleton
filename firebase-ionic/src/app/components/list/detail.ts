/*
 * Angular / Ionic Modules 
 */
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
 * Components 
 */
import { ListForm } from '../list-form/list-form';

/*
 * Models 
 */
import { Item } from '../../models/list.model';

/*
 * Providers 
 */
import { ListProvider } from '../../providers/list.provider';

@Component({
  selector: 'detail',
  templateUrl: 'detail.html'
})
export class Detail implements OnInit {
  item: Item;
  constructor(
    private navController: NavController,
    private navParams: NavParams,
    private listProvider: ListProvider
  ){}

  ngOnInit(){
    this.item = this.navParams.get('item');

    console.log("this.item::ngOnInit::Detail");
    console.log(this.item);
  }

  showListForm(){
    this.navController.push(ListForm, {mode: 'modify', item: this.item});
  }

  remove(){
    this.listProvider.delete(this.item.key).then(
      (ref)=>{
        this.navController.pop();
      }
    );
  }
}