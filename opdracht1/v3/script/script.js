var main = document.querySelector("main");
var header = document.querySelector("header");
var body = document.querySelector("body");

var white = document.querySelectorAll(".white");
var green = document.querySelectorAll(".green");
var blue = document.querySelectorAll(".blue");
var pink = document.querySelectorAll(".pink");
var red = document.querySelectorAll(".red");
var orange = document.querySelectorAll(".orange");
var yellow = document.querySelectorAll(".yellow");



var btnWhite = document.getElementById("white");
var btnGreen = document.getElementById("green");
var btnBlue = document.getElementById("blue");
var btnPink = document.getElementById("pink");
var btnRed = document.getElementById("red");
var btnOrange = document.getElementById("orange");
var btnYellow = document.getElementById("yellow");

var btnTheme = document.getElementById("themeBtn");

var cW = 0,
    cG = 0,
    cB = 0,
    cP = 0,
    cR = 0,
    cO = 0,
    cY = 0;

var choiceDisplay = document.getElementById("nice");
var goodChoice = ["Nice choice!", "Wonderful!", "You've got a great taste", "in-cre-de-ble", "amazing!", "impressive!"];
var random = Math.floor(Math.random() * 7);

var joop = 0;

function theme() {

    if (joop === 0) {
        btnTheme.src = "images/sun.png";
        joop = 1;
        main.classList.add("darktheme");
        header.classList.add("darktheme");
        body.classList.add("body");
    } else if (joop === 1) {
        btnTheme.src = "images/full-moon.png";
        console.log("yeet");
        joop = 0;
        main.classList.remove("darktheme");
        header.classList.remove("darktheme");
        body.classList.remove("body");
    }

}

function wow() {
    console.log("random: " + random);
    choiceDisplay.innerHTML = goodChoice[Math.floor(Math.random() * 6)];
}

var colorDisplay = document.getElementById("color");
var colorChoice = ["Gracious Green", "Beautiful Blue", "Pretty Pink", "Raging Red", "Organic Orange", "Yeet Yellow", "Washing White"];
var colorNumber;

var click = 0;

function onlyWhite() {

    wow();
    var color = 6;


    if ((cG === 1) || (cB === 1) || (cP === 1) || (cR === 1) || (cO === 1) || (cY === 1)) {
        click = 0;
        cG = 0;
        cB = 0;
        cP = 0;
        cR = 0;
        cO = 0;
        cY = 0;
    }
    cW = 1;

    console.log("click = " + click);
    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        whiteImages.style.display = "block";
    }
    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        if (click === 0) {
            greenImages.style.display = "none";
        } else {
            greenImages.style.display = "block";

        }
    }
    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        if (click === 0) {
            blueImages.style.display = "none";
        } else {
            blueImages.style.display = "block";
        }
    }
    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        if (click === 0) {
            pinkImages.style.display = "none";
        } else {
            pinkImages.style.display = "block";
        }
    }
    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        if (click === 0) {
            redImages.style.display = "none";
        } else {
            redImages.style.display = "block";
        }
    }
    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        if (click === 0) {
            orangeImages.style.display = "none";
        } else {
            orangeImages.style.display = "block";
        }
    }

    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        if (click === 0) {
            yellowImages.style.display = "none";
        } else {
            yellowImages.style.display = "block";
        }
    }

    if (click === 0) {
        click = 1;
    } else {
        click = 0;
    }

    if (click === 1) {
        btnWhite.classList.add("visiting");

        btnBlue.classList.remove("visiting");
        btnPink.classList.remove("visiting");
        btnRed.classList.remove("visiting");
        btnOrange.classList.remove("visiting");
        btnYellow.classList.remove("visiting");
        btnGreen.classList.remove("visiting");

        colorDisplay.innerHTML = colorChoice[color];
        colorDisplay.style.color = "#d6d6d6";

    } else {
        btnWhite.classList.remove("visiting");
        colorDisplay.innerHTML = "discover the colors of the world";
        colorDisplay.style.color = "#848484";

    }


    console.log("nu is click = " + click);


}

