/*
 * Angular / Ionic Modules 
 */
import { Injectable } from '@angular/core';

/*
 * Firebase Modules 
 */
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

/*
 * Cordova Native Modules 
 */

/*
 * Models 
 */
import { Item } from '../models/list.model';

export class Operation{
  protected url: string;
  public create(item: Item): any{};
  public list(): any{};
  public retrieve(key: string): any{};
  public update(item: Item): any{};
  public delete(key: string): any{};
}

export class DatabaseOperation extends Operation{
  constructor(
    url: string,
    private database: AngularFireDatabase
  ){
    super();
    this.url = url;
  }

  create(item: Item): any{
    let listRef = this.database.list<Item>(this.url, ref=>ref.limitToFirst(10));
    return listRef.push(item);
  }

  list(): AngularFireList<Item>{
    let listRef = this.database.list<Item>(this.url);
    return listRef;
  }

  retrieve(key: string): AngularFireObject<Item>{
    let itemRef = this.database.object<Item>(this.url+"/"+key);
    return itemRef;
  }

  update(item: Item): any{
    let listRef = this.database.list<Item>(this.url);
    return listRef.update(item.key, item);
  }

  delete(key: string): any{
    let listRef = this.database.list<Item>(this.url);
    return listRef.remove(key);
  }
}


export class firestoreOperation extends Operation{
  constructor(
    url: string,
    private firestore: AngularFirestore
  ){
    super();
    this.url = url;
  }

  create(item: Item): any{
    let collectionRef = this.firestore.collection<Item>(this.url, ref=>ref.limit(10));
    return collectionRef.add(item);
  }

  list(): AngularFirestoreCollection<Item>{
    let collectionRef = this.firestore.collection<Item>(this.url);
    return collectionRef;
  }

  retrieve(key: string): AngularFirestoreDocument<Item>{
    let collectionRef = this.firestore.collection<Item>(this.url);
    let docRef = collectionRef.doc<Item>(key);

    return docRef;
  }

  update(item: Item): any{
    console.log("item::update::firestoreOperation");
    console.log(item);
    let collectionRef = this.firestore.collection<Item>(this.url);
    return collectionRef.doc<Item>(item.key).update(item);
  }

  delete(key: string): any{
    let collectionRef = this.firestore.collection<Item>(this.url);
    return collectionRef.doc<Item>(key).delete();
  }
}

@Injectable()
export class ListProvider{
  private operation: Operation
  private databaseOperation: Operation
  private firestoreOperation: Operation
  constructor(
    private firestore: AngularFirestore,
    private database: AngularFireDatabase,
  ){
    this.databaseOperation = new DatabaseOperation('list', this.database);
    this.firestoreOperation = new firestoreOperation('list', this.firestore);
    
    this.setDatabaseOperation();
  }

  setDatabaseOperation(){
    this.setOperation(this.databaseOperation);
  }

  setfirestoreOperation(){
    this.setOperation(this.firestoreOperation);
  }

  setOperation(operation: Operation){
    this.operation = operation;
  }

  create(item: Item): any{
    return this.operation.create(item);
  }

  list(): any{
    return this.operation.list();
  }

  retrieve(key: string): any{
    return this.operation.retrieve(key);
  }

  update(item: Item): any{
    return this.operation.update(item);
  }

  delete(key: string): any{
    return this.operation.delete(key);
  }
}