var verzend = document.getElementById('verzend');

var art1 = document.getElementById('art1');
var art2 = document.getElementById('art2');
var name1 = document.getElementById('name1');
var name2 = document.getElementById('name2');

var search1 = document.getElementById("search");
var search2 = document.getElementById("search2");

var searchArray = [search1, search2];

var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');

var divArray = [div1, div2];

var popu1 = document.getElementById('popu1');
var popu2 = document.getElementById('popu2');

var popuArray = [popu1, popu2];

var country1 = document.getElementById('location1');
var country2 = document.getElementById('location2');

var countryArray = [country1, country2];

var section = document.getElementById('citySec');

var sanFran = '5391959';
var amsterdam = '2759794';

//var biem = 0;

var searchValue;
var searchValue2;
var cityValue;

var cityPopulation;

function valueAble() {
    searchValue = document.getElementById("search").value;

    var requestURL = 'https://api.teleport.org/api/cities/?search=' + searchValue + '&limit=1';

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();


    request.onload = function () { //als request geladen is doe dan dit
        console.log("file data search: ", request.response);

        var json = request.response;
        var searchURL = json['_embedded']['city:search-results'][0]['_links']['city:item'].href;
        console.log('href = ' + searchURL);
        citySoul(searchURL, 0);
    }
}

function valueAble2() {
    searchValue2 = document.getElementById("search2").value;

    var requestURL = 'https://api.teleport.org/api/cities/?search=' + searchValue2 + '&limit=1';

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () { //als request geladen is doe dan dit
        console.log("file data search: ", request.response);

        var json = request.response;
        var searchURL = json['_embedded']['city:search-results'][0]['_links']['city:item'].href;
        console.log('href = ' + searchURL);
        citySoul(searchURL, 1)
    }
}

function citySoul(link, y) {

    console.log("joop");

    var requestURL = link;

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () { //als request geladen is doe dan dit
        console.log("file data die je hebt opgezocht: ", request.response);
        showCity1(request.response, y);
    }
}

function cityFunk(city, funk, rock) {

    var nul = 0;

    if (rock === 2) {
        nul = 1;
    }

    console.log("joop");

    var requestURL = 'https://api.teleport.org/api/cities/geonameid:' + city + '/';

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () { //als request geladen is doe dan dit
        console.log("file data amsterdam:", request.response);
        funk(request.response, nul);
    }
}

function showCity1(jsonObj, x) {

    var cityData = jsonObj;

    var country = cityData['_links']['city:country'].name;

    console.log("land: " + country);
    var cityName = cityData['name'];
    cityPopulation = cityData['population'];

    console.log("yeet: " + cityPopulation);

    //document.getElementById("search").value = cityName;
    searchArray[x].value = cityName;
    countryArray[x].innerHTML = '<span>Country: </span>' + country;
    popuArray[x].innerHTML = '<span>Population: </span>' + cityPopulation + ' people';


    divArray[x].style.width = cityPopulation / 35000 + "px";
    divArray[x].style.height = cityPopulation / 35000 + "px";


}


cityFunk(amsterdam, showCity1);
cityFunk(sanFran, showCity1, 2);

function logIt() {
    console.log('werkt de knop?')
}

window.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        valueAble();
        valueAble2();
    }
});
