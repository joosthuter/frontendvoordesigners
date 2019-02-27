var range = document.querySelector("#range");
var color = document.querySelector("#colorPicker");
var text = document.querySelectorAll(".text");
var poemPlace = document.getElementById("poem");
var fontDisplay = document.getElementById("poemFont");
var fontSize = document.getElementById("fontSize");
var regular = document.getElementById("regular");
var bold = document.getElementById("bold");
var textSetting = document.getElementById("textSet");

var poems = ["The calm, Cool face of the river, Asked me for a kiss.", "The earth shakes, just enough, to remind us.", "The bottoms of my shoes, are clean, From walking in the rain"];
var fonts = ["Arial", "Helvetica", "Roboto", "Times", "Tahoma"];
var randomPoem = Math.floor(Math.random() * 3);
var randomFont = Math.floor(Math.random() * 5);

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
        console.log("yeet");
        allText.style["color"] = this.value;
    }
}

function poemify() {
    var font = fonts[randomFont]
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


poemify();


color.addEventListener("input", colorfy);
range.addEventListener("input", fontify);
regular.addEventListener("click", makeReg);
bold.addEventListener("click", makeBold);
textSetting.addEventListener("input", textify);
