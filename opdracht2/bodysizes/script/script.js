var celestialBody = document.getElementById("celestial");
var marsBtn = document.getElementById("mars-btn");
var mercuryBtn = document.getElementById("mercury-btn");
var venusBtn = document.getElementById("venus-btn");
var earthBtn = document.getElementById("earth-btn");
var moonBtn = document.getElementById("moon-btn");
var jupiterBtn = document.getElementById("jupiter-btn");
var saturnBtn = document.getElementById("saturn-btn");
var uranusBtn = document.getElementById("uranus-btn");
var neptuneBtn = document.getElementById("neptune-btn");

var nav = document.getElementById("btnContainer");
var visibleBtn = document.getElementById("visibility");

var planetInfo = document.getElementById("info");
var planetBar = document.getElementById("bar");

var visible = 1;

function planetSwitch(planeet, hoogte, klas, top) {

    var planetName = document.getElementById("name");
    var planetForm = document.getElementById("form");
    var planetDiameter = document.getElementById("dia");
    var planetDistance = document.getElementById("dis");

    if (klas === "moon") {
        planetName.innerHTML = "Moon";
        planetForm.innerHTML = "Moon of Earth";
        planetDiameter.innerHTML = "Diameter: 3,474.2 km";
        planetDistance.innerHTML = "Avg. distance: 384,400 km";
    }

    if (klas === "mercury") {
        planetName.innerHTML = "Mercury";
        planetForm.innerHTML = "Rocky Planet";
        planetDiameter.innerHTML = "Diameter: 4,879.4 km";
        planetDistance.innerHTML = "Avg. distance: 77.2 million km";
    }

    if (klas === "venus") {
        planetName.innerHTML = "Venus";
        planetForm.innerHTML = "Rocky Planet";
        planetDiameter.innerHTML = "Diameter: 12,104 km";
        planetDistance.innerHTML = "Avg. distance: 261 million km";
    }

    if (klas === "earth") {
        planetName.innerHTML = "Earth";
        planetForm.innerHTML = "Rocky Planet";
        planetDiameter.innerHTML = "Diameter: 12,742 km";
        planetDistance.innerHTML = "Avg. distance: 0 km";
    }

    if (klas === "mars") {
        planetName.innerHTML = "Mars";
        planetForm.innerHTML = "Rocky Planet";
        planetDiameter.innerHTML = "Diameter: 6,779 km";
        planetDistance.innerHTML = "Avg. distance: 54.6 million km";
    }

    if (klas === "jupiter") {
        planetName.innerHTML = "Jupiter";
        planetForm.innerHTML = "Gas Giant";
        planetDiameter.innerHTML = "Diameter: 139,820 km";
        planetDistance.innerHTML = "Avg. distance: 588 million km";
    }

    if (klas === "saturn") {
        planetName.innerHTML = "Saturn";
        planetForm.innerHTML = "Gas Giant";
        planetDiameter.innerHTML = "Diameter: 116,460 km";
        planetDistance.innerHTML = "Avg. distance: 1.2 billion km";
    }

    if (klas === "uranus") {
        planetName.innerHTML = "Uranus";
        planetForm.innerHTML = "Gas Giant";
        planetDiameter.innerHTML = "Diameter: 50,724 km";
        planetDistance.innerHTML = "Avg. distance: 2.6 billion km";
    }

    if (klas === "neptune") {
        planetName.innerHTML = "Neptune";
        planetForm.innerHTML = "Gas Giant";
        planetDiameter.innerHTML = "Diameter: 49,224 km";
        planetDistance.innerHTML = "Avg. distance: 4.3 billion km";
    }

    $("#celestial").animate({
        top: "50em"
    }, 1000);
    $("#celestial").animate({
        top: top
    }, 1000).delay(1000);
    setTimeout(function () {
        celestialBody.src = planeet;
        celestialBody.style.height = hoogte;
        $("#celestial").removeClass();
        celestialBody.classList.add(klas);
    }, 1200);
};

function visibleNav() {
    if (visible === 1) {
        visibleBtn.classList.remove("visible");
        visibleBtn.classList.add("notvisible");
        nav.style.opacity = "0";
        visible = 0;
    } else if (visible === 0) {
        visibleBtn.classList.remove("notvisible");
        visibleBtn.classList.add("visible");
        nav.style.opacity = "100";
        visible = 1;
    }
}

function showInformation() {
    planetInfo.style.opacity = "100";
    planetBar.style.width = "100%";
}

function hideInformation() {
    planetInfo.style.opacity = "0";
    planetBar.style.width = "0%";
}

moonBtn.addEventListener("click", function () {
    planetSwitch("../images/moon.png", "20px", "moon", "10em")
});
mercuryBtn.addEventListener("click", function () {
    planetSwitch("../images/mercury.png", "28px", "mercury", "10em")
});
venusBtn.addEventListener("click", function () {
    planetSwitch("../images/venus.png", "70px", "venus", "9em")
});
marsBtn.addEventListener("click", function () {
    planetSwitch("../images/mars.png", "39px", "mars", "10em")
});
jupiterBtn.addEventListener("click", function () {
    planetSwitch("../images/jupiter.png", "804px", "jupiter", "7em")
});
saturnBtn.addEventListener("click", function () {
    planetSwitch("../images/saturn.png", "670px", "saturn", "7em")
});
neptuneBtn.addEventListener("click", function () {
    planetSwitch("../images/neptune.png", "283px", "neptune", "7em")
});
earthBtn.addEventListener("click", function () {
    planetSwitch("../images/earth.png", "73px", "earth", "9em")
});
uranusBtn.addEventListener("click", function () {
    planetSwitch("../images/uranus.png", "292px", "uranus", "7em")
});

visibleBtn.addEventListener("click", visibleNav);

celestialBody.addEventListener("mouseover", showInformation);
celestialBody.addEventListener("mouseout", hideInformation);
