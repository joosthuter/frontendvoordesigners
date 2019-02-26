const white = document.querySelectorAll(".white");
const green = document.querySelectorAll(".green");
const blue = document.querySelectorAll(".blue");
const pink = document.querySelectorAll(".pink");
const red = document.querySelectorAll(".red");
const orange = document.querySelectorAll(".orange");
const yellow = document.querySelectorAll(".yellow");

var btnWhite = document.getElementById("white");
var btnGreen = document.getElementById("green");
var btnBlue = document.getElementById("blue");
var btnPink = document.getElementById("pink");
var btnRed = document.getElementById("red");
var btnOrange = document.getElementById("orange");
var btnYellow = document.getElementById("yellow");

var btnDelete = document.getElementById("deleteFilter");

var click = 0;

function onlyWhite() {
    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        whiteImages.style.display = "block";
    }
    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        greenImages.style.display = "none";
    }
    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        blueImages.style.display = "none";
    }
    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        pinkImages.style.display = "none";
    }
    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        redImages.style.display = "none";
    }
    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        orangeImages.style.display = "none";
    }

    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        yellowImages.style.display = "none";
    }
    btnDelete.classList.remove("deleteHide");
    btnDelete.classList.add("deleteShow");
}

function onlyGreen() {
    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        /*if (click === 0) {
            whiteImages.style.display = "block";
            click = 1;
        } else {*/
        whiteImages.style.display = "none";
        /*click = 0;
        }*/
    }

    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        greenImages.style.display = "block";
    }

    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        blueImages.style.display = "none";
    }
    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        pinkImages.style.display = "none";
    }
    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        redImages.style.display = "none";
    }
    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        orangeImages.style.display = "none";
    }

    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        yellowImages.style.display = "none";
    }
}

function onlyBlue() {
    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        blueImages.style.display = "block";
    }

    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        whiteImages.style.display = "none";
    }
    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        greenImages.style.display = "none";
    }

    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        pinkImages.style.display = "none";
    }
    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        redImages.style.display = "none";
    }
    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        orangeImages.style.display = "none";
    }

    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        yellowImages.style.display = "none";
    }
}

function onlyPink() {
    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        pinkImages.style.display = "block";
    }
    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        whiteImages.style.display = "none";
    }
    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        greenImages.style.display = "none";
    }
    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        blueImages.style.display = "none";
    }

    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        redImages.style.display = "none";
    }
    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        orangeImages.style.display = "none";
    }

    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        yellowImages.style.display = "none";
    }
}

function onlyRed() {
    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        redImages.style.display = "block";
    }
    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        whiteImages.style.display = "none";
    }
    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        greenImages.style.display = "none";
    }
    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        blueImages.style.display = "none";
    }
    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        pinkImages.style.display = "none";
    }

    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        orangeImages.style.display = "none";
    }

    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        yellowImages.style.display = "none";
    }
}

function onlyOrange() {
    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        orangeImages.style.display = "block";
    }

    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        whiteImages.style.display = "none";
    }
    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        greenImages.style.display = "none";
    }
    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        blueImages.style.display = "none";
    }
    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        pinkImages.style.display = "none";
    }
    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        redImages.style.display = "none";
    }
    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        yellowImages.style.display = "none";
    }
}

function onlyYellow() {
    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        yellowImages.style.display = "block";
    }
    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        whiteImages.style.display = "none";
    }
    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        greenImages.style.display = "none";
    }
    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        blueImages.style.display = "none";
    }
    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        pinkImages.style.display = "none";
    }
    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        redImages.style.display = "none";
    }
    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        orangeImages.style.display = "none";
    }
}

function remove() {
    white.style.display = "block";
    green.style.display = "block";
    blue.style.display = "block";
    pink.style.display = "block";
    red.style.display = "block";
    orange.style.display = "block";
    yellow.style.display = "block";
}


btnWhite.addEventListener("click", onlyWhite);
btnGreen.addEventListener("click", onlyGreen);
btnBlue.addEventListener("click", onlyBlue);
btnPink.addEventListener("click", onlyPink);
btnRed.addEventListener("click", onlyRed);
btnOrange.addEventListener("click", onlyOrange);
btnYellow.addEventListener("click", onlyYellow);

btnDelete.addEventListener("click", remove);
