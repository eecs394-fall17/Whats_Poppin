import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';
import { TodayPage } from '../pages/today/today';
import { TomorrowPage } from '../pages/tomorrow/tomorrow';
import { Day3Page } from '../pages/Day3/Day3';
import { Day4Page } from '../pages/Day4/Day4';
import { Day5Page } from '../pages/Day5/Day5';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make RootPage the root (or first) page
  rootPage = TodayPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Today', component: TodayPage },
      { title: '10/27', component: TomorrowPage },
      { title: '10/28', component: Day3Page },
      { title: '10/29', component: Day4Page },
      { title: '10/30', component: Day5Page },    ];
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
