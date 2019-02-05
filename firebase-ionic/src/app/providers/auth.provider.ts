/*
 * Angular / Ionic Modules 
 */
import { Injectable } from '@angular/core';

/*
 * External Modules
 */
import * as fs from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

/*
 * Models 
 */
import { Credential } from '../models/auth.model';

@Injectable()
export class AuthProvider{
  recaptchaVerifier: fs.auth.RecaptchaVerifier;
  phoneAuthCb: any;

  credential: Credential = {
    email: 'jon@fire.com',
    pw: 'test',
  };

  constructor(
    private fireAuth: AngularFireAuth
  ){
    
  }
  
  getUser(){
    return this.fireAuth.user;
  }

  signinWithEmail(credential: Credential){
    return this.fireAuth.auth.signInWithEmailAndPassword(credential.email, credential.pw);
  }
  signinAnonymously(){
    return this.fireAuth.auth.signInAnonymously();
  }

  signupWithEmail(credential: Credential){
    return this.fireAuth.auth.createUserWithEmailAndPassword(
      credential.email,
      credential.pw
    );
  }
  signout(){
    return this.fireAuth.auth.signOut();
  }

  signupWithPhone(credential: Credential){
    return this.fireAuth.auth.signInWithPhoneNumber(credential.phone, this.recaptchaVerifier)
  }
}