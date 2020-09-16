<<<<<<< HEAD
'use strict';

var SellingAreas = [];
var workingHours = ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 am", "1:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm"];
var tableElement = document.getElementById('sales-table');

function Shop(location, minCustomerHour, maxCustomerHour, averCookiesPerCustomer) {//working
    this.location = location;
    this.minCustomerHour = minCustomerHour;
    this.maxCustomerHour = maxCustomerHour;
    this.averCookiesPerCustomer = averCookiesPerCustomer;
    this.cookiesPerHour = [];
    this.customersPerHour = [];
    this.dailyTotal = 0;
    this.virticalTotal = 0;
    SellingAreas.push(this);
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

Shop.prototype.calcCustomersPerHour = function () {
    for (var i = 0; i < workingHours.length; i++) {
        this.customersPerHour.push(getRandomNumber(this.minCustomerHour, this.maxCustomerHour));

    }
}

Shop.prototype.calcCookiesPerHour = function () {
    this.calcCustomersPerHour();
    for (var i = 0; i < workingHours.length; i++) {
        var cookiesPerHour = Math.ceil(this.customersPerHour[i] * this.averCookiesPerCustomer);
        this.cookiesPerHour.push(cookiesPerHour);
        this.dailyTotal += cookiesPerHour;



    }
    // for (var i = 0; i < workingHours.length; i++) {
    //     for (var i; i < 5; i++) {
    //         var virticalTotal = 0;
    //         virticalTotal =this.cookiesPerHour[1] +virticalTotal;
    //         return total;
    //     }

    //     this.virticalTotal.push(virticalTotal);
    // }    

}


new Shop('Seattle', 23, 65, 6.3);
new Shop('tokyo', 3, 24, 1.2);
new Shop('Dubai', 11, 38, 3.7);
new Shop('Paris', 20, 38, 2.3);
new Shop('Lima', 2, 16, 4.6);

///the  table

//the footer

// var data7total = document.createElement('td');/// for th virtical total var data7total(raw7)
// footerRawEL.appendChild(data7total);
// data7total.textContent = ' ';
//------------------------------------------------------------------------------

function createHeaderRaw() {


    var headerRawEL = document.createElement('tr');///raw 1
    tableElement.appendChild(headerRawEL);
    var headerDataEL = document.createElement('th');// raw 1 data
    headerRawEL.appendChild(headerDataEL);
    headerDataEL.textContent = ' ';

    for (var t = 0; t < workingHours.length; t++) {
        var hr2EL = document.createElement('th');//rest data of raw 1
        headerRawEL.appendChild(hr2EL);
        hr2EL.textContent = workingHours[t];
    }

    var hrfEL = document.createElement('th');/// for th virtical total hrfel(raw1)
    headerRawEL.appendChild(hrfEL);
    hrfEL.textContent = 'total ';

}

//-------------------------------------------------------------------------------------

Shop.prototype.render = function () {

    this.calcCookiesPerHour();


    var tr2EL = document.createElement('tr');//raw 2
    tableElement.appendChild(tr2EL);
    var data1 = document.createElement('td');//data raw 2
    tr2EL.appendChild(data1);
    data1.textContent = this.location;
    for (var t = 0; t < this.cookiesPerHour.length; t++) {
        var data12 = document.createElement('td');
        tr2EL.appendChild(data12);
        data12.textContent = this.cookiesPerHour[t];
        
    }
    var data1 = document.createElement('td');//data raw 2
    tr2EL.appendChild(data1);
    data1.textContent = this.dailyTotal;




}
//----------------------------------------------------------
function createFooterRaw() {



    var footerRawEL = document.createElement('tr');///raw 7
    tableElement.appendChild(footerRawEL);
    var data6 = document.createElement('th');// raw  7 data(header)
    footerRawEL.appendChild(data6);
    data6.textContent = 'total ';

    for (var t = 0; t < workingHours.length; t++) {
        var data62 = document.createElement('td');//rest of data raw7
        data6.appendChild(data62);
        data62.textContent = this.virticalTotal[t];
    }
}

// vales of factory construction   


function rendertable() {
    createHeaderRaw();

    for (var i = 0; i < SellingAreas.length; i++) {
        SellingAreas[i].render();

    }
    createFooterRaw();
}

rendertable();


=======
var cookiesarr = [];
var workinghours = ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 am", "1:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm"];
///var operation hours from 6-8
//  totalcookiesperhours in object prooerty not the array it will give you one value as a total
/// total += cookiesperhours to sum it
var sum1 = 0;
var Seattle = {

    location: 'Seattle',
    minCustomerHour: 23,
    maxCustomerHour: 65,
    averCookiesPerCustmoer: 6.3,

    randomSeaCustomers: function (minCustomerHour, maxCustomerHour) {
        minCustomerHour = Math.ceil(this.minCustomerHour);
        maxCustomerHour = Math.floor(this.maxCustomerHour);
        return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour + 1)) + this.minCustomerHour;
    }

}

