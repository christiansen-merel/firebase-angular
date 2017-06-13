import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

export const firebaseConfig = {
  apiKey: "AIzaSyCvjEn9dqAMZGbnCVa5lMBTVnLJzNbvdl8",
  authDomain: "mojopeinc.firebaseapp.com",
  databaseURL: "https://mojopeinc.firebaseio.com",
  projectId: "mojopeinc",
  storageBucket: "mojopeinc.appspot.com",
  messagingSenderId: "445519055003"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
