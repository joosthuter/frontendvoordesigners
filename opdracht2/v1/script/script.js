var range = document.querySelector("#range");
var color = document.querySelector("#colorPicker");
var text = document.querySelectorAll(".text");


function fontify() {
    for (var i = 0; i < text.length; i++) {
        var allText = text[i];
        console.log("yeet");
        allText.style["font-size"] = this.value + "em";
    }
}

function colorfy() {
    for (var i = 0; i < text.length; i++) {
        var allText = text[i];
        console.log("yeet");
        allText.style["color"] = this.value;
    }
}

color.addEventListener("input", colorfy);
range.addEventListener("input", fontify);

