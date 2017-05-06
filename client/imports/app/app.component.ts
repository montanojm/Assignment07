import { Component } from '@angular/core';
import template from "./app.html";
import { Platform } from 'ionic-angular';
import { Meteor } from 'meteor/meteor';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { ChatsPage } from '../pages/chats/chats';
 
@Component({
  selector: 'my-app',
  template
})
export class MyApp {
  rootPage = any;
  
  constructor(platform: Platform) {
    this.rootPage = Meteor.user() ? ChatsPage : LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (platform.is('cordova')) {
        StatusBar.styleDefault();
        Splashscreen.hide();
      }
    });
  }
}