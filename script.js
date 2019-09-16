
var tempFahr = prompt("What is the temperature outside?", "Ex: 66");
var eventType = prompt("Is the event type casual, semi-formal, or formal?");

var choice1 = undefined;
var choice2 = undefined;

if (tempFahr < 54) {
  var choice1 = "a coat";
} else if (tempFahr > 70) {
  var choice1 = "no jacket";
} else {
  var choice1 = "a jacket";
}

if (eventType == "formal") {
	var choice2 = "a suit";
} else if (eventType == "semi-formal") {
	var choice2 = "a polo";
} else if (eventType == "casual") {
	var choice2 = "something comfy";
} 

var result = `Since it is ${tempFahr} outside and you are going to a ${eventType} event, you should wear ${choice1} and ${choice2}.`;

console.log(result);















