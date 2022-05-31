//projetos de termometro 
const kelvin = 293;

//diferença de kelvin para celsius 273
const celsius = kelvin - 273;

//calculo de fahrenheit
var fahrenheit = celsius * (9 / 5) + 32;

//converter Celsius para Newton
var Newton = celsius * (33 / 100)
Newton = Math.floor(Newton)
console.log(`The temperature is ${Newton} degress Newton.`);

//vamos arredondar
fahrenheint = Math.floor(fahrenheit);
console.log(`The tamperature is ${fahrenheit} degrees Fahrenheit.`);

