
function executeThisCodeAfterFileLoaded(){
	console.log("It Worked!!!!");
}

function executeThisCodeAfterFileFails(){
	console.log("booooo");
}






var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();
console.log("myRequest", myRequest);