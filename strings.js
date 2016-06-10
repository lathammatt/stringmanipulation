var input = document.getElementById("text");
var output = document.getElementById("result");
var button = document.getElementById("select");



button.addEventListener("click", function(event){
		reversal(input.value);
		alphabits(input.value);
		palindrome(input.value);
});

input.addEventListener("keyup", function (event){
	if (event.keyCode === 13){
		reversal(input.value);
		alphabits(input.value);
		palindrome(input.value);
	} else {};
});




function reversal(string) {
	var reversed = string.split(" ").reverse();
	output.innerHTML += "<div>" + reversed.join(' ') + "</div>";

}

function alphabits(string) {
	var sorted = string.split(" ").sort();
	output.innerHTML += "<div>" + sorted.join(' ') + "</div>";

}

function palindrome(string) {
	var mirror = string.replace(/ /g,"").split("");
	var rorrim = mirror.slice().reverse();
	var mirror2 = mirror.join();
	var rorrim2 = rorrim.join();
	if (mirror2 === rorrim2 && mirror2 != ""){
		output.innerHTML += "<div>" + "I am a palindrome!" + "</div>"
		} else {}
	};

