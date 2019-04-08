var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://launchlibrary.net/1.3/launch/next/5';

//data laden
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () { //als request geladen is doe dan dit
    //var superHeroes = request.response;
    console.log("file data:", request.response);
    //populateHeader(movies);
    showLaunch(request.response);
}


function showLaunch(jsonObj) {

    console.log("functie: showLaunch");
    //maakt elementen aan voor JSON data

    var rakketen = jsonObj;
    var launches = rakketen['launches'];

    console.log(launches[1]['windowstart']);

    console.log("Hoeveel rakketen: ", launches.length);
    for (var i = 0; i < launches.length; i++) {
        console.log(launches[i].windowstart);
        console.log(launches[i].name);


        var rocketName = launches[i]['rocket'].name;
        var rocketTime = launches[i].windowstart;
        var rocketLocation = launches[i]['location'].name;


        var article = document.createElement('article');
        var naam = document.createElement('h2');
        var tijd = document.createElement('p');
        var locatie = document.createElement('p');

        console.log("locatie is ", locatie);

        naam.textContent = 'Rocket: ' + rocketName;
        tijd.textContent = 'Launch time: ' + rocketTime;
        locatie.textContent = 'Launch location: ' + rocketLocation;

        article.appendChild(naam);
        article.appendChild(tijd);
        article.appendChild(locatie);
        section.appendChild(article);

    }
}
