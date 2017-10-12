import { Component } from '@angular/core';
import { ViewController} from 'ionic-angular';

/**
 * Generated class for the HelpModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-help-modal',
  templateUrl: 'help-modal.html',
})
export class HelpModalPage {

  constructor(private viewCtrl: ViewController) {
  }
  
  dismiss(data) {
	  this.viewCtrl.dismiss(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpModalPage');
  }

}
