var body = document.querySelector("body");
var range = document.querySelector("#range");
var color = document.querySelector("#colorPicker");
var settings = document.querySelector("nav");
var main = document.querySelector("main");
var text = document.querySelectorAll(".text");
var poemPlace = document.getElementById("poem");
var fontDisplay = document.getElementById("poemFont");
var fontSize = document.getElementById("fontSize");
var regular = document.getElementById("regular");
var bold = document.getElementById("bold");
var textSetting = document.getElementById("textSet");
var btnTheme = document.getElementById("themeBtn");
var colorVal = document.getElementById("colorValue");
var diceSect = document.getElementById("diceSection");
var sansSect = document.getElementById("sansSection");
var serifSect = document.getElementById("serifSection");
var diceText = document.getElementById("diceText");
var diceFont = document.getElementById("diceFont");
var settingsBtn = document.getElementById("setting");

var poems = ["The calm, Cool face of the river, Asked me for a kiss.", "The earth shakes, just enough, to remind us.", "The bottoms of my shoes, are clean, From walking in the rain"];
var fonts = ["Arial", "Helvetica", "Roboto", "Times", "Tahoma", "Verdana", "Georgia", "Palatino", "Lucida Grande", "Merriweather", "Lora"];
var randomPoem = Math.floor(Math.random() * 3);
var randomFont = Math.floor(Math.random() * 11);

var joop = 0;
var stink = 1;

/*function setThings() {
    if (stink === 1) {
        settings.classList.remove("hide");
        settings.classList.add("showFlex");
        settingsBtn.innerHTML = "<em>-</em> settings";
        stink = 2;
    } else if (stink === 2) {
        settings.classList.remove("showFlex");
        settings.classList.add("hide");
        settingsBtn.innerHTML = "<em>+</em> settings";
        stink = 1;
    }
}*/

function fontify() {
    for (var i = 0; i < text.length; i++) {
        var allText = text[i];
        var pt = range.value * 12;
        var ptFixed = pt.toFixed();
        console.log("yeet");
        allText.style["font-size"] = this.value + "em";
        fontSize.innerHTML = ptFixed + " pt";
    }
}

function colorfy() {
    for (var i = 0; i < text.length; i++) {
        var allText = text[i];
        allText.style["color"] = this.value;
        colorVal.innerHTML = color.value;
    }
}

function colorfyHex() {
    for (var i = 0; i < text.length; i++) {
        var allText = text[i];
        allText.style["color"] = this.value;
        color.value = this.value;
    }
}

function poemify() {
    var font = fonts[randomFont];
    poemPlace.innerHTML = poems[randomPoem];
    fontDisplay.innerHTML = "font: " + font;
    poemPlace.style["font-family"] = font;
}

function makeReg() {
    for (var i = 0; i < text.length; i++) {
        var allText = text[i];
        allText.style.fontWeight = "300";
        regular.classList.add("visiting");
        bold.classList.remove("visiting");
    }
}

function makeBold() {
    for (var i = 0; i < text.length; i++) {
        var allText = text[i];
        allText.style.fontWeight = "700";
        bold.classList.add("visiting");
        regular.classList.remove("visiting");
    }
}

function textify() {
    for (var i = 0; i < text.length; i++) {
        var allText = text[i];
        allText.innerHTML = textSetting.value;
    }
    console.log(textSetting.value);
}

function theme() {

    if (joop === 0) {
        btnTheme.src = "images/sun.png";
        joop = 1;
        main.classList.add("darktheme");
        body.classList.add("darktheme");
    } else if (joop === 1) {
        btnTheme.src = "images/full-moon.png";
        console.log("yeet");
        joop = 0;
        main.classList.remove("darktheme");
        body.classList.remove("darktheme");
    }

}

function dice(e) {
    if (e.keyCode === 68 && e.ctrlKey) {
        var font = fonts[Math.floor(Math.random() * 11)];
        diceSect.classList.remove("hide");
        diceSect.classList.add("show");
        sansSect.classList.add("hide");
        serifSect.classList.add("hide");
        sansSect.classList.remove("show");
        serifSect.classList.remove("show");
        diceText.style["font-family"] = font;
        diceFont.innerHTML = font;
    }
}


poemify();


color.addEventListener("input", colorfy);
colorVal.addEventListener("input", colorfyHex);
range.addEventListener("input", fontify);
regular.addEventListener("click", makeReg);
bold.addEventListener("click", makeBold);
textSetting.addEventListener("input", textify);
btnTheme.addEventListener("click", theme);

window.addEventListener("keyup", dice);

/*window.addEventListener("keyup", function (e) {
    if (e.keyCode === 68 && e.ctrlKey) {
        var font = fonts[Math.floor(Math.random() * 11)];
        diceSect.classList.remove("hide");
        diceSect.classList.add("show");
        sansSect.classList.add("hide");
        serifSect.classList.add("hide");
        sansSect.classList.remove("show");
        serifSect.classList.remove("show");
        diceText.style["font-family"] = font;
        diceFont.innerHTML = font;
    }
});*/
window.addEventListener("keyup", function (e) {
    if (e.keyCode === 8) {

        diceSect.classList.remove("show");
        diceSect.classList.add("hide");
        sansSect.classList.remove("hide");
        serifSect.classList.remove("hide");
        sansSect.classList.add("show");
        serifSect.classList.add("show");


    }
});
window.addEventListener("keyup", function (e) {
    if (e.keyCode === 66 && e.ctrlKey) {
        makeBold();
    }
});
window.addEventListener("keyup", function (e) {
    if (e.keyCode === 82 && e.ctrlKey) {
        makeReg();
    }
});
window.addEventListener("keyup", function (e) {
    if (e.keyCode === 84 && e.ctrlKey) {
        theme();
    }
});