Seattle.randomSeaCustomers();
console.log(Seattle.randomSeaCustomers());

for (i = 0; i < 14; i++) {

    var totalNumCustomer = Seattle.randomSeaCustomers();
    var totalCookies = Math.round(totalNumCustomer * 6.3)
    cookiesarr.push(totalCookies);

    console.log(cookiesarr);
    console.log(totalCookies);
}
//----------------------------------------------
for (m = 0; m < cookiesarr.length; m++) {
    var sum1 = sum1 + cookiesarr[m]
    console.log(sum1);
}
//-------------------------------------------------------
var arraycontainer = document.getElementById('sales');
console.log(arraycontainer);
var ulEL = document.createElement('ul');
arraycontainer.appendChild(ulEL);
var liEL = document.createElement('li');
ulEL.appendChild(liEL);
liEL.textContent = Seattle.location;
for (let n = 0; n < cookiesarr.length; n++) {
    var liEL = document.createElement('li');
    ulEL.appendChild(liEL);
    liEL.textContent = workinghours[n] + ' ' + cookiesarr[n] + ' ' + 'cookies';
    console.log(liEL.textContent);

}

var liEL1 = document.createElement('li');
ulEL.appendChild(liEL1);
liEL1.textContent = 'total' + ' :' + sum1 + ' ' + 'cookies';







//-------------------------------------------------------------
sum2 = 0
var cookiesarr = [];
var Tokyo = {
    location: 'Tokyo',
    minCustomerHour: 3,
    maxCustomerHour: 24,
    "averCookiesPerCustmoer": 1.2,

    randomTokyoCustomers: function (minCustomerHour, maxCustomerHour) {
        minCustomerHour = Math.ceil(this.minCustomerHour);
        maxCustomerHour = Math.floor(this.maxCustomerHour);
        return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour + 1)) + this.minCustomerHour;
    }

}

Tokyo.randomTokyoCustomers();
console.log(Tokyo.randomTokyoCustomers());

for (i = 0; i < 14; i++) {

    var totalNumCustomer = Tokyo.randomTokyoCustomers();
    var totalCookies = Math.round(totalNumCustomer * 6.3)
    cookiesarr.push(totalCookies);
    console.log(cookiesarr);
    console.log(totalCookies);
}
//----------------------------------------------
for (m = 0; m < cookiesarr.length; m++) {
    var sum2 = sum2 + cookiesarr[m]
    console.log(sum2);
}
//-------------------------------------------------------
var arraycontainer = document.getElementById('sales');
console.log(arraycontainer);
var ulEL = document.createElement('ul');
arraycontainer.appendChild(ulEL);
var liEL = document.createElement('li');
ulEL.appendChild(liEL);
liEL.textContent = Tokyo.location;
for (let n = 0; n < cookiesarr.length; n++) {
    var liEL = document.createElement('li');
    ulEL.appendChild(liEL);
    liEL.textContent = workinghours[n] + ' ' + cookiesarr[n] + ' ' + 'cookies';
    console.log(liEL.textContent);

}

var liEL1 = document.createElement('li');
ulEL.appendChild(liEL1);
liEL1.textContent = 'total' + ' :' + sum1 + ' ' + 'cookies';
//-----------------------------------------------------------
var sum3 = 0;
var cookiesarr = [];
var Dubai = {
    location: 'Dubai',
    minCustomerHour: 11,
    maxCustomerHour: 38,
    "averCookiesPerCustmoer": 3.7,

    randomDubaiCustomers: function (minCustomerHour, maxCustomerHour) {
        minCustomerHour = Math.ceil(this.minCustomerHour);
        maxCustomerHour = Math.floor(this.maxCustomerHour);
        return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour + 1)) + this.minCustomerHour;
    }

}

Dubai.randomDubaiCustomers();
console.log(Dubai.randomDubaiCustomers());

