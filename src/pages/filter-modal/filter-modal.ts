import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-filter-modal',
  templateUrl: 'filter-modal.html',
})
export class FilterModalPage {

  sports: boolean;
  career: boolean;
  music: boolean;
  theatre: boolean;
  workshops: boolean;
  volunteer: boolean;
  cultural: boolean;

  update(){

  }

  constructor(private viewCtrl: ViewController) {
  }

  dismiss(data) {
	this.viewCtrl.dismiss(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterModalPage');
  }

}
