var amsBtn1 = document.getElementById('AMS1'),
    sfBtn1 = document.getElementById('SF1'),
    ctBtn1 = document.getElementById('CT1'),
    nyBtn1 = document.getElementById('NY1'),
    ldnBtn1 = document.getElementById('LDN1'),
    tkyBtn1 = document.getElementById('TKY1'),
    rioBtn1 = document.getElementById('RDJ1'),
    ctBtn1 = document.getElementById('CT1');;

var amsBtn2 = document.getElementById('AMS2'),
    sfBtn2 = document.getElementById('SF2'),
    ctBtn2 = document.getElementById('CT2'),
    nyBtn2 = document.getElementById('NY2'),
    ldnBtn2 = document.getElementById('LDN2'),
    tkyBtn2 = document.getElementById('TKY2'),
    rioBtn2 = document.getElementById('RDJ2'),
    ctBtn2 = document.getElementById('CT2');

var art1 = document.getElementById('art1');
var art2 = document.getElementById('art2');
var name1 = document.getElementById('name1');
var name2 = document.getElementById('name2');
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var popu1 = document.getElementById('popu1');
var popu2 = document.getElementById('popu2');

var section = document.getElementById('citySec');

var sanFran = '5391959';
var amsterdam = '2759794';
var newYork = '5128581';
var london = '2643743';
var tokyo = '1850147';
var rio = '3451190';
var capeTown = '3369157';

//var biem = 0;



function cityFunk(city, funk) {

    console.log("joop");

    var requestURL = 'https://api.teleport.org/api/cities/geonameid:' + city + '/';

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () { //als request geladen is doe dan dit
        console.log("file data amsterdam:", request.response);
        funk(request.response);
    }
}


function showCity1(jsonObj) {

    //maakt elementen aan voor JSON data
    //    if (biem === 0) {
    //        biem = 1;
    //    } else if (biem === 1) {
    //        biem = 2;
    //    }


    var cityData = jsonObj;

    var cityName = cityData['name'];
    var cityPopulation = cityData['population'];

    console.log(cityPopulation);

    //    var domName = document.createElement('h2');
    //    var divPopulation = document.createElement('div');
    //    var domPopulation = document.createElement('p');

    name1.textContent = cityName;
    popu1.innerHTML = '<span>Population: </span>' + cityPopulation + ' people';
    div1.style.width = cityPopulation / 50000 + "px";
    div1.style.height = cityPopulation / 50000 + "px";

    //    if (biem === 1) {
    //        art1.appendChild(domName);
    //        art1.appendChild(domPopulation);
    //        art1.appendChild(divPopulation);
    //    }
    //
    //    if (biem === 2) {
    //        art2.appendChild(domName);
    //        art2.appendChild(domPopulation);
    //        art2.appendChild(divPopulation);
    //    }


    //    if (biem === 2) {
    //        biem = 0;
    //    }
}

function showCity2(jsonObj) {

    var cityData = jsonObj;

    var cityName = cityData['name'];
    var cityPopulation = cityData['population'];

    console.log(cityPopulation);

    name2.textContent = cityName;
    popu2.innerHTML = '<span>Population: </span>' + cityPopulation + ' people';
    div2.style.width = cityPopulation / 50000 + "px";
    div2.style.height = cityPopulation / 50000 + "px";

}

function logIt() {
    console.log('werkt de knop?')
}

sfBtn1.addEventListener('click', function () {
    cityFunk(sanFran, showCity1);

});
amsBtn1.addEventListener('click', function () {
    cityFunk(amsterdam, showCity1);

});
nyBtn1.addEventListener('click', function () {
    cityFunk(newYork, showCity1);
});
ldnBtn1.addEventListener('click', function () {
    cityFunk(london, showCity1);
});
tkyBtn1.addEventListener('click', function () {
    cityFunk(tokyo, showCity1);
});
rioBtn1.addEventListener('click', function () {
    cityFunk(rio, showCity1);
});
ctBtn1.addEventListener('click', function () {
    cityFunk(capeTown, showCity1);
});


sfBtn2.addEventListener('click', function () {
    cityFunk(sanFran, showCity2);
});

amsBtn2.addEventListener('click', function () {
    cityFunk(amsterdam, showCity2);
});
nyBtn2.addEventListener('click', function () {
    cityFunk(newYork, showCity2);
});
ldnBtn2.addEventListener('click', function () {
    cityFunk(london, showCity2);
});
tkyBtn2.addEventListener('click', function () {
    cityFunk(tokyo, showCity2);
});
rioBtn2.addEventListener('click', function () {
    cityFunk(rio, showCity2);
});
ctBtn2.addEventListener('click', function () {
    cityFunk(capeTown, showCity2);
});

cityFunk(amsterdam, showCity1);
cityFunk(newYork, showCity2);
