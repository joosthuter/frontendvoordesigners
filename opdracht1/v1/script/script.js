var dropOne = document.getElementById("drop1");
var dropTwo = document.getElementById("drop2");

function dragstart_handler(ev) {
    console.log("dragStart");
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.dropEffect = "move";

}

//DROPS

function dropOne_handler(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
    dropOne.style.height = "2em";
}

function dropTwo_handler(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
    dropTwo.style.height = "2em";
}

//DRAG OVER

function dragoverOne_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
    dropOne.style.height = "3em";
}

function dragoverTwo_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
    dropTwo.style.height = "3em";
}

//DRAG LEAVE

function dragleave(ev) {
    dropOne.style.height = "0.2em";
    dropTwo.style.height = "0.2em";
}



/*function createSpace {
    dropOne.style.height = "2em";
}

dropOne.addEventListener("dragOver", createSpace);*/
