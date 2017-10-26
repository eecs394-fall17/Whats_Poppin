import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HelpModalPage } from '../help-modal/help-modal';
import { FilterModalPage } from '../filter-modal/filter-modal';

@Component({
selector: 'page-Day3',
templateUrl: 'Day3.html'
})


export class Day3Page {

data: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data1: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data2: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data3: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data4: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data5: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];
data6: Array<{ details: string, loc: string, cost: string, icon: string, showDetails: boolean}> = [];


constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
this.data.push({
details: 'Feel free to come either watch or play in a completely student-run weekly ultimate frisbee group!',
loc: 'Deering Meadow',
cost: 'FREE!',
icon: 'ios-add-circle-outline',
showDetails: false
});


this.data1.push({
details: 'Mrs. Goldstein will be hosting weekly information sessions designed to teach curious students how to animate. These courses assume no prior animation experience',
loc: 'Fisk 102',
cost: 'FREE!',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data2.push({
details: 'The Indian Student Allicance will be hosting a festival to celebrate Diwali this year! There will be music, food, contests, and all sorts of fun!',
loc: 'Norris',
cost: '$10',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data3.push({
details: 'Representatives from Apple headquarters will be available to answer questions and accept resumes from 12pm to 2pm in Tech LR4',
loc: 'Tech LR4',
cost: 'FREE!',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data4.push({
details: 'Bienen is looking to hire more staff this year to handle event ushering. Come to Bienen Room 2-314 to hear more!',
loc: 'Bienen Room 2-314',
cost: 'FREE!',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data5.push({
details: 'Northwestern\'s premiere co-ed Acapella group will be performing their first show of 2017 tonight!',
loc: 'Norris Great Room',
cost: '$15',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data6.push({
details: 'Join our annual screening/performance of Rocky Horror Picture Show! Come meet other students, eat great food, and create college memories you can talk about for the rest of your life!',
loc: 'Ford ITW Room',
cost: '$15!',
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