function onlyGreen() {

    var color = 0;
    wow();

    if ((cW === 1) || (cB === 1) || (cP === 1) || (cR === 1) || (cO === 1) || (cY === 1)) {
        click = 0;
        cR = 0;
        cB = 0;
        cP = 0;
        cO = 0;
        cY = 0;
        cW = 0;
    }

    cG = 1;
    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        if (click === 0) {
            whiteImages.style.display = "none";

        } else {
            whiteImages.style.display = "block";

        }
    }

    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        greenImages.style.display = "block";
    }

    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        if (click === 0) {
            blueImages.style.display = "none";
        } else {
            blueImages.style.display = "block";
        }
    }
    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        if (click === 0) {
            pinkImages.style.display = "none";
        } else {
            pinkImages.style.display = "block";
        }
    }
    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        if (click === 0) {
            redImages.style.display = "none";
        } else {
            redImages.style.display = "block";
        }
    }
    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        if (click === 0) {
            orangeImages.style.display = "none";
        } else {
            orangeImages.style.display = "block";
        }
    }

    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        if (click === 0) {
            yellowImages.style.display = "none";
        } else {
            yellowImages.style.display = "block";
        }
    }

    if (click === 0) {
        click = 1;
    } else {
        click = 0;
    }

    if (click === 1) {
        btnGreen.classList.add("visiting");

        btnBlue.classList.remove("visiting");
        btnPink.classList.remove("visiting");
        btnRed.classList.remove("visiting");
        btnOrange.classList.remove("visiting");
        btnYellow.classList.remove("visiting");
        btnWhite.classList.remove("visiting");
        colorDisplay.innerHTML = colorChoice[color];
        colorDisplay.style.color = "#27ae60";

    } else {
        btnGreen.classList.remove("visiting");
        colorDisplay.innerHTML = "discover the colors of the world";
        colorDisplay.style.color = "#848484";

    }

    console.log(click);
}

function onlyBlue() {
    var color = 1;
    wow();

    if ((cW === 1) || (cG === 1) || (cP === 1) || (cR === 1) || (cO === 1) || (cY === 1)) {
        click = 0;
        cG = 0;
        cP = 0;
        cR = 0;
        cO = 0;
        cY = 0;
        cW = 0;
    }
    cB = 1;
    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        blueImages.style.display = "block";
    }

    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        if (click === 0) {
            whiteImages.style.display = "none";
        } else {
            whiteImages.style.display = "block";
        }

    }
    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        if (click === 0) {
            greenImages.style.display = "none";
        } else {
            greenImages.style.display = "block";
        }

    }

    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        if (click === 0) {
            pinkImages.style.display = "none";
        } else {
            pinkImages.style.display = "block";
        }
    }
    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        if (click === 0) {
            redImages.style.display = "none";
        } else {
            redImages.style.display = "block";
        }
    }
    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        if (click === 0) {
            orangeImages.style.display = "none";
        } else {
            orangeImages.style.display = "block";
        }
    }

    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        if (click === 0) {
            yellowImages.style.display = "none";
        } else {
            yellowImages.style.display = "block";
        }
    }
    console.log(click);
    if (click === 0) {
        click = 1;
    } else {
        click = 0;
    }

    if (click === 1) {
        btnBlue.classList.add("visiting");

        btnGreen.classList.remove("visiting");
        btnPink.classList.remove("visiting");
        btnRed.classList.remove("visiting");
        btnOrange.classList.remove("visiting");
        btnYellow.classList.remove("visiting");
        btnWhite.classList.remove("visiting");
        colorDisplay.innerHTML = colorChoice[color];
        colorDisplay.style.color = "#3498db";
    } else {
        btnBlue.classList.remove("visiting");
        colorDisplay.innerHTML = "discover the colors of the world";
        colorDisplay.style.color = "#848484";
    }

    console.log(click);
}

