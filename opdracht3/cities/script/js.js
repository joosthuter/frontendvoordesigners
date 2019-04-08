var amsBtn1 = document.getElementById('AMS1'),
    sfBtn1 = document.getElementById('SF1');

var amsBtn2 = document.getElementById('AMS2'),
    sfBtn2 = document.getElementById('SF2');


var section = document.getElementById('citySec');

var sanFran = '5391959';
var amsterdam = '2759794';
var bejing = '1816670';



function cityOne(city) {

    console.log("joop");

    var requestURL = 'https://api.teleport.org/api/cities/geonameid:' + city + '/';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () { //als request geladen is doe dan dit
        console.log("file data amsterdam:", request.response);
        showCity(request.response);
    }
}

function cityTwo(city) {


    var requestURL = 'https://api.teleport.org/api/cities/geonameid:' + city + '/';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () { //als request geladen is doe dan dit

        console.log("file data san fran:", request.response);
        showCity(request.response);
    }
}

function showCity(jsonObj) {

    //maakt elementen aan voor JSON data

    var cityData = jsonObj;

    var cityName = cityData['name'];
    var cityPopulation = cityData['population'];

    console.log(cityPopulation);

    var article = document.createElement('article');
    var domName = document.createElement('h2');
    var divPopulation = document.createElement('div');
    var domPopulation = document.createElement('p');

    domName.textContent = cityName;
    domPopulation.innerHTML = '<span>Population: </span>' + cityPopulation + ' people';
    divPopulation.style.width = cityPopulation / 10000 + "px";
    divPopulation.style.height = cityPopulation / 10000 + "px";


    article.appendChild(domName);
    article.appendChild(domPopulation);
    article.appendChild(divPopulation);

    section.appendChild(article);
}

//sfBtn1.addEventListener('click', cityOne(sanFran));
//amsBtn1.addEventListener('click', cityOne(amsterdam));
cityOne(amsterdam);
cityTwo(sanFran);
