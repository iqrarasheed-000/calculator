function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}
function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
function addChar(character) {
    var result = document.getElementById("result");
		result.value += character;
}

function square(form) {
    var result = document.getElementById("result");
	result.value = eval(result.value) * eval(result.value)
}
function sqrt() {
    var result = document.getElementById("result");
	result.value = Math.sqrt(result.value);
}
function deleteChar() {
    var result = document.getElementById("result");
	result.value = result.value.substring(0, result.value.length - 1)
}
function changeSign(result) {
    var result = document.getElementById("result");
	if(result.value.substring(0, 1) == "-")
		result.value = result.value.substring(1, result.value.length)
	else
		result.value = "-" + result.value
}
var val = 0.0;
function percent() {
  var result = document.getElementById("result");
  val = result.value;
  result.value = result.value + "%";
}
function ln(){
    var result = document.getElementById("result");
	result.value = Math.log(result.value);
}

function exp() {
    var result = document.getElementById("result");
	result.value = Math.exp(result.value);
}
function cos() {
    var result = document.getElementById("result");
	result.value = Math.cos(result.value);
}

function sin() {
    var result = document.getElementById("result");
	result.value = Math.sin(result.value);
}

function tan() {
    var result = document.getElementById("result");
	result.value = Math.tan(result.value);
}
