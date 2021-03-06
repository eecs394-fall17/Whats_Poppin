import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HelpModalPage } from '../help-modal/help-modal';
import { FilterModalPage } from '../filter-modal/filter-modal';

@Component({
selector: 'page-Day5',
templateUrl: 'Day5.html'
})


export class Day5Page {

data: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data1: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data2: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data3: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data4: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data5: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data6: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];


constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
this.data.push({
details: 'Come cheer on the Wildcats as our Club Squash teams face off against UChicago! Busses will be available and leave promptly at 09:00am from Plex',
loc: 'Foster-Walker Complex',
cost: 'FREE!',
icon: 'ios-add-circle-outline',
showDetails: false
});


this.data1.push({
details: 'Ever wonder how to make your own video game? All interested students should come hear Prof. Horswill\'s weekly lectures on the topic. Basic coding experience can be useful, but not required',
loc: 'Tech LR2',
cost: 'FREE!',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data2.push({
details: 'Ms. Yousafzai will enlighten us of the long journey she took in becoming a prominent activist for female education and a Nobel Prize laureate after she encountered difficulties with the Taliban',
loc: 'Tech LR4',
cost: 'FREE!',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data3.push({
details: 'Representatives from United Airlines will be available to answer questions and accept resumes from 12pm to 2pm',
loc: 'Tech Front Lobby',
cost: 'FREE!',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data4.push({
details: 'NUIT is looking to hire more staff. Please feel free to join our close-knit family and learn about our weekly tasks! No prior IT experience is required, though it certainly will be useful',
loc: 'University Library Collab Zone',
cost: 'FREE!',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data5.push({
details: 'Northwestern\'s oldest Acapella group will be performing their first show of 2017 tonight!',
loc: 'Norris Great Room',
cost: '$10',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data6.push({
details: 'Do you like improv? Do you like to laugh? Come checkout NSTV and meet individuals involved in improv groups on campus!',
loc: 'Ford ITW Room',
cost: 'FREE!',
icon: 'ios-add-circle-outline',
showDetails: false
});

//this.modalCtrl.create(HelpModalPage).present();
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

public ionicNamedColor: string = 'light';
public ionicNamedColor1: string = 'light';
public ionicNamedColor2: string = 'light';
public ionicNamedColor3: string = 'light';
public ionicNamedColor4: string = 'light';
public ionicNamedColor5: string = 'light';
public ionicNamedColor6: string = 'light';

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

buttonClick2(){
var count_string = document.getElementById('count2').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;
let btn = <HTMLElement> document.querySelector('#btn2');

if(this.ionicNamedColor2 == 'light') {
this.ionicNamedColor2 = 'secondary';
clicked = true;
btn.innerHTML = 'Poppin\'';
} else {
this.ionicNamedColor2 = 'light';
clicked = false;
btn.innerHTML = 'Pop?';
}

if (clicked == true){
document.getElementById('count2').textContent = (count_number + 1).toString();
}else{
document.getElementById('count2').textContent = (count_number - 1).toString();
}
}

buttonClick3(){
var count_string = document.getElementById('count3').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;
let btn = <HTMLElement> document.querySelector('#btn3');

if(this.ionicNamedColor3 == 'light') {
this.ionicNamedColor3 = 'secondary';
clicked = true;
btn.innerHTML = 'Poppin\'';
} else {
this.ionicNamedColor3 = 'light';
clicked = false;
btn.innerHTML = 'Pop?';
}

if (clicked == true){
document.getElementById('count3').textContent = (count_number + 1).toString();
}else{
document.getElementById('count3').textContent = (count_number - 1).toString();
}
}

buttonClick4(){
var count_string = document.getElementById('count4').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;
let btn = <HTMLElement> document.querySelector('#btn4');

if(this.ionicNamedColor4 == 'light') {
this.ionicNamedColor4 = 'secondary';
clicked = true;
btn.innerHTML = 'Poppin\'';
} else {
this.ionicNamedColor4 = 'light';
clicked = false;
btn.innerHTML = 'Pop?';
}

if (clicked == true){
document.getElementById('count4').textContent = (count_number + 1).toString();
}else{
document.getElementById('count4').textContent = (count_number - 1).toString();
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

buttonClick6(){
var count_string = document.getElementById('count6').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;
let btn = <HTMLElement> document.querySelector('#btn6');

if(this.ionicNamedColor6 == 'light') {
this.ionicNamedColor6 = 'secondary';
clicked = true;
btn.innerHTML = 'Poppin\'';
} else {
this.ionicNamedColor6 = 'light';
clicked = false;
btn.innerHTML = 'Pop?';
}

if (clicked == true){
document.getElementById('count6').textContent = (count_number + 1).toString();
}else{
document.getElementById('count6').textContent = (count_number - 1).toString();
}
}

}