function onlyPink() {
    var color = 2;
    wow();


    if ((cW === 1) || (cG === 1) || (cB === 1) || (cR === 1) || (cO === 1) || (cY === 1)) {
        click = 0;
        cG = 0;
        cB = 0;
        cR = 0;
        cO = 0;
        cY = 0;
        cW = 0;
    }

    cP = 1;
    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        pinkImages.style.display = "block";
    }
    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        if (click === 0) {
            whiteImages.style.display = "none";
        } else {
            whiteImages.style.display = "block";
        }
    }
    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        if (click === 0) {
            greenImages.style.display = "none";
        } else {
            greenImages.style.display = "block";
        }
    }
    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        if (click === 0) {
            blueImages.style.display = "none";
        } else {
            blueImages.style.display = "block";
        }
    }

    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        if (click === 0) {
            redImages.style.display = "none";
        } else {
            redImages.style.display = "block";
        }

    }
    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        if (click === 0) {
            orangeImages.style.display = "none";
        } else {
            orangeImages.style.display = "block";
        }

    }

    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        if (click === 0) {
            yellowImages.style.display = "none";
        } else {
            yellowImages.style.display = "block";
        }

    }
    if (click === 0) {
        click = 1;
    } else {
        click = 0;
    }

    if (click === 1) {
        btnPink.classList.add("visiting");

        btnBlue.classList.remove("visiting");
        btnGreen.classList.remove("visiting");
        btnRed.classList.remove("visiting");
        btnOrange.classList.remove("visiting");
        btnYellow.classList.remove("visiting");
        btnWhite.classList.remove("visiting");
        colorDisplay.innerHTML = colorChoice[color];
        colorDisplay.style.color = "#fd79a8";
    } else {
        btnPink.classList.remove("visiting");
        colorDisplay.innerHTML = "discover the colors of the world";
        colorDisplay.style.color = "#848484";
    }
}

function onlyRed() {
    var color = 3;
    wow();

    if ((cW === 1) || (cG === 1) || (cB === 1) || (cP === 1) || (cO === 1) || (cY === 1)) {
        click = 0;
        cG = 0;
        cB = 0;
        cP = 0;
        cO = 0;
        cY = 0;
        cW = 0;
    }

    cR = 1;
    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        redImages.style.display = "block";
    }
    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        if (click === 0) {
            whiteImages.style.display = "none";
        } else {
            whiteImages.style.display = "block";
        }
    }
    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        if (click === 0) {
            greenImages.style.display = "none";
        } else {
            greenImages.style.display = "block";
        }

    }
    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        if (click === 0) {
            blueImages.style.display = "none";
        } else {
            blueImages.style.display = "block";
        }
    }
    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        if (click === 0) {
            pinkImages.style.display = "none";
        } else {
            pinkImages.style.display = "block";
        }
    }

    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        if (click === 0) {
            orangeImages.style.display = "none";
        } else {
            orangeImages.style.display = "block";
        }
    }

    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        if (click === 0) {
            yellowImages.style.display = "none";
        } else {
            yellowImages.style.display = "block";
        }
    }
    if (click === 0) {
        click = 1;
    } else {
        click = 0;
    }

    if (click === 1) {
        btnRed.classList.add("visiting");

        btnBlue.classList.remove("visiting");
        btnPink.classList.remove("visiting");
        btnGreen.classList.remove("visiting");
        btnOrange.classList.remove("visiting");
        btnYellow.classList.remove("visiting");
        btnWhite.classList.remove("visiting");

        colorDisplay.style.color = "#e74c3c";
        colorDisplay.innerHTML = colorChoice[color];
    } else {
        btnRed.classList.remove("visiting");
        colorDisplay.innerHTML = "discover the colors of the world";
        colorDisplay.style.color = "#848484";
    }

}

