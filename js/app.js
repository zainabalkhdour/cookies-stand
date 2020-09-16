'use strict';

var SellingAreas = [];
var workingHours = ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 am", "1:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm"];
var tableElement = document.getElementById('sales-table');

function Shop(location, minCustomerHour, maxCustomerHour, averCookiesPerCustmoer) {//working
    this.location = location;
    this.minCustomerHour = minCustomerHour;
    this.maxCustomerHour = maxCustomerHour;
    this.averCookiesPerCustomer = averCookiesPerCustomer;
    this.cookiesPerHour = [];
    this.customersPerHour = [];
    this.dailyTotal = 0;

    SellingAreas.push(this);
}
Shop.prototype.calcCustomersPerHour = function () {
    for (var i = 0; i < customersPerHour.length; i++) {
        this.customersPerHour.push(getRandomNumber(this.minCustomerHour, this.maxCustomerHour));
    }
}

Shop.prototype.cookiesPerHour = function () {
    this.ccalcCustomersPerHour();
    for (var i = 0; i < cookiesPerHour.length; i++) {
        var cookiesPerHour = Math.ceil(this.customersPerHour[i] * this.averCookiesPerCustomer);
        this.cookiesPerHour.push(cookiesPerHour);
        this.dailyTotal += cookiesPerHour;
    }

}

function getRandomNumber(min, max) {
    this.customersPerHour.push();
    return Math.floor(Math.random() * (max - min + 1)) + min;

}


///the  table
Shop.prototype.render = function () {

    this.calcCustomersPerHour();

    var tr2EL = document.createElement('tr');//raw 2
    tableElement.appendChild(tr2EL);
    var data1 = document.createElement('td');//data raw 2
    tr2EL.appendChild(data1);
    data1.textContent = this.location
    for (var t = 0; t < workingHours.length; t++) {
        var data12 = document.createElement('td');//rest of data raw2
        headerRawEL.appendChild(data12);
        data12.textContent = cookiesPerHour[t];
    }

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

    function createFooterRaw() {
        var footerRawEL = document.createElement('tr');///raw 7
        tableElement.appendChild(footerRawEL);
        var data6 = document.createElement('th');// raw  7 data(header)
        footerRawEL.appendChild(data6);
        data6.textContent = 'total ';

        for (var t = 0; t < workingHours.length; t++) {
            var data62 = document.createElement('td');//rest of data raw7
            headerRawEL.appendChild(data62);
            data62.textContent = cookiesPerHour[t];
        }
    }
}
// vales of factory construction   
new Shop('Seattle', 23, 65, 6.3);
new Shop('tokyo', 3, 24, 1.2);
new Shop('Dubai', 11, 38, 3.7);
new Shop('Paris', 20, 38, 2.3);
new Shop('Lima', 2, 16, 4.6);

    (function rendertable() {
        createHeaderRaw();
        createFooterRaw();
        for (var i = 0; i < SellingAreas.length; i++) {
            SellingAreas[i].render();

        }
    })();




