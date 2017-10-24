import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TodayPage } from '../pages/today/today';
import { TomorrowPage } from '../pages/tomorrow/tomorrow';
import { HelpModalPage } from '../pages/help-modal/help-modal';
import { FilterModalPage } from '../pages/filter-modal/filter-modal';
import { Day3Page } from '../pages/Day3/Day3';
import { Day4Page } from '../pages/Day4/Day4';
import { Day5Page } from '../pages/Day5/Day5';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TodayPage,
    TomorrowPage,
    Day3Page,
    Day4Page,
    Day5Page,
	HelpModalPage,
	FilterModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodayPage,
    TomorrowPage,
    Day3Page,
    Day4Page,
    Day5Page,
	HelpModalPage,
	FilterModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
