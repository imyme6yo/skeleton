/*
 * Angular / Ionic Modules 
 */
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

/*
 * Configurations 
 */
import { appConfig } from './configs/app.config';

import { MyApp } from './app.component';

/*
 * Feature Modules 
 */
import { CoreModule } from './modules/core/core.module';

/*
 * Pages 
 */
import { HomePage } from './pages/home-page/home-page';
import { ListPage } from './pages/list-page/list-page';
import { LoginPage } from './pages/login-page/login-page';
import { SignupPage } from './pages/signup-page/signup-page';
import { SmsCertPage } from './pages/sms-cert-page/sms-cert-page';

/*
 * Components 
 */
import { Detail } from './components/list/detail';
import { List } from './components/list/list';
import { ListForm } from './components/list-form/list-form';

import { LoginInputPw } from './components/login-form/login-inputs/login-input-pw';
import { LoginInputEmail } from './components/login-form/login-inputs/login-input-email';
import { LoginForm } from './components/login-form/login-form';

import { SignupInputPw } from './components/signup-form/signup-inputs/signup-input-pw';
import { SignupInputEmail } from './components/signup-form/signup-inputs/signup-input-email';
import { SignupForm } from './components/signup-form/signup-form';

import { SmsCertificationInputCode } from './components/sms-certification-form/sms-certification-inputs/sms-certification-input-code';
import { SmsCertificationInputNumber } from './components/sms-certification-form/sms-certification-inputs/sms-certification-input-number';
import { SmsCertificationForm } from './components/sms-certification-form/sms-certification-form';

/*
 * Providers 
 */
import { ListProvider } from './providers/list.provider';
import { AuthProvider } from './providers/auth.provider';
import { UserProvider } from './providers/user.provider';


const routes: Routes =[
  {
    path: 'login-form',
    children: [
      {
        path: 'email',
        component: LoginInputEmail,
        outlet: 'login-inputs'
      },
      {
        path: 'pw',
        component: LoginInputPw,
        outlet: 'login-inputs'
      },
    ]
  },

  {
    path: 'signup-form',
    children: [
      {
        path: 'email',
        component: SignupInputEmail,
        outlet: 'signup-inputs'
      },
      {
        path: 'pw',
        component: SignupInputPw,
        outlet: 'signup-inputs'
      }
    ]
  },

  {
    path: 'sms-certification-form',
    children: [
      {
        path: 'number',
        component: SmsCertificationInputNumber,
        outlet: 'sms-certification-inputs'
      },
      {
        path: 'code',
        component: SmsCertificationInputCode,
        outlet: 'sms-certification-inputs'
      }
    ]
  }
]

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    SmsCertPage,

    ListForm,
    Detail,
    List,
    
    LoginInputPw,
    LoginInputEmail,
    LoginForm,
    
    SignupForm,
    SignupInputPw,
    SignupInputEmail,

    SmsCertificationForm,
    SmsCertificationInputCode,
    SmsCertificationInputNumber
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(appConfig.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    SmsCertPage,

    ListForm,
    Detail,
    List,    

    LoginForm,
    LoginInputPw,
    LoginInputEmail,
    
    SignupForm,
    SignupInputPw,
    SignupInputEmail,

    SmsCertificationForm,
    SmsCertificationInputCode,
    SmsCertificationInputNumber
  ],
  providers: [
    ListProvider,
    AuthProvider,
    UserProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
