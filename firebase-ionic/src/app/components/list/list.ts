/*
 * Angular / Ionic Modules 
 */
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/*
 * Components 
 */
import { ListForm } from '../list-form/list-form';
import { Detail } from '../list/detail';

/*
 * Models 
 */
import { Item } from '../../models/list.model';

/*
 * Provider 
 */
import { ListProvider } from '../../providers/list.provider';

@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class List implements OnInit{
  list: Observable<Array<Item>>;
  operationStr: string = "DATABASE"

  constructor(
    private navController: NavController,
    private listProvider: ListProvider
  ){

  }
  ngOnInit(){
    this.list = this.listProvider.list().snapshotChanges()
      .pipe(
        map(
          (changes: any)=>{
            return changes.map(
              (change)=>({key: change.payload.key, ...change.payload.val()})
            );
          }
        )
      );
  }

  showListForm(){
    this.navController.push(ListForm, {mode: 'create'});
  }

  showDetail(item: Item){
    this.navController.push(Detail, {item: item})
  }

  toggleOperation(){
    if( this.operationStr === "DATABASE" ){
      this.listProvider.setfirestoreOperation();
      this.operationStr = "FIRESTORE";
      this.list = this.listProvider.list().snapshotChanges()
        .pipe(
          map(
            (changes: any)=>{
              console.log("changes::toggleOPeration::List");
              console.log(changes);
              return changes.map(
                (change)=>{
                  console.log("change::toggleOPeration::List");
                  console.log(change);
                  return ({key: change.payload.doc.id, ...change.payload.doc.data()});
                }
              );
            }
          )
        );
      
    } else if (this.operationStr === "FIRESTORE" ){
      this.listProvider.setDatabaseOperation();
      this.operationStr = "DATABASE";
      this.list = this.listProvider.list().snapshotChanges()
      .pipe(
        map(
          (changes: any)=>{
            console.log("changes::toggleOPeration::List");
            console.log(changes);
            return changes.map(
              (change)=>{
                console.log("change::toggleOPeration::List");
                console.log(change);
                return ({key: change.payload.key, ...change.payload.val()});
              }
            );
          }
        )
      );
    }
  }
}