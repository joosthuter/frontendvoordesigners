# frontend voor designers

In het vak Frontend voor Designers leer je hoe je met HTML en CSS, en een beetje Javascript, snel en eenvoudig prototypes kan maken om je ontwerp ideeën te testen in een browser. We gaan animeren, responsive layouts uitproberen en interactie coderen ...

Dit is de [online url](https://koopreynders.github.io/frontendvoordesigners/) met de opdrachten om te kunnen bekijken en testen in een browser.

Het vak bestaat uit 3 opdrachten:

[opdracht 1](https://joosthuter.github.io/frontendvoordesigners/opdracht1/v4/)
[opdracht 2](https://joosthuter.github.io/frontendvoordesigners/opdracht2/v2/)
[opdracht 3](https://joosthuter.github.io/frontendvoordesigners/opdracht3/cities3/)


## Hoe Werkt Opdracht 3

### Data ophalen

De laatste opdracht van frontend 4 designers had als doel om een REST API te gebruiken om data op te halen en weer te geven in een browser. Ik wilde graag iets interactiefs doen met die data. Dus had ik een JSON API gevonden die van alles kan weergeven over verschillende steden in de wereld, namelijk: [teleport.org](https://developers.teleport.org/api/) 

De API van teleport werkt als volgt:

Om de data van een stad op te halen moet je een url ophalen, in dit geval: "https://api.teleport.org/api/cities/geonameid:5391959/". Zoals je misschien ziet staat er geen naam van de stad in de url maar een geonameid. Elke stad heeft een geonameid, dit is een nummer die gekoppeld is aan die stad. Voor San Francisco is dat bijvoorbeeld: 5391959', en voor Amsterdam: '2759794'. 

Al gauw bedacht ik dat als ik een variabele maak van die geonameid kan ik meerdere data van verschillende steden ophalen met dezelfde functie. Dat ziet er als volgt uit:

var Amsterdam = '2759794';

var requestURL = "https://api.teleport.org/api/cities/geonameid:" + Amsterdam + "/";

### Data visualiseren

Wat ik vervolgens deed was de hoeveelheid inwoners ophalen uit de database van die stad en deze wilde ik gaan visualiseren. Dus maakte ik een bolletje van een 'div' wiens grootte werd bepaald door de hoeveelheid inwoners, dit deed ik als volgt:

div.style.width = cityPopulation / 35000 + "px";
div.style.height = cityPopulation / 35000 + "px";

### Steden zoeken

Ik kwam er later achter dat teleport.org ook een api heeft waarin je steden kan zoeken. Dit is top want dan kan de gebruiker elke stad opzoeken die hij zelf wilt. 

Ik heb dus twee 'input' velden gemaakt. Standaard staat hier Amsterdam en San Francisco in, maar de gebruiken kan die waarde zelf aanpassen. In de functie 'valueAble1' en 'valueAble2' haal ik de waarde op van beide input velden. Vervolgens plaats ik wat de gebruiker heeft ingevuld in de url (Ik hoef bij deze url geen geonameid meer te gebruiken), dat ziet er als volgt uit: 

var requestURL = 'https://api.teleport.org/api/cities/?search=' + searchValue1 + '&limit=1';

de rest werkt hetzelfde als eerder, maar nu kan je de data ophalen van alle verschillende steden.







