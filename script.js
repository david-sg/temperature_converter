console.log("hello script js");

var inputHappened = function(currentInput){
  var currentInputNumber = Number( currentInput );	
  console.log( currentInput );
    if (isNaN(currentInputNumber))
	{
	    return "Please enter a number";
	}
  // var output = "WOW TEMPERATURE";
  // calculate temp in celcius and kelvin
  var output = currentInput + "℉ is: " + calculateCelcius(currentInputNumber) + "℃ and in Kelvin is: " + calculateKelvin(currentInputNumber); 
  return output;
};

var calculateCelcius = function (currentInputNumber) {
var	celcius = (5/9) * (currentInputNumber - 32);
celcius = celcius.toFixed(2);
	return celcius; 
}

var calculateKelvin = function (currentInputNumber) {
var kelvin = ((currentInputNumber - 32)/1.8)+273.15;
kelvin = kelvin.toFixed(2);
	return kelvin; 
}