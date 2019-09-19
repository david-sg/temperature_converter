console.log("hello script js");

var step = 0;
var output = "";
var storeNumber = "";
var userType = "";

var inputHappened = function(currentInput){
  if (step ===0) {
  var currentInputNumber = Number( currentInput );	
  console.log( currentInput );
    if (isNaN(currentInputNumber))
	{
	    return "Please enter a number";
	}
  storeNumber = currentInputNumber;
  step = step +1;
  return( "Is this F, C, or K?" )
  } else if (step ===1) {
  if (currentInput ==="F"){
    userType = "F";
  output = currentInput + "℉ is: " + calculateCelcius(storeNumber) + "℃ and in Kelvin is: " + calculateKelvin(storeNumber); 
  return output;
  } else if (currentInput ==="C"){
    //convert to F and K
        userType = "C";
  } else if (currentInput==="K"){
        userType = "K";
    //convert to C and F
  }

  else {
    return "Is this F, C, or K?";
  }
}

    }

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