for (i = 0; i < 14; i++) {

    var totalNumCustomer = Dubai.randomDubaiCustomers();
    var totalCookies = Math.round(totalNumCustomer * 6.3)
    cookiesarr.push(totalCookies);
    console.log(cookiesarr);
    console.log(totalCookies);
}
//----------------------------------------------
for (m = 0; m < cookiesarr.length; m++) {
    var sum3 = sum3 + cookiesarr[m]
    console.log(sum3);
}
//-------------------------------------------------------
var arraycontainer = document.getElementById('sales');
console.log(arraycontainer);
var ulEL = document.createElement('ul');
arraycontainer.appendChild(ulEL);
var liEL = document.createElement('li');
ulEL.appendChild(liEL);
liEL.textContent = Dubai.location;
for (let n = 0; n < cookiesarr.length; n++) {
    var liEL = document.createElement('li');
    ulEL.appendChild(liEL);
    liEL.textContent = workinghours[n] + ' ' + cookiesarr[n] + ' ' + 'cookies';
    console.log(liEL.textContent);

}

var liEL1 = document.createElement('li');
ulEL.appendChild(liEL1);
liEL1.textContent = 'total' + ' :' + sum1 + ' ' + 'cookies';

//-------------------------------------------------------------
var sum4 = 0;
var cookiesarr = [];
var Paris = {
    location: 'Paris',
    minCustomerHour: 20,
    maxCustomerHour: 38,
    "averCookiesPerCustmoer": 2.3,

    randomParisCustomers: function (minCustomerHour, maxCustomerHour) {
        minCustomerHour = Math.ceil(this.minCustomerHour);
        maxCustomerHour = Math.floor(this.maxCustomerHour);
        return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour + 1)) + this.minCustomerHour;
    }

}

Paris.randomParisCustomers();
console.log(Paris.randomParisCustomers());

for (i = 0; i < 14; i++) {

    var totalNumCustomer = Paris.randomParisCustomers();
    var totalCookies = Math.round(totalNumCustomer * 6.3)
    cookiesarr.push(totalCookies);
    console.log(cookiesarr);
    console.log(totalCookies);
}
//----------------------------------------------
for (m = 0; m < cookiesarr.length; m++) {
    var sum4 = sum4 + cookiesarr[m]
    console.log(sum4);
}
//-------------------------------------------------------
var arraycontainer = document.getElementById('sales');
console.log(arraycontainer);
var ulEL = document.createElement('ul');
arraycontainer.appendChild(ulEL);
var liEL = document.createElement('li');
ulEL.appendChild(liEL);
liEL.textContent = Paris.location;
for (let n = 0; n < cookiesarr.length; n++) {
    var liEL = document.createElement('li');
    ulEL.appendChild(liEL);
    liEL.textContent = workinghours[n] + ' ' + cookiesarr[n] + ' ' + 'cookies';
    console.log(liEL.textContent);

}

var liEL1 = document.createElement('li');
ulEL.appendChild(liEL1);
liEL1.textContent = 'total' + ' :' + sum1 + ' ' + 'cookies';

//-------------------------------------------------------------
var sum5 = 0;
var cookiesarr = [];
var Lima = {
    location: 'Lima',
    minCustomerHour: 2,
    maxCustomerHour: 16,
    "averCookiesPerCustmoer": 4.6,

    randomLimaCustomers: function (minCustomerHour, maxCustomerHour) {
        minCustomerHour = Math.ceil(this.minCustomerHour);
        maxCustomerHour = Math.floor(this.maxCustomerHour);
        return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour + 1)) + this.minCustomerHour;
    }

}

Lima.randomLimaCustomers();
console.log(Lima.randomLimaCustomers());

for (i = 0; i < 14; i++) {

    var totalNumCustomer = Lima.randomLimaCustomers();
    var totalCookies = Math.round(totalNumCustomer * 6.3)
    cookiesarr.push(totalCookies);
    console.log(cookiesarr);
    console.log(totalCookies);
}
//----------------------------------------------
for (m = 0; m < cookiesarr.length; m++) {
    var sum5 = sum5 + cookiesarr[m]
    console.log(sum5);
}
//-------------------------------------------------------
var arraycontainer = document.getElementById('sales');
console.log(arraycontainer);
var ulEL = document.createElement('ul');
arraycontainer.appendChild(ulEL);
var liEL = document.createElement('li');
ulEL.appendChild(liEL);
liEL.textContent = Lima.location;
for (let n = 0; n < cookiesarr.length; n++) {
    var liEL = document.createElement('li');
    ulEL.appendChild(liEL);
    liEL.textContent = workinghours[n] + ' ' + cookiesarr[n] + ' ' + 'cookies';
    console.log(liEL.textContent);

}

var liEL1 = document.createElement('li');
ulEL.appendChild(liEL1);
liEL1.textContent = 'total' + ' :' + sum1 + ' ' + 'cookies';
>>>>>>> master
