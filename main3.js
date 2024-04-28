function celsiusToFahrenheit (a, b){
    a=prompt('enter number');
    b=((a*9)/5+32);
   alert('NN°F '+ ': ' + b);
}
celsiusToFahrenheit();
function ahrenheitToCelsius (a, b){
   a=prompt('enter number');
   //b=((a*9)/5+32);/
   b= (a-32)*5/9;
  alert('NN°C '+ ': ' + b);
}

ahrenheitToCelsius();