function onlyOrange() {
    var color = 4;
    wow();

    if ((cW === 1) || (cG === 1) || (cB === 1) || (cP === 1) || (cR === 1) || (cY === 1)) {
        click = 0;
        cG = 0;
        cB = 0;
        cP = 0;
        cR = 0;
        cY = 0;
        cW = 0;
    }

    cO = 1;
    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        orangeImages.style.display = "block";
    }

    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        if (click === 0) {
            whiteImages.style.display = "none";
        } else {
            whiteImages.style.display = "block";
        }
    }
    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        if (click === 0) {
            greenImages.style.display = "none";
        } else {
            greenImages.style.display = "block";
        }

    }
    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        if (click === 0) {
            blueImages.style.display = "none";
        } else {
            blueImages.style.display = "block";
        }
    }
    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        if (click === 0) {
            pinkImages.style.display = "none";
        } else {
            pinkImages.style.display = "block";
        }
    }
    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        if (click === 0) {
            redImages.style.display = "none";
        } else {
            redImages.style.display = "block";
        }
    }
    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        if (click === 0) {
            yellowImages.style.display = "none";
        } else {
            yellowImages.style.display = "block";
        }
    }
    if (click === 0) {
        click = 1;
    } else {
        click = 0;
    }

    if (click === 1) {
        btnOrange.classList.add("visiting");

        btnBlue.classList.remove("visiting");
        btnPink.classList.remove("visiting");
        btnRed.classList.remove("visiting");
        btnGreen.classList.remove("visiting");
        btnYellow.classList.remove("visiting");
        btnWhite.classList.remove("visiting");
        colorDisplay.innerHTML = colorChoice[color];
        colorDisplay.style.color = "#e67e22";
    } else {
        btnOrange.classList.remove("visiting");
        colorDisplay.innerHTML = "discover the colors of the world";
        colorDisplay.style.color = "#848484";
    }

}

function onlyYellow() {
    var color = 5;
    wow();




    if ((cW === 1) || (cG === 1) || (cB === 1) || (cP === 1) || (cR === 1) || (cO === 1)) {
        click = 0;
        cG = 0;
        cB = 0;
        cP = 0;
        cR = 0;
        cO = 0;
        cW = 0;
    }

    cY = 1;
    for (var i = 0; i < yellow.length; i++) {
        var yellowImages = yellow[i];
        yellowImages.style.display = "block";
    }
    for (var i = 0; i < white.length; i++) {
        var whiteImages = white[i];
        if (click === 0) {
            whiteImages.style.display = "none";
        } else {
            whiteImages.style.display = "block";
        }
    }
    for (var i = 0; i < green.length; i++) {
        var greenImages = green[i];
        if (click === 0) {
            greenImages.style.display = "none";
        } else {
            greenImages.style.display = "block";
        }

    }
    for (var i = 0; i < blue.length; i++) {
        var blueImages = blue[i];
        if (click === 0) {
            blueImages.style.display = "none";
        } else {
            blueImages.style.display = "block";
        }
    }
    for (var i = 0; i < pink.length; i++) {
        var pinkImages = pink[i];
        if (click === 0) {
            pinkImages.style.display = "none";
        } else {
            pinkImages.style.display = "block";
        }
    }
    for (var i = 0; i < red.length; i++) {
        var redImages = red[i];
        if (click === 0) {
            redImages.style.display = "none";
        } else {
            redImages.style.display = "block";
        }
    }
    for (var i = 0; i < orange.length; i++) {
        var orangeImages = orange[i];
        if (click === 0) {
            orangeImages.style.display = "none";
        } else {
            orangeImages.style.display = "block";
        }
    }
    if (click === 0) {
        click = 1;
    } else {
        click = 0;
    }
    if (click === 1) {
        btnYellow.classList.add("visiting");

        btnBlue.classList.remove("visiting");
        btnPink.classList.remove("visiting");
        btnRed.classList.remove("visiting");
        btnOrange.classList.remove("visiting");
        btnGreen.classList.remove("visiting");
        btnWhite.classList.remove("visiting");

        colorDisplay.innerHTML = colorChoice[color];
        colorDisplay.style.color = "#f1c40f";

    } else {
        btnYellow.classList.remove("visiting");
        colorDisplay.innerHTML = "discover the colors of the world";
        colorDisplay.style.color = "#848484";
    }
}

btnWhite.addEventListener("click", onlyWhite);
btnGreen.addEventListener("click", onlyGreen);
btnBlue.addEventListener("click", onlyBlue);
btnPink.addEventListener("click", onlyPink);
btnRed.addEventListener("click", onlyRed);
btnOrange.addEventListener("click", onlyOrange);
btnYellow.addEventListener("click", onlyYellow);

btnTheme.addEventListener("click", theme);
