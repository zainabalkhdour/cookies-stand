'use strict';
var SellingAreas = [];
var workingHours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 am', '1:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
var tableElement = document.getElementById('sales-table');

function Shop(location, minCustomerHour, maxCustomerHour, averCookiesPerCustomer) {//working
  this.location = location;
  this.minCustomerHour = minCustomerHour;
  this.maxCustomerHour = maxCustomerHour;
  this.averCookiesPerCustomer = averCookiesPerCustomer;
  this.cookiesPerHour = [];
  this.customersPerHour = [];
  this.dailyTotal = 0;
  this.virticalTotal=[];
  SellingAreas.push(this);
}


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

Shop.prototype.calcCustomersPerHour = function () {
  for (var i = 0; i < workingHours.length; i++) {
    this.customersPerHour.push(getRandomNumber(this.minCustomerHour, this.maxCustomerHour));

  }
};

Shop.prototype.calcCookiesPerHour = function () {

  this.calcCustomersPerHour();
  for (var i = 0; i < workingHours.length; i++) {
    var cookiesPerHour = Math.ceil(this.customersPerHour[i] * this.averCookiesPerCustomer);
    this.cookiesPerHour.push(cookiesPerHour);
    this.dailyTotal += cookiesPerHour;

  }

};




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
  data1 = document.createElement('td');//data raw 2
  tr2EL.appendChild(data1);
  data1.textContent = this.dailyTotal;



};
//----------------------------------------------------------
function createFooterRaw() {



  var footerRawEL = document.createElement('tr');///raw 7
  tableElement.appendChild(footerRawEL);
  var data6 = document.createElement('td');// raw  7 data(header)
  footerRawEL.appendChild(data6);
  data6.textContent = 'total ';

  var virticalTotal=0;
  var totalOfTotal = 0;

  for (var i = 0; i < workingHours.length; i++) {
    for (var l=0; l < SellingAreas.length; l++) {
      virticalTotal += SellingAreas[0].cookiesPerHour[l];
      totalOfTotal +=virticalTotal;
    }
    data6 = document.createElement('td');// raw  7 data(header)
    footerRawEL.appendChild(data6);
    data6.textContent = virticalTotal;
  }
  data6 = document.createElement('td');// raw  7 data(header)
  footerRawEL.appendChild(data6);
  data6.textContent = totalOfTotal;

}

{/* <label for="store">new selling store</label>
<input type="text" id="store" placeholder="name of store location">
<label for="minCustomerHour">minCustomerHour</label>
<input type="text" id="minCustomerHour" placeholder="ex: 24">
<label for="maxCustomerHour">maxCustomerHour</label>
<input type="text" id="maxCustomerHour" placeholder="ex: 54">
<label for="averCookiesPerCustomer">averCookiesPerCustomer</label>
<input type="text" id="averCookiesPerCustomer" placeholder="ex: 2">
<input type="submit" id="submit-button" value="submit"></input> */}


var form=document.getElementById('raw-table');
form.addEventListener('submit',submitHandler);
function submitHandler(event){
  
  Shop.calcCookiesPerHour();
  event.preventDefault();
  new Shop (location,minCustomerHour,maxCustomerHour,averCookiesPerCustomer);
  let location=event.target.location.value;
  let minCustomerHour =event.target.minCustomerHour.value;
  let maxCustomerHour =event.target.maxCustomerHour.value;
  let averCookiesPerCustomer =event.target.averCookiesPerCustomer.value;

  var tr2EL = document.createElement('tr');//raw 2
  tableElement.appendChild(tr2EL);
  var data1 = document.createElement('td');//data raw 2
  tr2EL.appendChild(data1);
  data1.textContent = Shop.location;
  for (var t = 0; t < Shop.cookiesPerHour.length; t++) {
    var data12 = document.createElement('td');
    tr2EL.appendChild(data12);
    data12.textContent = Shop.cookiesPerHour[t];

  }
  data1 = document.createElement('td');//data raw 2
  tr2EL.appendChild(data1);
  data1.textContent = Shop.dailyTotal;

  }

 







function rendertable() {


  createHeaderRaw();

  for (var i = 0; i < SellingAreas.length; i++) {
    SellingAreas[i].render();
    
  }
  createFooterRaw();
  submitHandler();
}

rendertable();
