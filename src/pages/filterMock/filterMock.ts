import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HelpModalPage } from '../help-modal/help-modal';
import { FilterModalPage } from '../filter-modal/filter-modal';

@Component({
selector: 'page-filterMock',
templateUrl: 'filterMock.html'
})


export class filterMockPage {
	
	public ionicNamedColor: string = 'light';
	public ionicNamedColor5: string = 'light';
	public ionicNamedColor7: string = 'light';
	public ionicNamedColor8: string = 'light';
	public ionicNamedColor9: string = 'light';
	
	data: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
	data5: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
	data7: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
	data8: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
	data9: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
	
	constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
		
		this.data.push({
			details: 'The first round of Club Tennis Tryouts will be held at SPAC and last 3 hours. Please don\'t forget to bring proper shoes, a towel, and your water bottle!',
			loc: 'SPAC Indoor Tennis Courts',
			cost: 'FREE!',
			icon: 'ios-add-circle-outline',
			showDetails: false
		});
		
		this.data5.push({
			details: 'Northwestern\'s premiere all-male Acapella group will be performing their first show of 2017 tonight in the Norris Louis Room',
			loc: 'Norris Great Room',
			cost: '$10',
			icon: 'ios-add-circle-outline',
			showDetails: false
		});
		
		this.data7.push({
			details: 'Come face off against your fellow classmates in friendly basketball games!',
			loc: 'Bobb Hall',
			cost: 'FREE!',
			icon: 'ios-add-circle-outline',
			showDetails: false
		});

			this.data8.push({
			details: 'Join the best percussionists of Northwestern as they host their first show of 2017!',
			loc: 'Norris Basement',
			cost: '$15!',
			icon: 'ios-add-circle-outline',
			showDetails: false
		});

			this.data9.push({
			details: 'Come join us for a friendly game of soccer!',
			loc: 'Deering Meadow',
			cost: 'FREE!',
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

	openFilter() {
		this.modalCtrl.create(FilterModalPage).present();
	}
	
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
		} else{
			document.getElementById('count').textContent = (count_number - 1).toString();
		}
	}
	
	buttonClick5(){
		var count_string = document.getElementById('count5').textContent;
		var count_number = Number(count_string);
		let clicked : boolean = false;
		let btn = <HTMLElement> document.querySelector('#btn5');

		if(this.ionicNamedColor5 == 'light') {
			this.ionicNamedColor5 = 'secondary';
			clicked = true;
			btn.innerHTML = 'Poppin\'';
		} else {
			this.ionicNamedColor5 = 'light';
			clicked = false;
			btn.innerHTML = 'Pop?';
		}

		if (clicked == true){
			document.getElementById('count5').textContent = (count_number + 1).toString();
		}else{
			document.getElementById('count5').textContent = (count_number - 1).toString();
		}
	}
	
	buttonClick7(){
		var count_string = document.getElementById('count7').textContent;
		var count_number = Number(count_string);
		let clicked : boolean = false;
		let btn = <HTMLElement> document.querySelector('#btn7');

		if(this.ionicNamedColor7 == 'light') {
			this.ionicNamedColor7 = 'secondary';
			clicked = true;
			btn.innerHTML = 'Poppin\'';
		} else {
			this.ionicNamedColor7 = 'light';
			clicked = false;
			btn.innerHTML = 'Pop?';
		}

		if (clicked == true){
			document.getElementById('count7').textContent = (count_number + 1).toString();
		}else{
			document.getElementById('count7').textContent = (count_number - 1).toString();
		}
	}

	buttonClick8(){
		var count_string = document.getElementById('count8').textContent;
		var count_number = Number(count_string);
		let clicked : boolean = false;
		let btn = <HTMLElement> document.querySelector('#btn8');

		if(this.ionicNamedColor8 == 'light') {
			this.ionicNamedColor8 = 'secondary';
			clicked = true;
			btn.innerHTML = 'Poppin\'';
		} else {
			this.ionicNamedColor8 = 'light';
			clicked = false;
			btn.innerHTML = 'Pop?';
		}

		if (clicked == true){
			document.getElementById('count8').textContent = (count_number + 1).toString();
		}else{
			document.getElementById('count8').textContent = (count_number - 1).toString();
		}
	}

	buttonClick9(){
		var count_string = document.getElementById('count9').textContent;
		var count_number = Number(count_string);
		let clicked : boolean = false;
		let btn = <HTMLElement> document.querySelector('#btn9');

		if(this.ionicNamedColor9 == 'light') {
			this.ionicNamedColor9 = 'secondary';
			clicked = true;
			btn.innerHTML = 'Poppin\'';
		} else {
			this.ionicNamedColor9 = 'light';
			clicked = false;
			btn.innerHTML = 'Pop?';
		}

		if (clicked == true){
			document.getElementById('count9').textContent = (count_number + 1).toString();
		}else{
			document.getElementById('count9').textContent = (count_number - 1).toString();
		}
	}
	
}
