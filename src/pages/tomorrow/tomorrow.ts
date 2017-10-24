import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HelpModalPage } from '../help-modal/help-modal';

@Component({
selector: 'page-tomorrow',
templateUrl: 'tomorrow.html'
})

export class TomorrowPage {

data: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data1: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data2: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data3: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data4: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data5: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data6: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];



constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
this.data.push({
details: 'Stop by Foster-Walker Complex (Plex) with clothes, and we\'ll trade you cookies for your donations!',
loc: 'Plex Front Lobby',
cost: 'FREE!',
icon: 'ios-add-circle-outline',
showDetails: false

});

this.data1.push({
details: 'Today is the big day! Come watch our Wildcats qualify for the championship tournament!',
loc: 'Lakeside Field',
cost: '$10',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data2.push({
	details: 'Women in Computing has invited the CME Group to conduct a tech talk on blockchain technologies! Please feel free to swing on by: resumes will be accepted at this event!',
	loc: 'Tech LR5',
	cost: 'FREE!',
	icon: 'ios-add-circle-outline',
	showDetails: false
});

this.data3.push({
	details: 'Join seniors Theo Mavrakis and Joseph Lee as they complete their final recital of their college careers!',
	loc: 'Bienen Auditorium',
	cost: '$10',
	icon: 'ios-add-circle-outline',
	showDetails: false
});

this.data4.push({
	details: 'Our students have worked especially hard this quarter to bring you one of, if not the most entertaining theatrical performace: Book of Mormon',
	loc: 'Cahn Hall',
	cost: '$15',
	icon: 'ios-add-circle-outline',
	showDetails: false
});

this.data5.push({
	details: 'The Knight Lab has recently acquired some brand new sets of Oculus Rifts along with their touch controllers. Feel free to swing by our lab in Locy to give these bad boys a try!',
	loc: 'Knight Lab in Locy',
	cost: 'FREE!',
	icon: 'ios-add-circle-outline',
	showDetails: false
});

this.data6.push({
	details: 'Join the Persian Students Association (PSA) to eat traditional Iranian kabobs! There will be a wide variety of different meats available in addition to vegetarian options. All contributions will be used to help children in Rwanda',
	loc: 'Norris Great Room',
	cost: '$10 per plate',
	icon: 'ios-add-circle-outline',
	showDetails: false
});

}

 toggleDetails(data) {
   if (data.showDetails) {
       data.showDetails = false;
       data.icon = 'ios-add-circle-outline';
   } else {
       data.showDetails = true;
       data.icon = 'ios-remove-circle-outline';
   }
 }

openModal() {
	this.modalCtrl.create(HelpModalPage).present();
}

public ionicNamedColor: string = 'light';
public ionicNamedColor1: string = 'light';

buttonClick(){
var count_string = document.getElementById('count').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;
let btn = <HTMLElement> document.querySelector('#btn');

if(this.ionicNamedColor == 'light') {
       this.ionicNamedColor = 'secondary';
       clicked = true;
	   btn.innerHTML = 'Poppin\'';
     } else {
       this.ionicNamedColor = 'light';
       clicked = false;
	   btn.innerHTML = 'Pop?';
     }

if (clicked == true){
document.getElementById('count').textContent = (count_number + 1).toString();
}else{
document.getElementById('count').textContent = (count_number - 1).toString();
}

}


buttonClick1(){
var count_string = document.getElementById('count1').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;
let btn = <HTMLElement> document.querySelector('#btn1');

if(this.ionicNamedColor1 == 'light') {
       this.ionicNamedColor1 = 'secondary';
       clicked = true;
	   btn.innerHTML = 'Poppin\'';
     } else {
       this.ionicNamedColor1 = 'light';
       clicked = false;
	   btn.innerHTML = 'Pop?';
     }

if (clicked == true){
document.getElementById('count1').textContent = (count_number + 1).toString();
}else{
document.getElementById('count1').textContent = (count_number - 1).toString();
}
}
}
