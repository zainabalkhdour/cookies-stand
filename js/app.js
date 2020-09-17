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
